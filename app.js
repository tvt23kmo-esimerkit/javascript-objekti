const student=require('./student');

const allStudents=student.getAll();
const secondStudent=student.getOne(1);

console.log(allStudents);
console.log(secondStudent);