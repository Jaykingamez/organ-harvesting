interface character {
    name: string;
    race: string; // Human/Youkai others?
    gender: string; // Male/Female others?

}

class Player implements character {
    
    constructor({name, race, gender}: character){
    }

    clone(){
        
    }


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