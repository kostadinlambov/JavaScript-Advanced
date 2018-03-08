let data = require('./input data');

function sort(property) {
    return data.sort((a, b) => {
        if(a[property] > b[property]){
            return 1
        }else if(a[property] < b[property]){
            return -1
        }
        return 0;
    });
}

function filter(property, value) {
    return data.filter(el => el[property] === value);
}

// console.log(sort('shipTo'));
// console.log(filter('status', 'shipped'));

result.sort = sort;
result.filter = filter;
