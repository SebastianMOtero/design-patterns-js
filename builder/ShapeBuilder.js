// Shape
class Shape {
    constructor() {
        this.area = 0;
        this.perimeter = 0;
        this.color = '';
        this.name = '';
    }

    toString() {
        let str = 'You build ' +  this.name;
        if (this.color !== '') {
            str += ` painted ${this.color}`;
        }
        str += '.\n';
        
        if (this.perimeter !== 0) {
            str += `It has a perimeter of ${this.perimeter} and area of ${this.area}`
        }
        return str;
    }
}

// Abstract builder
class ShapeBuilder {
    constructor(shape = new Shape()) {
        this.shape = shape;
    }

    isATriangle() {
        return new TriangleBuilder(this.shape)
    }

    isASquare() {
        return new SquareBuilder(this.shape);
    }

    isARectangle() {
        return new RectangleBuilder(this.shape);
    }

    colored(color) {
        this.shape.color = color;
        return this;
    }
}

// Concrete builder
class TriangleBuilder extends ShapeBuilder {
    constructor(shape) {
        super(shape)
    }

    itsBaseMeasures(base) {
        this.base = base;
        return this;
    }

    itsSidesMeasures(side1, side2) {
        this.side1 = side1;
        this.side2 = side2;
        return this;
    }

    build() {
        this.shape.name = 'a triangle';
        if (this.base !== 0 && this.side1 !== 0 && this.side2 !== 0) {
            this.shape.name = 'a scalene triangle';
            if (this.side1 === this.side2) {
                this.shape.name = 'an isosceles triangle'
                if (this.side1 === this.base) {
                    this.shape.name = 'an equilateral triangle';
                }
            }
            const midBase = this.base/2;
            const aux = Math.pow(this.side1, 2) - Math.pow(midBase, 2);
            const height = Math.sqrt(aux);

            console.log(height)
            this.shape.area = (this.base * height) / 2;
            this.shape.perimeter = this.base + this.side1 + this.side2;
        }

        return this.shape;
    }
}

class SquareBuilder extends ShapeBuilder {
    constructor(shape) {
        super(shape)
        this.shape.name = 'a square'
    }

    itsSideMeasures(side) {
        this.side = side;
        return this;
    }

    build() {
        if (this.side !== undefined) {
            this.shape.perimeter = this.side * 4;
            this.shape.area = this.side * this.side;
        }
        return this.shape;
    }
}

class RectangleBuilder extends ShapeBuilder {
    constructor(shape) {
        super(shape)
        this.shape.name = 'a rectangle'
    }

    itsBaseMeasures(base) {
        this.base = base;
        return this;
    }

    itsHeightMesuares(height) {
        this.height = height;
        return this;
    }

    build() {
        if (this.base !== 0 && this.height !== 0) {
            this.shape.perimeter = 2 * this.base + 2 * this.height;
            this.shape.area = this.base * this.height;
        }
        return this.shape;
    }
}

// Shapes
let myShape = new ShapeBuilder()
                .isATriangle()
                .itsBaseMeasures(6)
                .colored('yellow')
                .itsSidesMeasures(5, 5)
                .build();

console.log(myShape.toString());
// You build an isosceles triangle painted yellow. 
// It has a perimeter of 16 and area of 12 

let myShape2 = new ShapeBuilder()
                .isASquare()
                .build();

console.log(myShape2.toString());
// You build a square.

let myShape3 = new ShapeBuilder()
                .isARectangle()
                .colored('red')
                .itsBaseMeasures(5)
                .itsHeightMesuares(3)
                .build();

console.log(myShape3.toString());
// You build a rectangle painted red. 
// It has a perimeter of 16 and area of 15 