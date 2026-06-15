class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let k = 0;
        let res = [];

        for(let i = 0; i < nums.length; i++){
            const pop = nums.pop();
            console.log(nums);
            res[i] = nums.reduce(function (acc, item) { return acc * item; }, 1);
            nums.unshift(pop);
            k++;
        }
 

        return res.reverse();
    }
}
