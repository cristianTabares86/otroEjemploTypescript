"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    //private mail: string;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    constructor(name, age, regular) {
        super(name, age);
        this.regular = regular;
    }
    getFullInfo() {
        return `${this.name} (${this.age} years old) - ${this.regular ? 'regular' : 'not regular'}`;
    }
}
const student = new Student("Franco", 26, true);
student.getFullInfo(); // "Franco (26 years old) - not regular"
student.name; // Property 'name' is protected and only accessible within class 'Person' and its subclasses
student.age; // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
student.regular; // Property 'regular' is private and only accessible within class 'Student'
