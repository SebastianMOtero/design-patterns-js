class CarPrototype {
    constructor(proto) {
        this.color = proto.color;
        this.model = proto.model; 
        this.doors = 4;
    }

    clone() {
        const c = new Car();

        c.color = this.color;
        c.model = this.model;
        c.doors = this.doors;

        return c;
    }
}

class Car {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
}

const proto = new Car('red', 'Tesla Model 3')
const carPrototype = new CarPrototype(proto)

const myCar = carPrototype.clone()

const myNewCar = carPrototype.clone()
myNewCar.color = 'black';

console.log(myCar)
console.log(myNewCar)