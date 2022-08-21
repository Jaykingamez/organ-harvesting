import { NumberLiteralTypeAnnotation } from '@babel/types';
import TwineClass from './twineClass';

export interface Character {
    name: string;
    race: string; // Human/Youkai others?
    gender: string; // Male/Female others?

}

interface BodyInterface {
    deadOrAlive: boolean; // generator will work differently depending if body is dead or alive
    skin: number; // Skin people alive :)
    
    
    /* Organs that can be harvested */

    // [false, false], no organs on both sides, [true, true], organs are present
    eyeArray: boolean[]; 
    lungArray: boolean[];
    kidneyArray: boolean[];

     // Single organs that may kill if harvested
    heart: boolean; // 500ml blood is lost, and patient will DIE
    liver: boolean; // 10% chance of death
    brain: boolean; // yum


    /* Limbs that can be harvested */

    // [false, false], no limbs on both sides, [true, true], limbs are present
    armArray: boolean[];
    legArray: boolean[];
    earArray: boolean[];
}

interface AliveBodyInterface extends BodyInterface {
    bloodVolume: number; // 5000 ml for average human, 2000ml or below blood, human will die;
    anesthesia: boolean; // Add flavour text of patient screaming in pain, might cause patient to die from trauma
    pain: number; // 0 - 100, how loud will they scream?
    mental: number; // 0 - 100, mindbroken
}


interface DeadBodyInterface extends BodyInterface {
    decompositionValue: number; // 0 - 100, affects value, 100 is completely bones;
}

export class AliveBody extends TwineClass implements AliveBodyInterface {
    
}

export class DeadBody extends TwineClass implements DeadBodyInterface {

}

export class Npc extends TwineClass{

    private _name!: string;
    private _race!: string;
    private _gender!: string;

    constructor({name, race, gender}: Character){
        super();
        this.name = name;
        this.race = race;
        this.gender = gender;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get race(): string {
        return this._race;
    }
    public set race(value: string) {
        this._race = value;
    }
    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }

}

export class Player extends Npc {

}

