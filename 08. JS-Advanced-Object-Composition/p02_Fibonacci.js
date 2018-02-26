function solve() {
    let f1 = 0;
    let f2 = 1;

    return function fib() {
        let f3 = f1 + f2;
        [f1,f2] = [f2,f3];
        return f1;
    }
}

let fib = solve();
fib();
fib();
fib();
let anotherFib = solve();
anotherFib();
anotherFib();
anotherFib();