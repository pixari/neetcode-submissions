class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(nums.length === 1) return 1;
  
        const series: number[][] = [];
        const uniqueNums: Set<number> = new Set(nums);

        while(uniqueNums.size > 0) {
            const min = Math.min(...uniqueNums);

            let noMatch = true;
            for(let s of series) {
            if(s.includes(min+1) || s.includes(min-1)) {
                s.push(min)
                noMatch = false;
                break;
            }
            }

            if(noMatch) series.push([min]);

            uniqueNums.delete(min);
        };

        if(series.length === 1) return series[0].length;
            
        let result = 0;
        series.forEach(s => {
            if(s.length > result) result = s.length;
        })

        return result;
    }
}
