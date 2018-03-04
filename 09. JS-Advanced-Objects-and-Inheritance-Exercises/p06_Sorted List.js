function sortedList() {
    let arr = [];
    let size = 0;

    function add(element) {
        arr.push(element);
        arr.sort((a, b) => a - b);
        size++;
    }

    function remove(index) {
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1);
            size--;
        }
    }

    function get(index) {
        if (index >= 0 && index < arr.length) {
            return arr[index];
        }
    }

    function toString() {
        console.log(arr)
    }

    return {add, remove, get, toString, size}
}


let arr = sortedList();
arr.add(5);
arr.add(965);
arr.add(35);
arr.add(200);
arr.add(-25);

console.log(arr.toString());

arr.remove(2);

console.log(arr.toString());

console.log(arr.get(2));
console.log(arr.toString());

console.log(arr.size);;