# Implicit Type Coercion Bug in TypeScript

This repository demonstrates a common error in TypeScript related to implicit type coercion.  The code compiles without errors but produces unexpected results at runtime due to the flexibility of TypeScript's type system.

The `add` function is intended to add two numbers. However, because TypeScript allows string-number addition resulting in string concatenation, calling the function with a string and a number produces a string result instead of the expected number. 

The solution demonstrates how to enforce strict type checking to prevent such issues.

## Running the Code

1. Clone this repository.
2. Navigate to the project directory.
3. Run `tsc bug.ts` to compile the buggy code.
4. Run `node bug.js` to see the unexpected output.
5. Run `tsc bugSolution.ts` to compile the fixed code.
6. Run `node bugSolution.js` to see the corrected output.
