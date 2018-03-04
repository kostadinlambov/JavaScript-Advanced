(function () {
    String.prototype.ensureStart = function (str) {
        let result = this.valueOf();
      //  let testStr = result.substr(0, str.length);
        let testStr = result.slice(0, str.length);
        if (testStr !== str) {
            return str + result;
        }

        return result;
    };

    String.prototype.ensureEnd = function (str) {
        let result = this.valueOf();
        let testStr = result.slice(-str.length);
        if (testStr !== str) {
            return result + str;
        }
        return result;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        let resultStr = this.valueOf();

        if (n < 4) {
            return '.'.repeat(n)
        }

        if (resultStr.length <= n) {
            return resultStr;
        } else {
            if (resultStr.indexOf(' ') === -1) {
                return resultStr.substring(0, n - 3) + '...'
            } else {
                resultStr = resultStr.slice(0, n).trim();

                let index = resultStr.lastIndexOf(' ');
                resultStr = resultStr.substring(0, index);
                for (let i = 0; i < 3; i++) {
                    resultStr += '.';
                    if (resultStr.length === n) {
                        break;
                    }
                }
                return resultStr;
            }
        }
    };

    String.format = function () {
        let result = arguments[0];
        let regex = /{\d+}/;

        for (let i = 1; i < arguments.length; i++) {
            let match = regex.exec(result);
            if(match){
                result = result.replace(match, arguments[i])
            }
        }

        return result
    };

}());

let str = 'quick brown fox jumps over the lazy dog';
str = str.ensureStart('the ');
// str = str.ensureEnd('the ');
str = str.truncate(43);
console.log(str);
// let str = 'my string';
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
//
// str = str.ensureStart('my');
// console.log(str);
// str = str.ensureStart('hello ');
// console.log(str);
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
//
// console.log(str);
// str = String.format('jumps {0} {1}',
//     'dog');
// console.log(str);
