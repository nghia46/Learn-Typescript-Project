import { Istudent } from "./IStudent.js";

export default class Student implements Istudent
{
  
    name: string;
    age: number;
    gpa: number;
    constructor(name:string,age:number,gpa:number)
    {
        this.name = name;
        this.gpa = gpa;
        this.age = age;
    }
    
    toString(): string {
        return `${this.name},AGE: ${this.age} GPA: ${this.gpa}`;
    }
}