// Create single row of table 
const createRow = (id, className, {name, dateOfBirth, house, wizard, ancestry, hogwartsStudent}) => {
    
    const row = document.createElement('tr');
    row.id = id;
    row.className = className;
    row.setAttribute('onclick', `showSingleStudent('${name}')`);
    
    let nameCell = document.createElement('td');
    let dateCell = document.createElement('td');
    let houseCell = document.createElement('td');
    let wizardCell = document.createElement('td');
    let ancestryCell = document.createElement('td');
    let hogwartsStudentCell = document.createElement('td');
    
    nameCell.innerText = name;
    row.appendChild(nameCell);
    
    dateCell.innerText = dateOfBirth;
    row.appendChild(dateCell);
    
    houseCell.innerText = house;
    row.appendChild(houseCell);

    wizardCell.innerText = house;
    row.appendChild(wizardCell);
    
    ancestryCell.innerText = ancestry;
    row.appendChild(ancestryCell);
    
    hogwartsStudentCell.innerText = hogwartsStudent;
    row.appendChild(hogwartsStudentCell);

    // `
    //     <tr id="${id}" class="${clas}">
    //         <td>${name}</td>
    //         <td>${dateOfBirth}</td>
    //         <td>${house}</td>
    //         <td>${wizard}</td>
    //         <td>${ancestry}</td>
    //         <td>${hogwartsStudent}</td>
    //     </tr>
    // `
    return row;
}

// Reference to the tbody element
const studentTableBody = document.getElementById('studentsTable');

// Create whole table
const createTable = (students) => {
    studentTableBody.innerHTML = '';
    students.map((student, index) => {
        let className = 'alt1';
        if (index % 2 === 1) className = 'alt2' 
        studentTableBody.appendChild(createRow(index, className, student));
    });
}
