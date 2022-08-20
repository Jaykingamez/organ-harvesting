export default class TwineClass{
    constructor(){

    }

    clone() {
        // this would refer to function, so need this.classReference
        return new this(this);
    }

    toJSON() {
        return JSON.reviveWrapper(`new ${this.constructor.name}($ReviveData$)`, clone(this));
    }
}