async function init () {
    initGlobal();
    initStorage();
    allStudents = await fetchStudents('all');
    const favorite = getFavorite();
    if(favorite !== ''){
        for (const student of favorite) {
            favoriteStudents.push(getSingleStudentObject(student))
        }
    }
}

init();