class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const res: number[] = new Array(n);

        res[0] = 1;
        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        let suffixProd = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] = res[i] * suffixProd;
            suffixProd *= nums[i];
        }

        return res;
    }
}