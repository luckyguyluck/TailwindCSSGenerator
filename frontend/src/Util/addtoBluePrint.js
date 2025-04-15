// Util/addtoBluePrint.js

let Blueprint = {};

export const addtoBluePrint = (target, key, value) => {
  if (target && key && value) {
    if (!Blueprint[target]) {
      Blueprint[target] = {}; // Create the target group if it doesn't exist
    }

    Blueprint[target][key] = value;
    return Blueprint;
  } else {
    return Blueprint;
  }
};

export const getBluePrint = () => Blueprint;

export const getClassStructure = ()=>{

    let ClassStructure = ""

    for (const target in Blueprint) {
        const innerObj = Blueprint[target];      
        for (const key in innerObj) {
          const value = innerObj[key];
          ClassStructure += `${value} `
        }
      }
      console.log(`Returned as : ${ClassStructure}`)
    return ClassStructure;

}

