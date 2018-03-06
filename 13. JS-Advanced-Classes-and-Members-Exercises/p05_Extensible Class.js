let template = {
        extensionMethod: function () {
            console.log('Stamat')
        },
        extensionProperty: 'someString'
    };

let obj5 =(function () {
    let id = 0;
    return class Extensible{
        constructor(){
            this.id = id++;
        }

        extend(template){
            for(let key in template){
                if(template.hasOwnProperty(key)){
                    let element = template[key];
                    if(typeof element === 'function'){
                        Extensible.prototype[key] = element;
                    }else{
                        this[key] = element;
                    }
                }
            }
        }
    }
}());

let objTest = new obj5();
console.log(objTest.id);
objTest.extend(template);


// let obj1 = new Extensible();
// let obj2 = new Extensible();
// let obj3 = new Extensible();
// console.log(obj1.id);
// console.log(obj2.id);
// console.log(obj3.id);

