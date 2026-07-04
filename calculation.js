let a = 10;
var b = 20;
const c = 30;

console.log(" --- Basic Calculation --- ");

// 1. Addition
let calc1 = a + b;
console.log(" 1. Addition (10 + 20) : ", calc1);

// 2. Three Variable Addition
let calc2 = a + b + c;
console.log(" 2. Total Sum ( 10 + 20 + 30) : ", calc2);

// 3. Any Two (Addition)
let calc3 = b + c;
console.log(" 3. Addition ( 20 + 30) : ", calc3);

// 4. Subtraction
var calc4 = b - a;
console.log(" 4. Subtraction ( 20 - 10) : ", calc4);

// 5. Any Two (Subtraction)
var calc5 = c - b;
console.log(" 5. Subtraction ( 30 - 20) : ", calc5);

// 6. Negative Result
var calc6 = a - b;
console.log(" 6. Subtraction ( 10 - 20) : ", calc6);

// 7. Subtraction
var calc7 = a - calc4;
console.log(" 7. Subtraction ( 10 - 10) : ", calc7);

// 8. Multiplication
let calc8 = a * b;
console.log(" 8. Multiplication ( 10 * 20) : ", calc8);

// 9. Multiplication
let calc9 = calc8 * c;
console.log(" 9. Multiplication ( 200 * 30) : ", calc9);

// 10. Division
var calc10 = c / a;
console.log(" 10. Division ( 30 / 10) : ", calc10);

// 11. Compound Addition
let calc11 = 50;
calc11 += a;
console.log(" 11. Compound Addition ( 50 += 10) : ", calc11);

// 12. Compound Subtraction
let calc12 = 50;
calc12 -= b;
console.log(" 12. Compound Subtraction ( 50 -= 20) : ", calc12);

// 13. Compound Multiplication
let calc13 = 5;
calc13 *= a;
console.log(" 13. Compound Multiplication (5 *= 10) : ", calc13);

// 14. Compound Division
let calc14 = 100;
calc14 /= b;
console.log(" 14. Compound Division (100 /= 20) : ", calc14);

// 15. Greater Than
let calc15 = c > b;
console.log(" 15. Is b greater than a? : ", calc15);

// 16. Less Than
let calc16 = a < b;
console.log(" 16. Is a less than b? : ", calc16);

// 17. Equality
let calc17 = a == 10;
console.log(" 17. Is a equal to 10? : ", calc17);

// 18. Logical AND (&&)
let calc18 = a < b && b < c;
console.log(" 18. Logical AND : ", calc18);

// 19. Logical OR (||)
let calc19 = a > b || b < c;
console.log(" 19. Logical OR : ", calc19);

// 20. Swapping Calculation
let x = 10;
let y = 25;
x = x + y;
y = x - y;
x = x - y;
console.log(" 20. Swapping Logic Result - New X: ", x, "New Y: ", y);
