export interface Character {
    name: string;
    race: string; // Human/Youkai others?
    gender: string; // Male/Female others?

}

export class Npc implements Character{

    private _name!: string;
    private _race!: string;
    private _gender!: string;

    constructor({name, race, gender}: Character){
        this.name = name;
        this.race = race;
        this.gender = gender;
    }
    
    clone(){
        return new Npc(this);
    }

    // Return a code string that will create a new instance containing our
	// own data.
	//
	// NOTE: Supplying `this` directly as the `reviveData` parameter to the
	// `JSON.reviveWrapper()` call will trigger out of control recursion in
	// the serializer, so we must pass it a clone of our own data instead.
    toJson(){
	    return JSON.reviveWrapper('new setup.Npc($ReviveData$)', clone(this));
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

    clone(){
        return new Player(this);
    }

    // Return a code string that will create a new instance containing our
	// own data.
	//
	// NOTE: Supplying `this` directly as the `reviveData` parameter to the
	// `JSON.reviveWrapper()` call will trigger out of control recursion in
	// the serializer, so we must pass it a clone of our own data instead.
    toJson(){
	    return JSON.reviveWrapper('new setup.Player($ReviveData$)', clone(this));
    }
}

