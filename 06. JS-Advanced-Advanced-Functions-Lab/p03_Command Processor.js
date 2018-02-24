function solve(arr) {
    let commandProcessor = (function () {
        let str = '';
        return {
            append: (s) => str += s,
            removeStart: (n) => str = str.substring(n),
            removeEnd: (n) => str = str.substring(0, str.length - n),
            print: () => console.log(str)
        }
    })();

    for (let st of arr) {
        let [comm, value] = st.split(' ');
        commandProcessor[comm](value);
    }
}

solve([
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);


// let closure = (function () {
//     let counter = 0;
//     return function () {
//         console.log(counter++);
//     }
// })();
// closure();
// closure();
// closure();
// closure();


