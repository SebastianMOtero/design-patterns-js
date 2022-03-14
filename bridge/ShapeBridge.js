class Shape {
  constructor(name, renderer) {
    this.renderer = renderer;
    this.name = name;
  }

  toString() {
    return `Drawing ${this.name} as ${this.renderer.whatToRenderAs()}`;
  }
}

class Triangle extends Shape {
  constructor(renderer) {
    super("triangle", renderer);
  }
}

class Square extends Shape {
  constructor(renderer) {
    super("square", renderer);
  }
}

class VectorRenderer {
  whatToRenderAs() {
    return `lines`;
  }
}

class RasterRenderer {
  whatToRenderAs() {
    return `pixels`;
  }
}

let vector = new VectorRenderer();
let sq = new Square(vector);
console.log(sq.toString());
