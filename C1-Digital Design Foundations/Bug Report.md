# Bug Report(9/27/2021)

- ## M1
    - ### Realism to Representational to Abstract
        - [x] Looks good
    - ### Blur/Shapes
        - [x] The slider needs to dynamically change the blur value
            - As of now the slider only changes once the mouse is released
    - ### Blending Modes #1
        - [x] This seems to happen randomly but  the top slider will get stuck when trying to change the value
        - [x] Sliders need to dynamically change the opacity values when moved
            - As of now the slider only changes once the mouse is released
    - ### Color Modes
        - [x] Styling is using the Materialize framework, this should be removed and have the themed style applied(this really only relates to the button but I thought it was worth mentioning)
        - [x] The top circle and left circle move apart when they overlap but the right one won’t until all three are overlapping
        - [x] Make the text color reflect the value
        - [x] Add Ricks text instructions
        - [x] Make mobile friendly
    - ### Eyedropper
        - [x] Looks good
        - [x] Change HSL to RGB (refer to helper.js)
    - ### Color Input/HTML
        - [x] Looks good
- ## M2
    - ### Layers
        - [x] Not completed
    - ### Masking
        - [x] Not sure if this is intentional but when the cursor moves far enough to the edges of the screen the image that is being masked out is revealed 
        - [x] Make masking shape resizable.
    - ### Blending Modes #2
        - [x] This seems to happen randomly but  the top slider will get stuck when trying to change the value
        - [x] Sliders need to dynamically change the opacity values when moved
            - As of now the slider only changes once the mouse is released
    - ### Brush/Pencil/Color
        - [x] Looks good
- ## M3
    - ### Blending Modes #3
        - [x] This seems to happen randomly but the top slider will get stuck when trying to change the value
        - [x] Sliders need to dynamically change the opacity values when moved
            - As of now the slider only changes once the mouse is released
    - ### Filters
        - [x] Needs to be optimized
            - After you choose several filters the module starts to get bogged down
                - This is related to the “setFilter” function
                    - I think a solution might be to only call “setFilter” once when needed versus constantly
    - ### Adjustments | HSBA
        - [x] Sliders need to dynamically change the opacity values when moved
            - As of now the slider only changes once the mouse is released
- ## M4
    - ### Shapes
        - [x] Shapes need to be restricted to the canvas and not overlap the controls
    - ### Curves
        - [x] Looks good
    - ### Vector Shapes
        - [x] Looks good
- ## M5
    - ### Shapes, line, pen tool
        - [x] Not Finished
        - [x] Resize canvas
    - ### Gradients
        - [x] Looks good
    - ### Clipping Masks
        - [x] Not a bug but, there should be an option to remove the mask and reapply
- ## M6
    - ### Save as png
        - [x] Looks good
        - [x] window.alert before saving to let people know. "Are you sure you want to save this to your computer"
# All modules need to be double-checked to be sure they are optimized for mobile.

