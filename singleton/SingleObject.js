class singleton {
    constructor() { 
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }
        this.constructor.instance = this;
    }

    wasICreated() {
        return this.constructor.instance !== undefined
    }
}


const st = new singleton();
console.log(st.wasICreated())