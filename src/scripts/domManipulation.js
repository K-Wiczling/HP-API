const studentButtons = document.getElementsByClassName('main-buttons');
for (const btn of studentButtons) {
    btn.addEventListener('click', showStudents)
}