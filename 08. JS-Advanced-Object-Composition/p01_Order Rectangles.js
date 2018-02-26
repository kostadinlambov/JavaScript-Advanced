function orderRectangles(rectArr) {
    let objArr = [];
    for (let arr of rectArr) {
        let width = arr[0];
        let height = arr[1];
        objArr.push(createRect(width, height))
    }

    function createRect(width, height) {
        return {
            width: width,
            height: height,
            area: () => width * height,
            compareTo: function (other) {
                let result = other.area() - this.area();
                return result || (other.width - this.width);
            },
            // toString: function () {
            //     return `rect[${this.width} x ${this.height}]`;
            // }
        };
    }

    objArr.sort((a, b) => a.compareTo(b));

    return objArr;
}

console.log(orderRectangles([[10, 5], [5, 12]]));




