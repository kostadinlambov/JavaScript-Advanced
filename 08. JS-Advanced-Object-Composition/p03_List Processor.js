function solve(arrCommands) {
    let processor = (function () {
        let list = [];

        function add(string) {
            list.push(string)
        }

        function remove(string) {
            list = list.filter(e => e !== string);
        }

        function print() {
            console.log(list.toString())
        }

        return {add, remove, print}
    })();

    for (let command of arrCommands) {
        let tokens = command.split(' ');
        processor[tokens[0]](tokens[1])
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

