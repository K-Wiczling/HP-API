// Create single row of table 
const createRow = (id, clas, {name, dateOfBirth, house, wizard, ancestry, hogwartsStudent}) => {
    const row = `
        <tr id="${id}" class="${clas}">
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
        let clas = 'alt1';
        if (index % 2 === 1) clas = 'alt2' 
        tab += createRow(index, clas, student);
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
        if (row.id !== 'first')
            row.addEventListener('click', showSingleStudent)
    }
}