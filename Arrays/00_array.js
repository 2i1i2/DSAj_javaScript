// Array representation in the data structure
let numbers = [10,20,30]; // this array will store integers

let characters = ['n','i','t','i','n'];  // this array will store characters 

let totalAmount = [ 23.0, 45.02, 43.05]; // this array will store floating



/**************** Types of the Arrays *********** */
/**
 * 1. One dimentional array
 * 2. two dimentional array
 * 3. three dimentional array
 * 
 */


/**
 * value of a = 10
 * Address of a is 
 */

let arrayOne = [11,12,13,14,15,16,17,18];
let add = 0;
let count = 0;

console.log("Array numbes: ")
for(let i = 0; i<arrayOne.length; i++){
    console.log(arrayOne[i]);
}

const arrayLength = arrayOne.length;
console.log("Array length is:  "+arrayLength);

// sum of array values

const sumFun = function(arr){
    let busket= 0;
    for(let i = 0; i< arr.length; i++){
        busket += arr[i];
    }
    return busket
}

console.log("The Sum of all array number is: ",sumFun(arrayOne));




// array value print in reverse order
let reverseArrayValue = (arr) => {
    for(let i = arr.length; i>= 0; i--){
       console.log(arr[i]);
    }
}


reverseArrayValue(arrayOne);
