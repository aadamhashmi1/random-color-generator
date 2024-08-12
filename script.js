document.addEventListener('DOMContentLoaded', function() {
    var canvas = new fabric.Canvas('c');
    var eraserSize = 1000;
    document.getElementById('pencil-tool').addEventListener('click', function() {
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.color = 'black';
        canvas.freeDrawingBrush.width = 100;
        document.getElementById('eraser-slider-container').style.display = 'none';
    });
    document.getElementById('eraser-tool').addEventListener('click', function() {
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.color = 'white';
        canvas.freeDrawingBrush.width = eraserSize;
        document.getElementById('eraser-slider-container').style.display = 'block';
    });
  document.getElementById('clear-canvas').addEventListener('click', function() {
        canvas.clear();
    });
    document.getElementById('eraser-size').addEventListener('input', function() {
        eraserSize = this.value;
        if (canvas.freeDrawingBrush.color === 'white') {
            canvas.freeDrawingBrush.width = eraserSize;
        }
    });
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.color = 'black';
    canvas.freeDrawingBrush.width = 4;
});
