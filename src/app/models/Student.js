export default class Student {
    name;
    age;
    gpa;
    constructor(name, age, gpa) {
        this.name = name;
        this.gpa = gpa;
        this.age = age;
    }
    toString() {
        return `${this.name},AGE: ${this.age} GPA: ${this.gpa}`;
    }
}
