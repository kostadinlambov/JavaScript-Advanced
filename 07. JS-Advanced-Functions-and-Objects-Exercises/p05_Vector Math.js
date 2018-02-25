console.log((() => {
    let solution = {
        add: (function (vec1, vec2) {
            let x1 = vec1[0];
            let y1 = vec1[1];
            let x2 = vec2[0];
            let y2 = vec2[1];
            return [(x1 + x2), (y1 + y2)]
        }),
        multiply: ((vec1, scalar) => {
            let x1 = vec1[0];
            let y1 = vec1[1];
            return [(x1 * scalar), (y1 * scalar)]
        }),
        length: ((vec1) => {
            let x1 = vec1[0];
            let y1 = vec1[1];
            let length = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2))
            return length;
        }),
        dot: ((vec1, vec2) => {
            let x1 = vec1[0];
            let y1 = vec1[1];
            let x2 = vec2[0];
            let y2 = vec2[1];
            return (x1 * x2) + (y1 * y2)
        }),
        cross: ((vec1, vec2) => {
            let x1 = vec1[0];
            let y1 = vec1[1];
            let x2 = vec2[0];
            let y2 = vec2[1];
            return (x1 * y2) - (y1 * x2)
        })
    };

    return solution;
})());


// console.log(monkeyPatcher.add([1, 1], [1, 0]));
// console.log(monkeyPatcher.multiply([3.5, -2], 2));
// console.log(monkeyPatcher.length([3, -4]));
// console.log(monkeyPatcher.dot([1, 0], [0, -1]));
// console.log(monkeyPatcher.cross([3, 7], [1, 0]));