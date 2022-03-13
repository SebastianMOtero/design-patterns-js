class Square {
  constructor(side) {
    this.side = side;
  }
}

function area(rectangle) {
  return rectangle._width * rectangle._height;
}

class SquareToRectangleAdapter {
  constructor(square) {
    this.square = square;
  }

  get _width() {
    return this.square.side;
  }

  get _height() {
    return this.square.side;
  }
}

let sq = new Square(5);
area(new SquareToRectangleAdapter(sq));