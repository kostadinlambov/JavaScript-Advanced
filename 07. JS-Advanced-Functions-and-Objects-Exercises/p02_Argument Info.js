function result() {
    let objArr = [];
    let resultMap = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let obj = {};
        let type = typeof(arguments[i]);

        obj['type'] = typeof arguments[i];
        obj['value'] = arguments[i];

        objArr.push(obj);

        if (!resultMap.has(type)) {
            resultMap.set(type, 0);
        }

        resultMap.set(type, resultMap.get(type) + 1);
    }

    function sortMap(a, b) {
        return b[1] - a[1];
    }

    for (let obj of objArr) {
        console.log(`${obj['type']}: ${obj['value']}`)
    }

    for (let element of [...resultMap].sort(sortMap)) {
        let key = element[0];
        let value = element[1];
        console.log(`${key} = ${value}`)
    }


    // [...resultMap].sort(sortMap)
    //     .forEach((value, key) => {
    //         console.log(key);
    //         console.log(value);
    //         console.log(`${key} = ${value}`)
    //     });
    // console.log(objArr);
    // console.log(sortedMap);
}

result('cat','mouse', 42, function () {
    console.log('Hello world!');
}, 53, 57);