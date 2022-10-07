//Adding character to favorites
const addToFavorite = () => {
    let canByAdded = true;
    favoriteStudents.map( (student) => {
        //chceck if student is alread added to favorites list
        if (student.name === currentStudent.name) canByAdded = false;
    });
    if (canByAdded) {
        favoriteStudents.push(getSingleStudentObject(currentStudent.name))
        updateFavorite();
        alert(`${currentStudent.name} is added to favorites!`);
    }
}

//Remove Character from favorite from the modal
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

// Display character base on the clicked button id 
async function showStudents (e) {
    students = await fetchStudents (e.target.id);

    const tab = createTable(await students);
    shownStudents = students;
}   

// Buttons to select specific students
const fetchButtons = document.getElementsByClassName('fetch-buttons');
for (const btn of fetchButtons) {
    btn.addEventListener('click', showStudents)
}

// Toggle popoup menu
const togglePopupMenu = () => {
    if (popupMenu.style.display === 'block') {
        popupMenu.style.display = 'none'
    } else {
        popupMenu.style.display = 'block';
    }
}

// Reference to the popup menu and hamburger icon
const popupMenu = document.getElementById('popup-menu');
const hamburger = document.getElementById('hamburger');

popupMenu.addEventListener('click', togglePopupMenu);
hamburger.addEventListener('click', togglePopupMenu);
