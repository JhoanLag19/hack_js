/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let numbers = [0, 1, 2, 3];

numbers.map(i => result.push(1 + i * 2));
result.reverse();

//export result
module.exports = result;