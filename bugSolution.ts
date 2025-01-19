function add(a: number, b: number): number {
  return a + b;
}

const result = add(1, 2); // Explicitly using numbers prevents the error
console.log(result); // Output: 3

//Alternatively, using type guards:
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
    if(isNumber(a) && isNumber(b)){
        return a + b;
    } else {
        throw new Error("Invalid input type. Both arguments must be numbers.");
    }
}

console.log(addSafe(1,2)); //Output: 3
console.log(addSafe("1", 2)); // Throws an error