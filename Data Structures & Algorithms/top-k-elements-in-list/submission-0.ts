class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const data: Record<number, number> = {};

        for(const num of nums) {
            data[num] = (data[num] || 0) + 1;
        }

        const topFrequent: number[] = Object.keys(data)
            .sort((a, b) => data[Number(b)] - data[Number(a)])
            .slice(0, k)
            .map(Number);

        return topFrequent;
    }
}
