
const inputArrayForEach = [1,2,3,4,5];

const forEachCallbackFunction = (element) => {
    console.log(element * element);
}

function forEachFunction(array,callbackFunction){
    for(element of array){
        callbackFunction(element);             
    }
}

console.log("Output for forEach function");

forEachFunction(inputArrayForEach,forEachCallbackFunction);