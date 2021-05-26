declare interface Array<T> {

    removeDups(): number[];
}
Array.prototype.removeDups = function (): number[] {
    return this.filter(function (item, index, self) {
        return self.indexOf(item) == index;
    });
};
console.log(`start`)
console.log([1, 5, 2, 6, 9, 9, 6, 3, 2].removeDups());

setTimeout(() => { console.log([1, 5, 2, 6, 9, 9, 6, 3, 2].removeDups()) }, 1000)
console.log(`End`)