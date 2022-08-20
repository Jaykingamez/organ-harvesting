/*
Stolen (mostly)/Inspired by https://gitgud.io/darkofocdarko/fort-of-chains implementation

WIP: Implement types instead of using any...
*/

export default class TwineClass{
    clone() {
        return rebuildClassObject(this.constructor, this);
    }

    toJSON() {
        return toJsonHelper(this);
    }
}

function copyProperties(object: any, objectClass: any){
    Object.keys(objectClass).forEach((attribute) => {
        object[attribute] = clone(objectClass[attribute]);
    });
}

function rebuildClassObject(classObject: any, argList: any){
    var obj = Object.create(classObject.prototype);
    copyProperties(obj, argList);
    return obj;
}

function toJsonHelper(object: any){
    var dataObject = {};
    copyProperties(dataObject, object);
    return JSON.reviveWrapper(`new ${object.constructor.name}($ReviveData$)`, dataObject);
}