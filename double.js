const double = (num) => num * 2;

// console.log(process.argv);

// console.log(process.argv[1])

//console.log(process.argv, process.argv[2]);

const [, , n] = process.argv;

console.log(double(n));

//process.argv =  2 elements 
// 1 element - execution path 
// 2 element - path of the js file



// we dont have window and document (DOM) in node js i.e, no console.log(window) or console.log(document) so no setTimeout or setInterval
//instead we have console.log(global)