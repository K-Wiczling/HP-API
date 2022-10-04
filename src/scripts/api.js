async function fetchStudents (whatToFetch) {
    console.log(whatToFetch);
    let fetchUrl = '';
    const house = 'https://hp-api.herokuapp.com/api/characters/house/'
    switch (whatToFetch) {
        case "all-students": fetchUrl = 'https://hp-api.herokuapp.com/api/characters/students';
            break;
        case "gryffindor": fetchUrl = `${house}${whatToFetch}`;
            break;
        case "slytherin": fetchUrl = `${house}${whatToFetch}`;
            break;
        case "hufflepuff": fetchUrl = `${house}${whatToFetch}`;
            break;
        case "ravenclaw": fetchUrl = `${house}${whatToFetch}`;
            break;
        default: fetchUrl = 'https://hp-api.herokuapp.com/api/characters/students';
            break;
    }
    const result = await fetch(fetchUrl)
    .then( response => response.json())
    .then(students =>  students)
    return result;
}
