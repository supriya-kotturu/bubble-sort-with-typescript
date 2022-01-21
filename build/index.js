"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    this.collection[j] = this.collection[j] + this.collection[j + 1];
                    this.collection[j + 1] = this.collection[j] - this.collection[j + 1];
                    this.collection[j] = this.collection[j] - this.collection[j + 1];
                    //   const leftValue = this.collection[j];
                    //   this.collection[j] = this.collection[j + 1];
                    //   this.collection[j + 1] = leftValue;
                }
            }
        }
        console.log('here : ', this.collection);
    }
}
const sorter = new Sorter([0, -4, 5, 2]);
sorter.sort();
console.log(sorter.collection);
