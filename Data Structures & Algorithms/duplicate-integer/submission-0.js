class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let foundDuplicate = false;
        let swapped;
        let prev=undefined;
        do {
            swapped = false;
            for (let i = 0; i < nums.length - 1; i++) {
                if (nums[i] > nums[i + 1]) {
                    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                    swapped = true;
                }
            }
        } while (swapped);
        for (let i=0;i<nums.length;i++){
         if(prev===nums[i]){
                foundDuplicate=true;
                break;
         }
         prev=nums[i]
         console.log(prev)
        }
        return foundDuplicate;
    };
}

