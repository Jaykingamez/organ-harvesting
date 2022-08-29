import TwineClass from './twineClass';

export interface BodyInterface {
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

function boolOrganGenerator(): boolean[]{
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

// Return status number
function statusGenerator(): number{
    return random(0, 100);
}

function trueOrFalse(): boolean {
    let result = random(0, 1);
    return result === 0 ? false: true;
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

    public randomGenerator(): AliveBody{
        let alive = true;
        let skin = 3600; // 3600 grams

        let lungArray = boolOrganGenerator();
        let kidneyArray = boolOrganGenerator();

        let heart = true;
        let liver = true;
        let brain = true;
        
        let eyeArray = boolOrganGenerator();
        let armArray = boolOrganGenerator();
        let legArray = boolOrganGenerator();
        let earArray = boolOrganGenerator();

        let bloodVolume = AliveBody.bloodGenerator();
        let anesthesia =  trueOrFalse();
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

    public perfectHealthGenerator(){
        let alive = true;
        let skin = 3600; // 3600 grams

        let lungArray = [true, true];
        let kidneyArray = [true, true];

        let heart = true;
        let liver = true;
        let brain = true;
        
        let eyeArray = [true, true];
        let armArray = [true, true];
        let legArray = [true, true];
        let earArray = [true, true];

        let bloodVolume = AliveBody.bloodGenerator();
        let anesthesia =  false;
        let pain = 0;
        let mental = 0;

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

    private static bloodGenerator(): number {
        return random(4500, 5700); // in millimeters
    }
}

export class DeadBody extends TwineClass implements DeadBodyInterface {
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

    public decompositionValue: number;

    constructor({deadOrAlive, skin, lungArray, kidneyArray, heart, liver, 
        brain, eyeArray, armArray, legArray, earArray, decompositionValue}: DeadBodyInterface){
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
            
        this.decompositionValue = decompositionValue;

    }


    public generator(): DeadBody{
        let alive = false;
        let skin = DeadBody.skinGenerator(); 

        let lungArray = [false, false];
        let kidneyArray = [false, false];

        let heart = true;
        let liver = true;
        let brain = true;
        
        let eyeArray = [false, false];
        let armArray = boolOrganGenerator();
        let legArray = boolOrganGenerator();
        let earArray = boolOrganGenerator();

        let decompositionValue =  statusGenerator();

        return new DeadBody({
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
            decompositionValue: decompositionValue
           });
    }

    private static skinGenerator(): number{
        return random(0, 3600);
    }
}