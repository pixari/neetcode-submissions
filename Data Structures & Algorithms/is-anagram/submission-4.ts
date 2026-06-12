class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const count: Record<string, number> = {}; 
        
        if (s.length !== t.length) return false;
        
        for(const char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        for(const char of t) {
            if(!count[char]) return false;
            count[char]--;
        }

        return true;
    }
}