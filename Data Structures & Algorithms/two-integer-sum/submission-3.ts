class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen: Record<number, number> = {};
        for(let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if(complement in seen) {
                return [seen[complement], i]; 
            }

            seen[nums[i]] = i;
        }
    }
}
 