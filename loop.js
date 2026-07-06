// Question 1
console.log("--- Question 1: Find the Largest of Two Numbers ---");
let numA = 35;
let numB = 50;

if (numA > numB) {
  console.log(numA + " is the largest number.");
} else {
  console.log(numB + " is the largest number.");
}

// Question 2
console.log("\n--- Question 2: Simple Grade Checker ---");
let studentScore = 78;

if (studentScore >= 90) {
  console.log("Grade: A");
} else if (studentScore >= 75) {
  console.log("Grade: B");
} else if (studentScore >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F (Fail)");
}

// Question 3
console.log("\n--- Question 3: Print Numbers from 1 to 5 using While Loop ---");
let count = 1;
while (count <= 5) {
  console.log("Number: " + count);
  count++;
}

// Question 4
console.log("\n--- Question 4: Find Sum of Numbers from 1 to 5 ---");
let totalSum = 0;
for (let i = 1; i <= 5; i++) {
  totalSum = totalSum + i;
}
console.log("The total sum is: " + totalSum);

// Question 5
console.log("\n--- Question 5: Count Down from 5 to 1 using Do-While Loop ---");
let countdown = 5;
do {
  console.log("Counting down: " + countdown);
  countdown--;
} while (countdown > 0);

// Question 6
console.log("\n--- Question 6: Calculate Employee Bonus (10%) ---");
let basicSalary = 20000;
let bonusAmount = basicSalary * 0.1;
let totalSalary = basicSalary + bonusAmount;

console.log("Base Salary: " + basicSalary);
console.log("Bonus: " + bonusAmount);
console.log("Final Salary with Bonus: " + totalSalary);

// Question 7
console.log("\n--- Question 7: Total Bill with 18% Tax ---");
let itemPrice = 500;
let taxAmount = itemPrice * 0.18;
let finalBill = itemPrice + taxAmount;

console.log("Item Price: " + itemPrice);
console.log("Tax: " + taxAmount);
console.log("Total Bill to Pay: " + finalBill);

// Question 8
console.log("\n--- Question 8: Simple Interest Calculation ---");
let principal = 1000;
let rate = 5;
let time = 2;

let interest = (principal * rate * time) / 100;
console.log("Calculated Simple Interest is: " + interest);

// Question 9
console.log("\n--- Question 9: Check if a Number is Even or Odd ---");
let checkNum = 15;

if (checkNum % 2 == 0) {
  console.log(checkNum + " is an EVEN number.");
} else {
  console.log(checkNum + " is an ODD number.");
}

// Question 10
console.log("\n--- Question 10: Find Odd Numbers between 1 to 10 ---");
console.log("Odd numbers list:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
