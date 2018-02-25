function solution() {
    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {protein: 0, carbohydrates: 1, fat: 0, flavour: 2},
        coke: {protein: 0, carbohydrates: 10, fat: 0, flavour: 20},
        burger: {protein: 0, carbohydrates: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, carbohydrates: 0, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrates: 10, fat: 10, flavour: 10}
    };

    let commands = {
        restock: (microelement, quantity) => {
            microelements[microelement] += quantity;
            return 'Success';
        },
        prepare: (recipe, quantity) => prepareRecipe(recipe, quantity),

        report: () => print(microelements)
    }

    return function commandParser(inputStr) {
        let tokens = inputStr.split(' ');

        if (tokens.length === 1) {
            return commands.report();
        } else {
            let command = tokens[0];
            let secondArgument = tokens[1];
            let quantity = Number(tokens[2]);

            switch (command) {
                case 'restock':
                    return commands['restock'](secondArgument, quantity);
                case 'prepare':
                    return commands['prepare'](secondArgument, quantity);
            }
        }
    };

    function print(microelements) {
        let resultArr = [];
        for (let element of Object.keys(microelements)) {
            let currentPrintElement = `${element}=${microelements[element]}`;
            resultArr.push(currentPrintElement);
        }
        return resultArr.join(' ');
    }

    function prepareRecipe(recipeToPrapare, quantity) {
        let recipe = recipes[recipeToPrapare];
        let neededProtein = recipe['protein'] * quantity;
        let neededCarbohydrates = recipe['carbohydrates'] * quantity;
        let neededFat = recipe['fat'] * quantity;
        let neededFlavour = recipe['flavour'] * quantity;

        if (neededProtein > microelements['protein']) {
            return 'Error: not enough protein in stock';
        } else if (neededCarbohydrates > microelements['carbohydrate']) {
            return 'Error: not enough carbohydrate in stock';
        } else if (neededFat > microelements['fat']) {
            return 'Error: not enough fat in stock';
        } else if (neededFlavour > microelements['flavour']) {
            return 'Error: not enough flavour in stock';
        } else {
            microelements['protein'] -= neededProtein;
            microelements['carbohydrate'] -= neededCarbohydrates;
            microelements['fat'] -= neededFat;
            microelements['flavour'] -= neededFlavour;
            return 'Success';
        }
    }
}

let manager = solution();
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));