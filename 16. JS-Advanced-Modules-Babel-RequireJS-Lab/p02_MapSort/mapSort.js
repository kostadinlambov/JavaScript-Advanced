function mapSort(map, sortFn) {
    let sortedArr;
    if(sortFn === undefined){
         sortedArr = [...map].sort((a,b) => a[0] > b[0]);
    }else{
         sortedArr = [...map].sort(sortFn);
    }
    return new Map(sortedArr);
}

// function mapSortValuesFn(a, b) {
//     return a[1].localeCompare(b[1])
// }
//
// function mapSortValuesLengthFn(a, b) {
//     return a[1].length - (b[1].length)
// }

module.exports = mapSort;