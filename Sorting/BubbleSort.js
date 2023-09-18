const numbers = [5,2,3,1];

const bubbleSort = function(nums){
   for(let i = 0; i< nums.length; i++){
    for(let j= 0; j< nums.length; j++){
        if(nums[j] > nums[j+1]){
          let temp = nums[j];
          nums[j] = nums[j+1];
          nums[j+1] = temp;
        }
    }
   }
   return nums;
}
 let result = bubbleSort(numbers);

console.log(result);