/*******************************************************************************
  SugarCube overrides.
*******************************************************************************/

declare module "twine-sugarcube" {
    export interface SugarCubeSetupObject {
        [key: string]: any;
    }

    export interface SugarCubeStoryVariables {
        [key: string]: any;
    }

    export interface SugarCubeTemporaryVariables {
        [key: string]: any;
    }
    
    export interface SugarCubeSettingVariables {
        [key: string]: any;
    }
}

export {};
