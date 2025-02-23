# Type Error: Argument of type 'string[]' is not assignable to parameter of type 'string'

This example demonstrates a common TypeScript error that arises when passing an array of strings to a function that expects a single string argument.  The error message clearly states the issue. The solution involves either modifying the function to accept an array, or modifying the function call to pass a single string.

## Reproducing the Error

1.  Clone the repository.
2.  Run `tsc bug.ts` to compile the TypeScript code.
3.  Observe the error message in the console.