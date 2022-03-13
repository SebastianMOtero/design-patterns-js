class PetFactory {
    myPetIsA(animal) {
        switch (animal) {
            case 'dog':
                return new DogFactory()
            case 'cat':
                return new CatFactory()
            case 'bird':
                return new BirdFactory()
            default:
                throw new Error('Invalid animal: ' + animal)
        }
    }
}

class Pet {
    sound() {};
}

class Dog extends Pet {
    sound() {
        console.log('woof')
    };
}

class Cat extends Pet {
    sound() {
        console.log('meow')
    };
}

class Bird extends Pet {
    sound() {
        console.log('cheep')
    };
}

class DogFactory extends PetFactory {
    constructor() {
        return new Dog();
    }
}

class CatFactory extends PetFactory {
    constructor() {
        return new Cat();
    }
}

class BirdFactory extends PetFactory {
    constructor() {
        return new Bird();
    }
}


const myPet = new PetFactory().myPetIsA('dog');
console.log('My pet sound is: ')
myPet.sound()

const myPet2 = new PetFactory().myPetIsA('bird');
console.log('My pet sound is: ')
myPet2.sound()

const myPet3 = new PetFactory().myPetIsA('cat');
console.log('My pet sound is: ')
myPet3.sound()

try {
    new PetFactory().myPetIsA('shark');
} catch (error) {
    console.log(error.message)
}
