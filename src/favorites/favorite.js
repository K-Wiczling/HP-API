const cardContainer = document.getElementById('card-container');
const cardRange = document.getElementById('range');
cardRange.addEventListener( 'change', (e) => {
    cardContainer.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;
} )
async function init () {
    initGlobal();
    initStorage();
    allStudents = await fetchStudents('all');
    const favorite = getFavorite();
    

    if ( favorite.length >= 1) {
        for (const student of favorite) {
            const singeleStudent = getSingleStudentObject(student);
            favoriteStudents.push(singeleStudent)
        }
    }
    drawCards();
}
const drawCards = () => {
    let html = '';
    for (const student of favoriteStudents) {
        html += card(student.name, student.image);
    }
    cardContainer.innerHTML = html;

}
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