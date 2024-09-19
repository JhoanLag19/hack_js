/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let numbers = [0, 1, 2, 3];

numbers.map(i => result.push(1 + i * 2));

//export result
module.exports = result;