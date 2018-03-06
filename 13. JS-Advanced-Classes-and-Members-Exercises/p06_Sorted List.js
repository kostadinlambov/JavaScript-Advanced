class sortedList {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    add(element) {
        this.arr.push(element);
        this.arr.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        }
    }

    toString() {
        return this.arr;
    }
}

let listClass = new sortedList();
listClass.add(5);
listClass.add(965);
listClass.add(35);
listClass.add(200);
listClass.add(-25);

console.log(listClass.toString());

listClass.remove(2);

console.log(listClass.toString());

console.log(listClass.get(2));
console.log(listClass.toString());

console.log(listClass.size);

// let arr = sortedList();
// arr.add(5);
// arr.add(965);
// arr.add(35);
// arr.add(200);
// arr.add(-25);
//
// console.log(arr.toString());

// arr.remove(2);
//
// console.log(arr.toString());
//
// console.log(arr.get(2));
// console.log(arr.toString());
//
// console.log(arr.size);
