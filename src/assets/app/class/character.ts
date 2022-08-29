import TwineClass from './twineClass';
import {AliveBody, DeadBody} from './body';

interface Character {
    name: string;
    race: string; // Human/Youkai others?
    gender: string; // Male/Female others?

    body: AliveBody | DeadBody;

}

export class Npc extends TwineClass{

    public name: string;
    public race: string;
    public gender: string;
    public body: AliveBody | DeadBody;

    constructor({name, race, gender, body}: Character){
        super();
        this.name = name;
        this.race = race;
        this.gender = gender;
        this.body = body;
    }

}

export class Player extends Npc {

}

