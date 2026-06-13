class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0) return "__EMPTY_ARRAY__";
        return strs.map(s => s.replace('\n', '\\n')).join('\n');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === "__EMPTY_ARRAY__") return [];
        return str.split(/(?<!\\)\n/);
    }
}
