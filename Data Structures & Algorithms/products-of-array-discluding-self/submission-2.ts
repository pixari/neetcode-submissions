    class Solution {
        /**
         * @param {number[]} nums
         * @return {number[]}
         */
        productExceptSelf(nums: number[]): number[] {
            
            const res: number[] = [];

            function multiplyElements (a: number[]): number {
                let b: number = 1;
                for (const n of a) {
                    b = b * n;
                }
                return b;
           };

            for(let k = 0; k < nums.length; k++) {
                res.push(multiplyElements(nums.slice(0, k)) * multiplyElements(nums.slice(k+1)));
            }

            return res;
        }
    }
