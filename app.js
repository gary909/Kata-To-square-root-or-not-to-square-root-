function squareOrSquareRoot(array) {
    // let myArr = [];
    // for (var i = 0; i < array.length; i++) {
    //     if (array[i] % 1 != 0) {
    //         hasDecimal = Math.pow(array[i], 2)
    //         myArr.push(hasDecimal)
    //     } else {
    //         squaredNum = Math.sqrt(array[i], 2)
    //         myArr.push(squaredNum)
    //     }
    // }
    // return myArr;
    // let squaredNumber = Math.pow(array[1], 2);
    // return squaredNumber;
    return 1 % 1
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // [ 2, 9, 3, 49, 4, 1 ]
console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1])); // [ 10, 10201, 25, 25, 1, 1 ]
console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6])); // [ 1, 4, 9, 2, 25, 36 ]