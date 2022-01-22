"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        this.data[leftIndex] = this.data[leftIndex] + this.data[rightIndex];
        this.data[rightIndex] = this.data[leftIndex] - this.data[rightIndex];
        this.data[leftIndex] = this.data[leftIndex] - this.data[rightIndex];
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
