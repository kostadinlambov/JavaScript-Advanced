class Entity{
    constructor(name){
    if(new.target === Entity){
        throw new TypeError('Abstract class cannot be instantiated directly')
    }
    this.name = name;
    }
}

module.exports = Entity;