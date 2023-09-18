// 6,5,3,1,8,7,2,4

const numbers = [6,5,3,1,8,7,2,4];


function mergeSort(array){
    

    // checking if array length is 1
    if(array.length === 1){
        return array;
    }

    // split array in  into right and left
    const length = array.length;
    const middle = Math.floor(length/2);
    const left =  array.slice(0, middle);
    const right = array.slice(middle);
    console.log('left', left);
    console.log('right',right);




   return merge(
    mergeSort(left), mergeSort(right)
   )
};


function merge(left, right){
  const result = [];   
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
        result.push(left[leftIndex])
        leftIndex++;
    }else{
        result.push(right[rightIndex]);
        rightIndex++;
    }
  } 
 // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);
