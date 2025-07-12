// ========================================
// STRING FORMATTING COMPARISON
// ========================================

let name: string = "Alice";
let age: number = 25;
let city: string = "New York";

console.log("=== STRING FORMATTING COMPARISON ===\n");

// ========================================
// 1. BASIC EXAMPLES
// ========================================

console.log("1. Basic Examples:");

// Template Literals (Modern way)
console.log(`Name: ${name}, Age: ${age}`);

// String Concatenation (Old way)
console.log("Name: " + name + ", Age: " + age);

console.log();

// ========================================
// 2. COMPLEX EXPRESSIONS
// ========================================

console.log("2. Complex Expressions:");

// Template Literals - Easy to read
console.log(`${name} is ${age} years old and lives in ${city}`);

// String Concatenation - Gets messy
console.log(name + " is " + age + " years old and lives in " + city);

console.log();

// ========================================
// 3. WITH CALCULATIONS
// ========================================

console.log("3. With Calculations:");

// Template Literals
console.log(`Next year ${name} will be ${age + 1} years old`);

// String Concatenation
console.log("Next year " + name + " will be " + (age + 1) + " years old");

console.log();

// ========================================
// 4. MULTI-LINE STRINGS
// ========================================

console.log("4. Multi-line Strings:");

// Template Literals - Natural multi-line
let templateMessage = `Hello ${name}!
Welcome to ${city}.
You are ${age} years old.`;

console.log("Template Literals:");
console.log(templateMessage);

// String Concatenation - Requires \n or multiple +
let concatMessage = "Hello " + name + "!\n" +
                   "Welcome to " + city + ".\n" +
                   "You are " + age + " years old.";

console.log("\nString Concatenation:");
console.log(concatMessage);

console.log();

// ========================================
// 5. ARRAY EXAMPLE (Your Original Question)
// ========================================

console.log("5. Array Example:");

let colors: string[] = ["red", "green", "blue"];

console.log("Using Template Literals:");
for (let i = 0; i < colors.length; i++) {
    console.log(`${i}: ${colors[i]}`);  // Modern way
}

console.log("\nUsing String Concatenation:");
for (let i = 0; i < colors.length; i++) {
    console.log(i + ": " + colors[i]);  // Old way
}

console.log();

// ========================================
// 6. WHEN TO USE WHICH?
// ========================================

console.log("6. When to Use Which:");

// Simple cases - both are fine
let simple1 = `Hello ${name}`;
let simple2 = "Hello " + name;
console.log("Simple case 1:", simple1);
console.log("Simple case 2:", simple2);

// Complex cases - template literals are better
let complex1 = `User ${name} (${age}) from ${city} - Status: ${age >= 18 ? 'Adult' : 'Minor'}`;
let complex2 = "User " + name + " (" + age + ") from " + city + " - Status: " + (age >= 18 ? 'Adult' : 'Minor');

console.log("\nComplex case 1 (Template):", complex1);
console.log("Complex case 2 (Concat):", complex2);

console.log();

// ========================================
// 7. PERFORMANCE COMPARISON
// ========================================

console.log("7. Performance Test:");

let iterations = 100000;

// Template Literals
console.time("Template Literals");
for (let i = 0; i < iterations; i++) {
    let result = `${name} is ${age} years old`;
}
console.timeEnd("Template Literals");

// String Concatenation
console.time("String Concatenation");
for (let i = 0; i < iterations; i++) {
    let result = name + " is " + age + " years old";
}
console.timeEnd("String Concatenation");

console.log("\n=== RECOMMENDATION ===");
console.log("✅ Use Template Literals (`${}`) for:");
console.log("   - Better readability");
console.log("   - Complex expressions");
console.log("   - Multi-line strings");
console.log("   - Modern TypeScript/JavaScript");

console.log("\n⚠️  String Concatenation (+) is okay for:");
console.log("   - Very simple cases");
console.log("   - Legacy code compatibility");
console.log("   - When you prefer traditional syntax");