import { Injectable } from '@angular/core';
import { ModuleUtils, IModule } from "../base-classes/code/CodeModule"; 

import { AllModules as ModuleSet } from "../../assets/modules/AllModules";

@Injectable()
export class ModuleService {

  public static modules: IModule[] = [];

  // the actual library loaded
  public static MOB_MODS = {};

  constructor() { }

  get modules(){
    return ModuleService.modules;
  }

  load_functions(){
    let mObj = {};
    ModuleSet.map((m) => { 
        let fnsObj = {}; 

        ModuleUtils.getFunctions(m).map((fn) => {
          fnsObj[fn["name"]] = fn.def;

        });

        //console.log(m["_name"] + " :: " , Object.keys(fnsObj))

        if(mObj[m["_name"]]){
          //console.log("not undefined ... add functions")
          //console.log(Object.keys(mObj[m["_name"]]));
          //console.log(Object.keys(fnsObj));
          mObj[m["_name"]] = {...mObj[m["_name"]], ...fnsObj};
          //console.log(Object.keys(mObj[m["_name"]]));
        }
        else{
          mObj[m["_name"]] = fnsObj;
        }
    });

    ModuleService.MOB_MODS = mObj;
  }

  load_modules(){
      // do something
      let module_set = [];
      let module_map = [];
      let moduleSet = module_set;
      let moduleMap = module_map;

      let self = this;
      ModuleSet.map(function(mod){
          let name: string = ModuleUtils.getName(mod);

          if(moduleMap[name] !== undefined){
            let fns = ModuleUtils.getFunctions(mod);
            let original_mod = moduleMap[name];

            for(let i=0; i < fns.length; i++){
              let f = fns[i];
              original_mod[f.name] = <Function>(f.def);
            }

          }
          else{
            moduleMap[name] = mod;
            moduleSet.push(mod);
          }
      })

      // sort the set
      // for the library rendering
      module_set = module_set.sort(function(a, b){
        return a["_name"].toLowerCase().localeCompare(b["_name"].toLowerCase());
      })


      ModuleService.modules = module_set;     
      this.load_functions();
  }

}

    
