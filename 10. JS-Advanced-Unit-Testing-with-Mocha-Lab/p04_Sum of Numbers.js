function sum(arr) {
    let sum = Number(arr[0]);
    for (let i = 1; i < arr.length; i++)
        sum += Number(arr[i]);
    return sum;
}

module.exports = {sum};

