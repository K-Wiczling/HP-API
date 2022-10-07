// Update favorite string in storage base on favoriteStudents array
const updateFavorite = () => {
    resetFavorite();
    let favorite = '';
    if (favoriteStudents === []) {
        favorite =  '';
    } else if (favoriteStudents.length === 1) {
        favorite =  `${favoriteStudents[0].name}`;
    } else {
        favoriteStudents.map((student, index ) => {
            if(index === 0){
                favorite = `${student.name}`
            }
            else
                favorite +=  `;${student.name}`;
        });
    }
    localStorage.setItem("favorite", favorite);
}

// Geting favorite Item parsed to the array
const getFavorite = () => {
    let favorite = localStorage.getItem("favorite");
    if(favorite !== '')
        favorite = parseFavorite(favorite);
    return favorite;
}

// Parsing favorite string in to the array
const parseFavorite = (favoriteString) => {
    let favoriteArr = [];
    favoriteArr = favoriteString.split(";");
    return favoriteArr;
    
}
// Chceck if favorite exist in strage and initialize it with empty string if not
const initStorage = () => {
    const loc = localStorage.getItem("favorite")
    if (loc === null || loc === undefined || loc === 'undefined')
        resetFavorite(); 
}

//Clear favorie item in the storage
const resetFavorite = () => {
    localStorage.setItem("favorite", "")
}