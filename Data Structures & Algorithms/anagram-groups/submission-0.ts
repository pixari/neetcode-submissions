class Solution {

    /**
     * Remove element from array
     * Compare it only with elements that have the same number of chars
     * create array with itself and matching elements
     * Remove elements from array
     * last element mustn't be compared
     */
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result: string[][] = [];

        for(const str of strs) {
            const sortedStr = str.split('').sort().join();

            if(!Array.isArray(result[sortedStr])) {
                result[sortedStr] = [];
            }
            result[sortedStr].push(str);
        }
        
        return Object.values(result);
    }
}
