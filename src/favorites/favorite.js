//Dom refrences
const cardContainer = document.getElementById('card-container');
const cardRange = document.getElementById('range');

//Change card count in the row base on range input
cardRange.addEventListener( 'change', (e) => {
    cardContainer.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;
});

//Initialie finction 
async function init () {
    initGlobal(); // Initialize global Variables
    initStorage(); // Initialize Local Storage
    allStudents = await fetchStudents('all'); //Get all characters for later use
    const favorite = getFavorite();
    

    if (favorite.length >= 1) {
        for (const student of favorite) {
            const singeleStudent = getSingleStudentObject(student);
            favoriteStudents.push(singeleStudent);
        }
    }
    drawCards();
}

//Showing cards in the card container
const drawCards = () => {
    cardContainer.innerHTML = '';
    for (const student of favoriteStudents) {
        cardContainer.appendChild(card(student.name, student.image));
    }

}

//Removeing character from favorite
const removeFromFavorite = (name) => {
    if (favoriteStudents.lenght === 1){
        favoriteStudents = [];
    } else {
        favoriteStudents.map( (student, index) => {
            if (student.name === name)
                favoriteStudents.splice(index, 1);
        });
    }
    updateFavorite();
    drawCards();
}
init();