function createRect(width, height) {
    return {
        width: width,
        height: height,
        area: () => this.width * this.height,
        compareTo: function(other) {
            let result = other.area() - this.area();
            return result || (other.width - this.width);
        },
        toString: function() {
            return `rect[${this.width} x ${this.height}]`;
        }
    };

}
let myRect = createRect(7, 5);
let otherRect = createRect(20, 16);
let equalAreaRect = createRect(5, 7);
let rectArr = [myRect, otherRect, equalAreaRect];
rectArr.sort((a,b) => a.compareTo(b));
console.log(rectArr.map(e => e.toString()));