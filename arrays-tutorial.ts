// ========================================
// TYPESCRIPT ARRAYS - COMPLETE TUTORIAL
// ========================================

(() => {
console.log("=== TYPESCRIPT ARRAYS TUTORIAL ===\n");

// ========================================
// 1. BASIC ARRAY DECLARATION
// ========================================

// Method 1: Type followed by []
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let flags: boolean[] = [true, false, true];

console.log("1. Basic Arrays:");
console.log("Numbers:", numbers);
console.log("Names:", names);
console.log("Flags:", flags);
console.log();

// Method 2: Array<Type> syntax
let scores: Array<number> = [85, 92, 78, 96];
let cities: Array<string> = ["New York", "London", "Tokyo"];

console.log("Array<Type> syntax:");
console.log("Scores:", scores);
console.log("Cities:", cities);
console.log();

// ========================================
// 2. ARRAY INITIALIZATION
// ========================================

// Empty arrays
let emptyNumbers: number[] = [];
let emptyStrings: string[] = [];

// Pre-filled arrays
let fruits: string[] = ["apple", "banana", "orange"];
let ages: number[] = [25, 30, 35, 40];

console.log("2. Array Initialization:");
console.log("Empty numbers:", emptyNumbers);
console.log("Fruits:", fruits);
console.log("Ages:", ages);
console.log();

// ========================================
// 3. ACCESSING ARRAY ELEMENTS
// ========================================

console.log("3. Accessing Elements:");
console.log("First fruit:", fruits[0]);        // apple
console.log("Second age:", ages[1]);           // 30
console.log("Last fruit:", fruits[fruits.length - 1]); // orange
console.log();

// ========================================
// 4. MODIFYING ARRAYS
// ========================================

console.log("4. Modifying Arrays:");

// Adding elements
fruits.push("grape");                    // Add to end
fruits.unshift("mango");                // Add to beginning
console.log("After adding:", fruits);

// Removing elements
let lastFruit = fruits.pop();           // Remove from end
let firstFruit = fruits.shift();       // Remove from beginning
console.log("Removed:", lastFruit, "and", firstFruit);
console.log("After removing:", fruits);
console.log();

// ========================================
// 5. ARRAY METHODS
// ========================================

let testNumbers: number[] = [1, 2, 3, 4, 5];

console.log("5. Array Methods:");
console.log("Original:", testNumbers);
console.log("Length:", testNumbers.length);
console.log("Includes 3:", testNumbers.includes(3));
console.log("Index of 4:", testNumbers.indexOf(4));
console.log("Join with '-':", testNumbers.join("-"));
console.log();

// ========================================
// 6. ARRAY ITERATION
// ========================================

console.log("6. Array Iteration:");

let colors: string[] = ["red", "green", "blue"];

// For loop
console.log("Using for loop:");
for (let i = 0; i < colors.length; i++) {
    console.log(`  ${i}: ${colors[i]}`);
}

// For...of loop
console.log("Using for...of:");
for (let color of colors) {
    console.log(`  Color: ${color}`);
}

// forEach method
console.log("Using forEach:");
colors.forEach((color, index) => {
    console.log(`  ${index}: ${color}`);
});
console.log();

// ========================================
// 7. ARRAY TRANSFORMATION
// ========================================

let originalNumbers: number[] = [1, 2, 3, 4, 5];

console.log("7. Array Transformation:");
console.log("Original:", originalNumbers);

// Map - transform each element
let doubled: number[] = originalNumbers.map(num => num * 2);
console.log("Doubled:", doubled);

// Filter - keep elements that match condition
let evenNumbers: number[] = originalNumbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Find - get first element that matches
let foundNumber: number | undefined = originalNumbers.find(num => num > 3);
console.log("First number > 3:", foundNumber);

// Reduce - combine all elements into single value
let sum: number = originalNumbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);
console.log();

// ========================================
// 8. MULTI-DIMENSIONAL ARRAYS
// ========================================

console.log("8. Multi-dimensional Arrays:");

// 2D Array (Array of arrays)
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:");
for (let row of matrix) {
    console.log("  ", row);
}

// Accessing 2D array elements
console.log("Element at [1][2]:", matrix[1][2]); // 6
console.log();

// ========================================
// 9. MIXED TYPE ARRAYS (UNION TYPES)
// ========================================

console.log("9. Mixed Type Arrays:");

// Array that can hold numbers OR strings
let mixed: (number | string)[] = [1, "hello", 2, "world"];
console.log("Mixed array:", mixed);

// Array of different object types
let items: (string | number | boolean)[] = ["text", 42, true, "more text"];
console.log("Items:", items);
console.log();

// ========================================
// 10. ARRAY OF OBJECTS
// ========================================

console.log("10. Array of Objects:");

// Define interface for type safety
interface Student {
    name: string;
    age: number;
    grade: string;
}

let students: Student[] = [
    { name: "John", age: 20, grade: "A" },
    { name: "Jane", age: 19, grade: "B" },
    { name: "Bob", age: 21, grade: "A" }
];

console.log("Students:");
students.forEach(student => {
    console.log(`  ${student.name} (${student.age}) - Grade: ${student.grade}`);
});

// Filter students with grade A
let topStudents: Student[] = students.filter(student => student.grade === "A");
console.log("Top students:", topStudents.map(s => s.name));
console.log();

// ========================================
// 11. READONLY ARRAYS
// ========================================

console.log("11. Readonly Arrays:");

let readonlyNumbers: readonly number[] = [1, 2, 3, 4, 5];
console.log("Readonly array:", readonlyNumbers);
// readonlyNumbers.push(6); // Error! Cannot modify readonly array
console.log();

// ========================================
// 12. ARRAY DESTRUCTURING
// ========================================

console.log("12. Array Destructuring:");

let coordinates: number[] = [10, 20, 30];

// Extract values into variables
let [x, y, z] = coordinates;
console.log(`X: ${x}, Y: ${y}, Z: ${z}`);

// Skip elements
let [first, , third] = coordinates;
console.log(`First: ${first}, Third: ${third}`);

// Rest operator
let [head, ...tail] = coordinates;
console.log(`Head: ${head}, Tail: ${tail}`);
console.log();

// ========================================
// 13. PRACTICAL EXAMPLES
// ========================================

console.log("13. Practical Examples:");

// Example 1: Shopping cart
interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

let cart: CartItem[] = [
    { name: "Laptop", price: 999, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 }
];

let totalPrice: number = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.log("Shopping Cart:");
cart.forEach(item => {
    console.log(`  ${item.name}: $${item.price} x ${item.quantity}`);
});
console.log(`Total: $${totalPrice}`);
console.log();

// Example 2: Grade calculator
let grades: number[] = [85, 92, 78, 96, 88];
let average: number = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
let highest: number = Math.max(...grades);
let lowest: number = Math.min(...grades);

console.log("Grade Analysis:");
console.log(`Grades: ${grades.join(", ")}`);
console.log(`Average: ${average.toFixed(3)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log();

console.log("=== END OF TUTORIAL ===");
})();