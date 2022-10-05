// Create single row of table 
const createRow = (id, {name, dateOfBirth, house, wizard, ancestry, hogwartsStudent}) => {
    const row = `
        <tr id="${id}">
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

// Create whole table
const createTable = (students) => {
    tab = '';
    students.map((student, index) => {
        tab += createRow(index, student);
    });
    return tab;
}

// Inserting table
const studentTableBody = document.getElementById('studentsTable');
const insertTable = (tab) => {
    studentTableBody.innerHTML = tab;
}

//Update table row EventListeners
const updateTable = () => {
    // All table rows
    const tableRows = document.getElementsByTagName("tr");
    for (const row of tableRows) {
        row.addEventListener('click', showSingleStudent)
    }
}