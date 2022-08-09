interface Character {
    name: string;
    race: string; // Human/Youkai others?
    gender: string; // Male/Female others?

}

class Npc implements Character {
    constructor({name, race, gender}: Character){
    }
    
    /*
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
	    return JSON.reviveWrapper('new setup.Npc($ReviveData$)', this.clone());
    }
    */

    public get name(): string {
        return this.name;
    }
    public set name(value: string) {
        this.name = value;
    }
    public get race(): string {
        return this.race;
    }
    public set race(value: string) {
        this.race = value;
    }
    public get gender(): string {
        return this.gender;
    }
    public set gender(value: string) {
        this.gender = value;
    }

    
}

class Player extends Npc {
    constructor({name, race, gender}: Character){
        super({name, race, gender});
    }
    
}
