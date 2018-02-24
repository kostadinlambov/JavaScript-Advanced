function solve(arr) {
    console.log(Math.max.call('', ...arr));
    console.log(Math.min.apply('', arr));
}

solve([1, 44, 123, 33]);