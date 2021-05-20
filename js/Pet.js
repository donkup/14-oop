class Pet {
    constructor(name, fur) {
        this.name = name;
        this.furColor = fur;
        this.legsCount = 4;
        this.hasTale = true;
        this.voiceCount = 0;
        this.sound = 'miau au nom';
    }

    voise () {
        console.log(`${this.name} ${this.sound} (${++this.voiceCount})`);
    }
    introduce (){
        console.log(`Hi, I am ${this.name}, my fur is ${this.furColor} and i sound like ${this.voise}`);
    }



}

module.exports = Pet;