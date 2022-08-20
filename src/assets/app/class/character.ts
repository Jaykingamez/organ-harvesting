import TwineClass from './twineClass';

export interface Character {
    name: string;
    race: string; // Human/Youkai others?
    gender: string; // Male/Female others?

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

