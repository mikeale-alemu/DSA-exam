function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];    
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }        
        map[nums[i]] = i;
    }
    return [];
}
const nums = [2, 7, 11, 15];
const target = 18;
console.log(twoSum(nums, target));
