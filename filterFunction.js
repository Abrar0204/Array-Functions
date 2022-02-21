
const inputArrayForFilter = [1,2,3,4,5];

const filterCallbackFunction = (element) => {
    let elementIsEven = element % 2 == 0;
    return elementIsEven;
}

function filterFunction(array,callbackFunction){
    const newArray = []; 
    for(element of array){
        if(callbackFunction(element)){
            newArray.push(element);
        }
    }
    return newArray;
}

const filteredArray = filterFunction(inputArrayForFilter,filterCallbackFunction);

console.log("Output for filter function",filteredArray);