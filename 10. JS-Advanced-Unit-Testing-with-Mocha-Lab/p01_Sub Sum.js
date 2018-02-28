function subsum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)){
        return NaN;
    }
    let sum = 0;
    if(startIndex < 0){
        startIndex = 0;
    }
    if(endIndex >= arr.length){
        endIndex = arr.length-1;
    }
    for (let i = startIndex; i <= endIndex; i++)
        sum += Number(arr[i]);
    return sum;
}

let result = subsum([10, 20, 30, 40], -1, 2);
console.log(result);
console.log(subsum([10, 20, 30, 40], 1, 20));
console.log(subsum([10, 20, 30, 40], 1, 2));


console.log(subsum('pesho', 3, 300));
console.log(subsum([{}], 3, 300));
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
