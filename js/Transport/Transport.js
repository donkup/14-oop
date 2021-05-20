class Transport {
    constructor (name, sterWhell, seatCount, wheelCount,){
        this.name = name;
        this.sterWhell = sterWhell;
        this.seatCount = seatCount;
        this.wheelCount = wheelCount;
        this.engineStart = false;
        
    }
    turnOnEngine(){
        this.engineStart = true;
    }
    turnOffEngine(){
        this.engineStart = false;
    }
    
    
}

module.exports = Transport;
