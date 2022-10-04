const studentTableBody = document.getElementById('studentsTable');

const showFavorite = () => {
    console.log("favorite");
}
async function showStudents (e) {
    if(e.target.id === "favorites") {
        showFavorite()
        return;
    } else {
        const students = await fetchStudents (e.target.id);
        console.log(students);
        let tab = ''
        let i = 0;
        for (let student of students) {
            console.log(student);
            tab += createRow(i, student);
            ++i;
        }
        studentTableBody.innerHTML = tab;
    }
}   
const  createRow = (id, {name, dateOfBirth, house, wizard, ancestry, hogwartsStudent}) => {
    const row = `
        <tr id="s${id}">
            <td>${name}</td>
            <td>${dateOfBirth}</td>
            <td>${house}</td>
            <td>${wizard}</td>
            <td>${ancestry}</td>
            <td>${hogwartsStudent}</td>
        </tr>
    `
    return row;
}