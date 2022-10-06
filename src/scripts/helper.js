//Dispaly modal containing single student info
const modlaWindow = document.getElementById('modal');
const modalName = document.getElementById('modal-name');
const modalBirth = document.getElementById('modal-birth');
const modalhouse = document.getElementById('modal-house');
const modalImg= document.getElementById('modal-img');


const showSingleStudent = (e) => {
    const singleStudentName = e.path[1].cells[0].innerText
    toggleModal();
    const student = getSingleStudentObject(singleStudentName);
    currentStudent = student;
    modalName.innerHTML = `Name: ${student.name}`; 
    modalBirth.innerHTML = `Date of birth: ${student.dateOfBirth}`;
    modalhouse.innerHTML = `House: ${student.house}`;
    modalImg.src = student.image
}
const toggleModal = () => {
    if (modlaWindow.style.visibility === 'visible') {
        modlaWindow.style.visibility = 'hidden'
    } else {
        modlaWindow.style.visibility = 'visible';
    }
}

//Favorite
const addToFavorite = () => {
    let canByAdded = true;
    favoriteStudents.map( (student) => {
        if (student.name === currentStudent.name) canByAdded = false;
    });
    if (canByAdded){
        favoriteStudents.push(getSingleStudentObject(currentStudent.name))
        updateFavorite();
        alert(`${currentStudent.name} is added to favorites!`);
    }
}
const removeFromFavorite = () => {
    if (favoriteStudents.lenght === 1){
        favoriteStudents = [];
    } else {
        favoriteStudents.map( (student, index) => {
            if (student.name === currentStudent.name){
                favoriteStudents.splice(index, 1);
                alert(`${currentStudent.name} is removed to favorites!`);
            }
        });
    }
    updateFavorite();
}

// React to click and take action depeding on cliceked button 
async function showStudents (e) {
    students = await fetchStudents (e.target.id);

    const tab = createTable(await students);
    shownStudents = students;
    insertTable(tab);
    updateTable();
}   

// Buttons to select specific students
const fetchButtons = document.getElementsByClassName('fetch-buttons');
for (const btn of fetchButtons) {
    btn.addEventListener('click', showStudents)
}

//Menu
const togglePopupMenu = () => {
    if (popupMenu.style.display === 'block') {
        popupMenu.style.display = 'none'
    } else {
        popupMenu.style.display = 'block';
    }
}

const popupMenu = document.getElementById('popup-menu');
const hamburger = document.getElementById('hamburger');
popupMenu.addEventListener('click', togglePopupMenu);
hamburger.addEventListener('click', togglePopupMenu);
