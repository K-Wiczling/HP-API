// Fetching student base on input 
async function fetchStudents (whatToFetch) {
    let students = [];
    let fetchUrl = '';
    const house = 'https://hp-api.herokuapp.com/api/characters/house/'

    switch (whatToFetch) {
        case 'all' : fetchUrl = 'https://hp-api.herokuapp.com/api/characters';
            break;
        case 'all-students': fetchUrl = 'https://hp-api.herokuapp.com/api/characters/students';
            break;
        case 'gryffindor': fetchUrl = `${house}${whatToFetch}`;
            break;
        case 'slytherin': fetchUrl = `${house}${whatToFetch}`;
            break;
        case 'hufflepuff': fetchUrl = `${house}${whatToFetch}`;
            break;
        case 'ravenclaw': fetchUrl = `${house}${whatToFetch}`;
            break;
        default: fetchUrl = 'https://hp-api.herokuapp.com/api/characters/students';
            break;
    }
    
    students = await fetch(fetchUrl)
    .then( response => response.json())
    .then(students =>  students)

    return students
}
