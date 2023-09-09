const TwoSum = function(nums,target){
    //console.log(nums,target)
    for(let p1 = 0; p1< nums.length; p1++){
        const numberToFind = target - nums[p1];
        // console.log(numberToFind);
        for(p2 = p1+1; p2<nums.length; p2++){
            if(numberToFind === nums[p2]){
                return [p1,p2];
            }
        }
    }
    return null;
}

const nums = [1,3,7,9,2];
const target = 11;

const result = TwoSum(nums,target);
console.log(result);



