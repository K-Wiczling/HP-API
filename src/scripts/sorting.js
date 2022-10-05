const sortingColumn = ['Name', 'DateOfBirth', 'House' ];
const sortingType = ['Ascending', 'Descending' ];

const compareName = (a, b) => {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
}
const compareHouse = (a, b) => {
    let x = a.house.toLowerCase();
    let y = b.house.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
}
const compareBirth = (a, b) => {
    a = a.split('-');
    b = b.split('-');
    a = a.map(x => Number(x))
    b = b.map(x => Number(x))
  
    if((a[2] - b[2]) !== 0){
        return a[2] - b[2];
    } else if ((a[1] - b[1]) !== 0){
        return a[1] - b[1];
    } else if ((a[0] - b[0]) !== 0){
        return a[0] - b[0];
    } else 
        return 0;

}
const sortBy = () => {
    const column = sortingColumn[sortingColumnInput.selectedIndex];
    const type = sortingType[sortingTypeInput.selectedIndex];
    console.log(type, column);
    sorting(type, column);
    
    insertTable(createTable(shownStudents));
    updateTable();
}

const sorting = (type, column) => {

    if (type === 'Ascending') {
        if (column === 'Name') {
            shownStudents.sort((a, b) => { 
                return compareName (a, b);
            });
        }
        if (column === 'DateOfBirth') {
            shownStudents.sort((a, b) => { 
                return compareBirth (a.dateOfBirth, b.dateOfBirth);
            });
        }
        if (column === 'House') {
            shownStudents.sort((a, b) => { 
                return compareHouse (a, b);
            });
        }
    } else if(type === 'Descending') {
        
        if (column === 'Name') {
            shownStudents.reverse((a, b) => { 
                return compareName (a, b);
            });
        }
        if (column === 'DateOfBirth') {
            shownStudents.reverse((a, b) => { 
                return compareBirth (a, b);
            });
        }
        if (column === 'House') {
            shownStudents.reverse((a, b) => { 
                return compareHouse (a, b);
            });
        }
       
    }

}
//Sorting column
const sortingColumnInput = document.getElementById('sorting-column');
//sortingColumnInput.selectedIndex

//Sorting type
const sortingTypeInput = document.getElementById('sorting-type');
//sortingColumnInput.selectedIndex

//Sorting button
const sortingBtn = document.getElementById('sort-btn');
sortingBtn.addEventListener('click', sortBy)
