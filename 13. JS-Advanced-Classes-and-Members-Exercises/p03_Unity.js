class Rat {
    constructor(name){
        this.name = name;
        this.ratsList = [];
    }

    unite(otherRat){
        if(otherRat instanceof Rat){
            this.ratsList.push(otherRat);
        }
    }

    getRats(){
        return this.ratsList;
    }

    toString(){
        let result = `${this.name}\n`;
        this.ratsList.forEach(element => {
            result += `##${element.name}\n`
        });

        return result;
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// // Pesho
// // ##Gosho
// // ##Sasho
