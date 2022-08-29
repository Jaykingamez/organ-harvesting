import { NumberLiteralTypeAnnotation } from '@babel/types';
import TwineClass from './twineClass';

interface Character {
    name: string;
    race: string; // Human/Youkai others?
    gender: string; // Male/Female others?

}

interface BodyInterface {
    deadOrAlive: boolean; // generator will work differently depending if body is dead or alive
    skin: number; // Skin people alive :)
    
    
    /* Organs that can be harvested */

    // [false, false], no organs on both sides, [true, true], organs are present
    lungArray: boolean[];
    kidneyArray: boolean[];

     // Single organs that may kill if harvested
    heart: boolean; // 500ml blood is lost, and patient will DIE
    liver: boolean; // 10% chance of death
    brain: boolean; // yum


    /* Limbs that can be harvested */

    // [false, false], no limbs on both sides, [true, true], limbs are present
    eyeArray: boolean[]; 
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


// Return status number
function statusGenerator(): number{
    return random(0, 100);
}

export class AliveBody extends TwineClass {
    public deadOrAlive: boolean; // generator will work differently depending if body is dead or alive
    public skin: number; // Skin people alive :)
    
    /* Organs that can be harvested */
    // [false, false], no organs on both sides, [true, true], organs are present
    public lungArray: boolean[];
    public kidneyArray: boolean[];

     // Single organs that may kill if harvested
    public heart: boolean; // 500ml blood is lost, and patient will DIE
    public liver: boolean; // 10% chance of death
    public brain: boolean; // yum

    /* Limbs that can be harvested */

    // [false, false], no limbs on both sides, [true, true], limbs are present
    public eyeArray: boolean[]; 
    public armArray: boolean[];
    public legArray: boolean[];
    public earArray: boolean[];

    public bloodVolume: number; // 5000 ml for average human, 2000ml or below blood, human will die;
    public anesthesia: boolean; // Add flavour text of patient screaming in pain, might cause patient to die from trauma
    public pain: number; // 0 - 100, how loud will they scream?
    public mental: number; // 0 - 100, mindbroken

    constructor({deadOrAlive, skin, lungArray, kidneyArray, heart, liver, brain, eyeArray, 
        armArray, legArray, earArray, bloodVolume, anesthesia, pain, mental}: AliveBodyInterface){
        super();
        
        this.deadOrAlive = deadOrAlive;
        this.skin = skin;

        this.lungArray = lungArray;
        this.kidneyArray = kidneyArray;

        this.heart = heart;
        this.liver = liver;
        this.brain = brain;

        this.eyeArray = eyeArray;
        this.armArray = armArray;
        this.legArray = legArray;
        this.earArray = earArray;
        
        this.bloodVolume = bloodVolume;
        this.anesthesia = anesthesia;
        this.pain = pain;
        this.mental = mental;
    }

    public generator(): AliveBody{
        let alive = true;
        let skin = 3600; // 3600 grams

        let lungArray = AliveBody.boolOrganGenerator();
        let kidneyArray = AliveBody.boolOrganGenerator();

        let heart = true;
        let liver = true;
        let brain = true;
        
        let eyeArray = AliveBody.boolOrganGenerator();
        let armArray = AliveBody.boolOrganGenerator();
        let legArray = AliveBody.boolOrganGenerator();
        let earArray = AliveBody.boolOrganGenerator();

        let bloodVolume = AliveBody.bloodGenerator();
        let anesthesia =  AliveBody.trueOrFalse();
        let pain = statusGenerator();
        let mental = statusGenerator();



        return new AliveBody({
            deadOrAlive: alive, 
            skin: skin, 
            lungArray: lungArray,
            kidneyArray: kidneyArray,
            heart: heart,
            liver: liver,
            brain: brain,
            eyeArray: eyeArray,
            armArray: armArray,
            legArray: legArray,
            earArray: earArray,
            anesthesia: anesthesia,
            pain: pain,
            mental: mental,
            bloodVolume: bloodVolume
           });
    }

    private static boolOrganGenerator(): boolean[]{
        // 80% - both organs, 10% - 1 organs, 10% - no organs
        let result = random(1, 100);
        let organs = [true, true]; // has both eyes
        if (result > 80){
            if (result <= 85){
                organs = [false, true] // lacks left organ
            } else if (result <= 90){
                organs = [true, false] // lacks right organ
            } else if(result <= 100){
                organs = [false, false] // lacks both organs
            }
        }
        return organs;
    }

    private static bloodGenerator(): number {
        return random(4500, 5700); // in millimeters
    }

    private static trueOrFalse(): boolean {
        let result = random(0, 1);
        return result === 0 ? false: true;
    }
    
}

export class DeadBody extends TwineClass implements DeadBodyInterface {
    public generator(): DeadBody{
    
    }
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

