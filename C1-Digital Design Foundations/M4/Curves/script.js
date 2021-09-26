var y = view.size.height / 2;
var width = view.size.width;
var vector = new Point({
	angle: 45,
	length: width / 5
});
var offset = width / 30;
var handleTexts = [];
var path = new Path();
path.segments = [
	[[offset, y], null, vector.rotate(-90)],
	[[width / 2, y], vector.rotate(-180), vector],
	[[width - offset, y], vector.rotate(90), null]
];
path.fullySelected = true;

function onMouseMove(event) {
	var point = event.point.clone();
	// Constrain the event point, to not cut off the text:
	if (point.y < 22)
		point.y = 22;
	if (point.y > view.size.height - 24)
		point.y = view.size.height - 24;
	var delta = point - view.center;
	for (var i = 0; i < 2; i++) {
		var curve = path.curves[i];
		curve.handle1.y = curve.handle2.y = delta.y * (i % 2 ? 1 : -1);
		var firstPoint = curve.point1 + curve.handle1;
		var secondPoint = curve.point2 + curve.handle2;
		handleTexts[i * 2].point = secondPoint -
				(firstPoint.y < y ? [0, 10] : [0, -18]);
		handleTexts[i * 2 + 1].point = firstPoint -
				(firstPoint.y < y ? [0, 10] : [0, -18]);
	}
}

project.currentStyle.fillColor = 'black';
for (var i = 0; i < 3; i++) {
	var segment = path.segments[i];
	var text = new PointText({
		point: segment.point - [0, 10],
		content: i,
		justification: 'center'
	});
}

for (var i = 0; i < 2; i++) {
	handleTexts.push(
		new PointText({
			content: 'handleIn',
			justification: 'center'
		}),
		new PointText({
			content: 'handleOut',
			justification: 'center'
		})
	);
}

// Call onMouseMove once to correctly position the text items:
onMouseMove({ point: view.center - vector.rotate(-90) });