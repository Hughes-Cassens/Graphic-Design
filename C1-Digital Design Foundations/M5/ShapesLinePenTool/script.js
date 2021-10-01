(function(window, undefined){
    console.clear();
    
    if (!Path2D) {
      var msg = "Hi. You need Google Chrome to view this pen correctly.\n If you are using Chrome, you may need to update to the latest version. \n\n Why do you need Google Chrome? \n\n Only chrome supports the Path2D object as of the time of writing, and I didn't include the polyfill. \n\n If you want to try anyways, press 'Ok'.";
      
      if (!window.confirm(msg) ) throw new Error("No Path2D object.")
    
    }
    
    var COLORS  = {
        "preview": "#0c8",
        "stroke": "#363636",
        "anchor": "#0cc"
      };
    
    
    
    /* * * * * 
  
     HELPERS
  
    * * * * */
    
    var extend = function(){
      
      if (arguments.length < 2) return;
      var extended = arguments[0];
      for (var _x = 1, _xx = arguments.length; _x < _xx; _x++) {
        var base = arguments[_x];
        for (var key in base) {
          extended[key] = base[key];
        }
      }
      return extended;
    };
  
    /* * * * * 
      
    INTERNAL OBJECTS
      
    * * * * */
    
    var Line = function(parent, x1, y1, x2, y2){
      
      var id = parent.newId();
      this.__id = id;
      this.id = parent.prefix + "-" + id;
      this.anchorWidth = 5;
      this.type = "line";
      this.parent = parent;
      var canvas = parent.canvas,
          ctx = parent.ctx;
      
      this.origin = {};
      this.target = {};
      
      
      this.origin.x = x1 || 0;
      this.origin.y = y1 || 0;
      
      this.target.x = x2 || x1;
      this.target.y = y2 || y1;
      
      this.hidden = false;
      
      this.anchor = function(x,y){
        
        var n = this.anchorWidth /2;
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = this.parent.colors.anchor;
        ctx.strokeRect(x - n, y - n, n*2, n*2);
        ctx.globalCompositeOperation = "source-over";
      };
      
      this.drawOrigin = function(){
        
        this.anchor(this.origin.x, this.origin.y);
      };
      
      this.drawTarget = function(){
        
        this.anchor(this.target.x, this.target.y);
      };
      
      this.to = function(x, y){
        
        // allow passing in of single parameters
        this.target.x = x !== undefined ? x : this.target.x;
        this.target.y = y !== undefined ? y : this.target.y;
      };
   
      
      this.render = function(c){
        
        // c passed in for previewing.
        if (c === undefined && this.hidden) return;
        
        ctx.strokeStyle = c || this.parent.colors.stroke;
  
        ctx.beginPath();
        var p = new Path2D();
        p.moveTo(this.origin.x, this.origin.y);
        p.lineTo(this.target.x, this.target.y);
        p.stroke();
        this.path = p;
        console.log(p);
      }; 
      
      this.preview = function(){
        
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.parent.render();
        this.drawOrigin();
        this.render(this.parent.colors.preview);
        this.drawTarget();
        ctx.restore();
      };
      
    };
    
    
    var Curve = function(parent, x1, y1, x2, y2, c1, c2){
      
      // Curve is an extension of Line, but with
      // a different render and the curve data
      var line = new Line(parent, x1, y1, x2, y2);
      line.type = "curve";
      
      line.curviture = {};
      line.curviture.x = c1 || 0;
      line.curviture.y = c2 || 0;
      
      line.arc = function(x, y){
        
        this.curviture.x = x;
        this.curviture.y = y;
      };
      
      line.move = function(x, y){
        
        var xx = x,
            yy = y,
            cw = parent.canvas.width,
            ch = parent.canvas.height; 
        
        if (x < 0) xx = 0;
        if (y < 0) yy = 0;
        
        if (x > cw) x = cw;
        if (y > ch) y = ch;
        
        this.origin.x += x;
        this.origin.y += y;
        
        this.target.x += x;
        this.target.y += y;
        
        this.curviture.x += x;
        this.curviture.y += y;
        
      };
      line.render = function(c){
        
        // c passed in for previewing.
        if (c === undefined && this.hidden) return;
        var ctx = this.parent.ctx;
        var c_x = this.curviture.x || this.target.x,
            c_y = this.curviture.y || this.target.y;
        ctx.strokeStyle = c || this.parent.colors.stroke;
  
        ctx.beginPath();
        var p = new Path2D();
        p.moveTo(this.origin.x, this.origin.y);
        p.quadraticCurveTo(c_x, c_y, this.target.x, this.target.y);
        
        ctx.stroke(p);
        this.path = p;
      };
      
      return line;
    };
  
    
    var Pen = function(canvasEl, maximize){
      
      
       /* * * * * 
      
        PRIVATE VARS
      
       * * * * */
    
  
      // a simple reusable function to make sure events retain context,
      // without needed a bunch of lambdas
      var self = this;
      var callEvent = (function(e){
        
        if (!this.events[e.type]) return;
        
        e.preventDefault();
        this.events[e.type].call(this, e);
          
      }).bind( this );
      
      var currentLine;
      
  
      this.canvas = canvasEl;
      var prefix = this.prefix = $(canvasEl).attr("id");
      var id = 0;
      
      this.canvas.width = maximize ? window.innerWidth : canvasEl.width;
      this.canvas.height = maximize ? window.innerHeight : canvasEl.height;
      
      this.ctx = canvasEl.getContext("2d");
      
      this.colors = COLORS;
      
      // the array full of vectors
      this.children = [];
      
      this.push = function(item){
        
        this.children.push(item);
        this.addToVectorlist(item);
        this.render();
      };
      
      this.newId = function(){
        
        id++;
        return id-1;
      };
      
      this.pop = this.undo = function(){
         // todo
        var l = this.children.length;
        if (l === 0) return;
        var c = this.children[l-1];
        this.removeFromVectorlist(c);
        this.children.length = l - 1;
        this.render();
      };
      
      this.render = function(){
        
        var c = this.children;
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          c.forEach(function(val, i, a){
            val.render();
          });
      };
      
      
      /* * * * * 
      
        DOM REPRESENTATION (vectorlist element)
      
       * * * * */
      
      this.addToVectorlist = function(child){
        
        var id = child.__id, type = child.type;
        var html = "<li id='"+child.id+"'> Path " + id + "</li>";
        $(html).prependTo(".vectorlist");
      };
      
      this.removeFromVectorlist = function(child){
        
        $("li#" + child.id).remove();
      };
      
      this.clearVectorlist = function(){
        
        $("#" + prefix + "-vectorlist").children().remove();
      };
      
      
      this.clear = function(){
        if (!window.confirm("Are you sure you want to clear all your paths?")) return;
        this.children = [];
        id = 0;
        this.clearVectorlist();
        this.render();
      };
      
      
      this.getPathAt = function(x, y){
        
        var c = this.children,
            path,
            results;
        
        for (var _x = 0, _xx = c.length; _x < _xx; _x++) {
          
          path = c[_x].path;
          
          if (this.ctx.isPointInPath(path, x, y)) {
            results = c[_x];
            break;
          }
        }
        
        return results;
          
      };
      
      
      // resize is bound, in case an event triggers it (ie onResize event).
      this.resize = (function(w,h){
        
        this.canvas.width = w ? w : this.canvas.width;
        var hh = h ? h : this.canvas.height;
        this.canvas.height = hh;
        $(".vectorlist-wrapper").css({"height": hh + "px", "max-height": hh + "px"});
        return this;
        
      }).bind(this);
      
      
      /* * * * * 
      
        TOOLS
      
       * * * * */
      
      
      this.changeTool = function(toolName){
        
        var tool = this.tool[toolName]
        
        if ( !tool ) return;
  
        if (toolName === "select") $(self.canvas).addClass( toolName );
        else $(self.canvas).removeClass("select");
        
        this._tool = toolName;
        this.events = tool;
        
        // deal with the interface
        $("button.tool").removeClass("active");
        $( "#" + prefix + "-" + toolName + "-tool" ).addClass("active");
        
      };
      
      this._tool = "pen";  // the current tool
      
      
      this.tool = {};  // the main hash of tools, and their events
      
      
      this.interface = {
        
        "keyup": function(e){
            
          console.log("KEY", e.which);
          
          if (e.which === 49) this.changeTool("pen");   // 1 
          if (e.which === 50) this.changeTool("select");;     // 2
          if (e.which === 90) this.undo();                    // Z
          if (e.which === 80) this.clear();                   // P
          return;
        },
        "click": function(e){
          
          // a fancy and moderately slow way of getting prefix-***TOOLNAME***Tool
          var tool = ($(e.target).attr("id")
                      .split("wow-")[1])
                      .split("-tool")[0];
          
          this.changeTool(tool);
        }
        
      };
      
      
      var clickState = 0; // keeps track of clicks
      var lastClickCoords = {}; // keeps track of position last clicked
        
      this.tool.pen = {
        
        "mousedown": function(e){
          
          if (clickState === 0) {
            
            this.disallowToolChange();
            self.ctx.save();
  
            currentLine = new Curve(this, e.offsetX, e.offsetY);
  
            $(self.canvas).on("mousemove", callEvent);
            clickState++;
          }
          else if (clickState === 1) {
            
            clickState++;
            currentLine.to(e.offsetX, e.offsetY)
            
          }
          else if (clickState === 2) {
            
            clickState = 0;
            currentLine.arc(e.offsetX, e.offsetY);
            this.push(currentLine);
  
            self.ctx.restore();
  
            $(self.canvas).off("mousemove", callEvent);
            this.allowToolChange();
          }
        },
        
        "mousemove": function(e){
          
          if (clickState === 1) {
            currentLine.to(e.offsetX, e.offsetY)
            currentLine.preview();
          }
          else if (clickState === 2) {
            currentLine.arc(e.offsetX, e.offsetY);
            currentLine.preview();
            
          }
  
        }
      };
      
      
      this.tool.select = {
        "mousedown": function(e){
          
          currentLine = this.getPathAt(e.offsetX, e.offsetY)
          
          if (!currentLine) {this.render(); return;};
          
          currentLine.preview();
          lastClickCoords.x = e.offsetX;
          lastClickCoords.y = e.offsetY;
          $(self.canvas).on("mousemove", callEvent);
          $(self.canvas).on("mouseup", callEvent);
          
        },
        "mousemove": function(e){
          var x = e.offsetX - lastClickCoords.x,
              y = e.offsetY - lastClickCoords.y,
              sensitivity = 10;
          
          console.log(x, y);
          currentLine.move(x, y);
          
        },
        "mouseup": function(e){
          this.render();
  
          $(self.canvas).off("mousemove", callEvent);
          $(self.canvas).off("mouseup", callEvent);
          
        }
      };
      
      /* 
      
        Any future tools should be added here 
      
      */
      
      // Combine each tool events hash with the hotkey events
      // this simplifies the scalability
      for (var key in this.tool) {
        this.tool[key] = extend(this.tool[key], this.interface);
      }
  
  
      this._eventsON = true;
      // All events in hash are called in this scope
  
      this.events = this.tool.pen; // this.events switches based on the tool in use
      
      this.enableEvents = (function(){
        
        if (this.eventsON) return; 
        // ^ already on.  Returning prevents multiple listeners from being set.
        this._eventsON = true;
        this.displayEventsStatus();
        // CANVAS CLICKS + STUFF
        $(self.canvas).on("mousedown", (function(e){callEvent(e)}) );
        // HOTKEYS
        $(window).on("keyup", callEvent);
        // BUTTON CLICKS
        $(".tools > button.tool:not(.active)").on("click", (function(e){callEvent(e)}) );
        
      }).bind(this);
      
      this.displayEventsStatus = function(){
        
        if (this._eventsON) $("#" + prefix + "-focus").addClass("active");
        else $("#" + prefix + "-focus").removeClass("active");
      };
      
      this.disableEvents = (function(){
        
        if (!this._eventsON) return;
        this._eventsON = false;
        this.displayEventsStatus();
        $(self.canvas).off("mousedown");
        // HOTKEYS
        $(window).off("keyup", callEvent);
        $(".tools > button.tool:not(.active)").off("click");
        
      }).bind(this);
      
      this.allowToolChange = (function(){
        
        $(window).on("keyup", callEvent);
        $("button.tool").removeClass("disabled");
        $(".tools > button.tool:not(.active)").on("click", (function(e){callEvent(e)}) );
      }).bind(this);
                                                  
      this.disallowToolChange = (function(){
        $("button.tool:not(.active)").addClass("disabled");
        $(window).off("keyup", callEvent);
        $(".tools > button.tool:not(.active)").off("click");
      }).bind(this);
      
      
      
      // GLOBAL EVENTS
      $(window).on("focus", this.enableEvents);
      $(window).on("blur", this.disableEvents);
      
      return this;
  
    }; // end of Pen constructor
    
    
    
    
    var pen = new Pen( document.getElementById("wow") ).resize(window.innerWidth,window.innerHeight);
    
    $(window).on("resize", (function(){pen.resize(window.innerWidth,window.innerHeight)}));
    console.log("API:", pen);
  
    
  })(this);