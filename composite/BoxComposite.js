class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Box extends Array {
    constructor() {
        super();
    }

    add(object) {
        this.push(object)
    }
}

const sum = function(containers){
    let result = 0;
    for (const container of containers) {
        if (container.name === undefined) {
            result += sum(container);
        } else {
            result += container.price
        }
    }
    return result
};


const calculator = new Product('calculator', 100);
const orange = new Product('orange', 10);
const mouse = new Product('mouse', 80);
const ring = new Product('ring', 500);
const pen = new Product('pen', 2);

const box1 = new Box();
box1.add(pen);

const box2 = new Box();
box2.add(mouse);
box2.add(ring);

const box3 = new Box();
box3.add(box1);
box3.add(orange)

const box4 = new Box();
box4.add(box3);
box4.add(box2);

const box5 = new Box();
box5.add(box4);
box5.add(calculator);

const totalValue = sum(box5)
console.log(totalValue)

/*


                 box5
                /   \
             box4   calculator
            /   \
        box3     box2
        /   \       \
    box1   orange   mouse          
    /               ring
  pen                 
                    
*/