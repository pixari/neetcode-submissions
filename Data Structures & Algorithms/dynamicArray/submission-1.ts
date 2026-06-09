class DynamicArray {
    private capacity: number; 
    private data: number[];
    private size: number;

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity > 0 ? capacity : 1;
        this.size = 0;
        this.data = Array(this.capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.data[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.data[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if(this.size === this.capacity){
            this.resize();
        }
        this.data[this.size] = n;
        this.size++;
   } 

    /**
     * @returns {number}
     */
    popback(): number {
        this.size--;
        const el = this.data[this.size]
        this.data[this.size] = undefined;
        return el;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity = this.capacity * 2;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
