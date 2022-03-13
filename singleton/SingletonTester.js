class singletonTester
{
  static isSingleton(generator)
  {
    const obj1 = new generator();
    const obj2 = new generator();
    return obj1 === obj2;

    // return generator.constructor.instance !== undefined
  }
}

class singleton {
    constructor(timestamp) { 
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }
        this.timestamp = timestamp;
        this.constructor.instance = this;
    }

    sayTimestamp() {
        return this.timestamp
    }
}

class notSingleton {
    constructor(timestamp) { 
        this.timetamp = timestamp;
    }

    sayTimestamp() {
        return this.timestamp
    }
}
