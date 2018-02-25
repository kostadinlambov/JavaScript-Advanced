function euclidAlgorithm(a, b) {
    while (true) {
        a = a % b;
        if (a === 0) {
            return b;
        }
        b = b % a;
        if (b === 0) {
            return a;
        }
    }
}

console.log(euclidAlgorithm(252, 105));