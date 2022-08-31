import TwineClass from './twineClass';
import {AliveBody, DeadBody} from './body';
import { uniqueNamesGenerator, names} from 'unique-names-generator';

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

    public static generateDeadNpc(inputRace = "human"): Npc{
        let name: string = uniqueNamesGenerator({
            dictionaries: [names]
          });
        let race = inputRace;
        let gender = random(0,1) === 0 ? "male" : "female";
        return new Npc({name: name, race: race, gender: gender, body: DeadBody.generator()});
    }

    public static generateAliveNpc(inputRace = "human"): Npc{
        let name: string = uniqueNamesGenerator({
            dictionaries: [names]
          });
        let race = inputRace;
        let gender = random(0,1) === 0 ? "male" : "female";
        return new Npc({name: name, race: race, gender: gender, body: AliveBody.generator()});
    }

}

export class Player extends Npc {

    public deadBodyStorage: Npc[] = [];
    public aliveBodyStorage: Npc[] = [];

}

