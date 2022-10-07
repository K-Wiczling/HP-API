let allStudents = []; // All posible students (from book series)
let shownStudents = []; // Student currently shown in the table
let favoriteStudents = []; // All favorite students 
let currentStudent = {}; // Students 

//Set global to initial values
const initGlobal = () => {
    let allStudents = null; 
    let shownStudents = null; 
    let favoriteStudents = null 
    let currentStudent = {};
}

//Get single character data by the name
const getSingleStudentObject = (name) => {
    for (const student of allStudents) {
        if(name === student.name)
            return student;
    }
}

