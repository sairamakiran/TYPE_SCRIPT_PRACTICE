// Define a strongly typed function
function calculateArea(width: number, height: number): number {
    return width * height;
  }
  
  // Define an interface
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }
  
  // Implement the interface
  class Employee implements Person {
    constructor(public name: string, public age: number, private role: string) {}
    
    greet(): string {
      return `Hello, my name is ${this.name} and I work as a ${this.role}.`;
    }
  }
  
  // Create users
  const users = [
    new Employee("Alice", 30, "Developer"),
    new Employee("Bob", 25, "Designer"),
    new Employee("Carol", 35, "Manager")
  ];
  
  // Print users
  function printUsers(users: Person[]): void {
    users.forEach(user => console.log(user.greet()));
  }
  
  printUsers(users);
  
  