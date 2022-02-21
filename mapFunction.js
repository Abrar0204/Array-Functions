
const inputArrayForMap = [1,2,3,4,5];

const mapCallBackFunction = (param) => {
    return param * 2;
}

function mapFunction(array,callbackFunction){
    const newArray = []; 
    for(element of array){
        newArray.push(callbackFunction(element));
    }
    return newArray;
}

const mappedArray = mapFunction(inputArrayForMap,mapCallBackFunction);

console.log("Output for map function",mappedArray);