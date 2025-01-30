function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; // Handle null or undefined values using strict equality
  }
  return a + b; 
}