class Device {
    constructor(remoteController) {
        this.controller = remoteController;
    }
}

class Television extends Device {
    constructor(remoteController) {
        super(remoteController);
    }

    togglePower() {
        return `Turn ${this.controller.togglePower()} the TV with the ${this.controller.controller}`
    }

    mute() {
        return `TV ${this.controller.setMute()} with the ${this.controller.controller}`
    }
}

class Radio extends Device{
    constructor(remoteController) {
        super(remoteController);
    }

    togglePower() {
        return `Turn ${this.controller.togglePower()} the radio with the ${this.controller.controller}`
    }

    mute() {
        return `Radio ${this.controller.setMute()} with the ${this.controller.controller}`
    }
}

class Controller {
    constructor() {
        this.power = 'off'
        this.mute = false;
    }

    togglePower() {
        this.power = this.power === 'off' ? 'on' : 'off'
        return this.power;
    }

    setMute() {
        this.mute = !this.mute
        return this.mute ? 'muted' : 'no muted' 
    }
}

class RemoteController extends Controller {
    constructor() {
        super();
        this.controller = 'remote controller'
    }
}

class PhoneController extends Controller {
    constructor() {
        super();
        this.controller = 'phone controller'
    }
}

const remote = new RemoteController();
const tv = new Television(remote);

const remote2 = new PhoneController();
const radio = new Radio(remote2);

console.log(tv.togglePower())
console.log(tv.mute())
console.log(tv.mute())

console.log(radio.togglePower())