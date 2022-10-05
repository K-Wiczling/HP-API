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
    return a.dateOfBirth - b.dateOfBirth
}
const sortBy = () => {
    const column = sortingColumn[sortingColumnInput.selectedIndex];
    const type = sortingType[sortingTypeInput.selectedIndex];
    sorting(type, column);
    
    insertTable(createTable(shown));
    updateTable();
}

const sorting = (type, column) => {

    if (type === 'Ascending') {
        if (column === 'Name') {
            shown.sort((a, b) => { 
                return compareName (a, b);
            });
        }
        if (column === 'DateOfBirth') {
            shown.sort((a, b) => { 
                return compareBirth (a, b);
            });
        }
        if (column === 'House') {
            shown.sort((a, b) => { 
                return compareHouse (a, b);
            });
        }
    } else if(type === 'Descending') {
        
        if (column === 'Name') {
            shown.reverse((a, b) => { 
                return compareName (a, b);
            });
        }
        if (column === 'DateOfBirth') {
            shown.reverse((a, b) => { 
                return compareBirth (a, b);
            });
        }
        if (column === 'House') {
            shown.reverse((a, b) => { 
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
