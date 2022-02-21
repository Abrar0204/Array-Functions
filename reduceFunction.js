
const inputArrayForReduce = [1,2,3,4,5];

const initialValue = 0;

const reduceCallbackFunction = (previousValue,currentValue) => {
    return previousValue + currentValue;
}

function reduceFunction(array,callbackFunction,initialValue){
    let finalValue = initialValue;
    for(element of array){
           finalValue = callbackFunction(finalValue,element)
    }
    return finalValue;
}

const reducedArray = reduceFunction(inputArrayForReduce,reduceCallbackFunction,initialValue);

console.log("Output for reduce function",reducedArray);