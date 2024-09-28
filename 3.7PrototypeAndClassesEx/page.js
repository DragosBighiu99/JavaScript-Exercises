function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}

function Position(x = 0, y = 0) {
    this.x = y;
    this.y = y;
}

Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}

function ProgramWindow() {
    this.screenSize = new Size(800,600);
    this.size = new Size()
    this.position = new Position();
}

ProgramWindow.prototype.resize = function (newSize) {
    const minWidth = 1;
    const minWeight = 1;

    const maxWidth = Math.min(this.screenSize.width - this.position.x + 1, newSize.width);
    const maxHeight = Math.min(this.screenSize.height - this.position.y + 1, newSize.height);

    const width = Math.max(minWidth, Math.min(newSize.width, maxWidth));
    const height = Math.max(minHeight, Math.min(newSize.height, maxHeight));

    this.size.resize(width,height);
}

ProgramWindow.prototype.move = function(newPosition) {
    mixX = 0;
    minY = 0;

    const maxX = Math.min(this.screenSize.width - this.size.width, newPosition.x);
    const maxY = Math.min(this.screenSize.height - this.size.height, newPosition.y);

    const x = Math.max(minX, Math.min(newPosition.x, maxX));
    const y = Math.max(minY, Math.min(newPosition.y, maxY));

    this.position.move(x,y)
}

function changeWindow(pogramWindow) {
    const newSize = new Size(400,300);
    const newPosition = new Position(100,150);

    programWindow.resize(newSize);
    programWindow.move(newPosition);

    return programWindow
}