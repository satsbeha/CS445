Array.prototype.removeDups = function () {
    return this.filter(function (item, index, self) {
        return self.indexOf(item) == index;
    });
};
console.log("start");
console.log([1, 5, 2, 6, 9, 9, 6, 3, 2].removeDups());
setTimeout(function () { console.log([1, 5, 2, 6, 9, 9, 6, 3, 2].removeDups()); }, 1000);
console.log("End");
