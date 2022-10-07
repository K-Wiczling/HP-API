//Dispaly modal containing single student info

//Modal reference
const modlaWindow = document.getElementById('modal');

//Modal card reference
const modalName = document.getElementById('modal-name');
const modalBirth = document.getElementById('modal-birth');
const modalhouse = document.getElementById('modal-house');
const modalImg= document.getElementById('modal-img');

//Display single character in the modal based on character name
const showSingleStudent = (name) => {
    toggleModal();
    const student = getSingleStudentObject(name);
    currentStudent = student;
    
    modalName.innerHTML = `Name: ${student.name}`; 
    modalBirth.innerHTML = `Date of birth: ${student.dateOfBirth}`;
    modalhouse.innerHTML = `House: ${student.house}`;
    modalImg.src = student.image
}

//Change visibility of the modal 
const toggleModal = () => {
    if (modlaWindow.style.visibility === 'visible') {
        modlaWindow.style.visibility = 'hidden'
    } else {
        modlaWindow.style.visibility = 'visible';
    }
}