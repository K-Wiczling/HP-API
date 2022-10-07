# Karol Wiczling
Recruitment task - frontend intership

# Intro

For this task, we will use a free API that provides Harry Potter data: https://hp-api.herokuapp.com/

You can find there the documentation along with available HTTP endpoints and sample responses.

# Functionalities

The goal is to write an application that will communicate with this API and have the following functionalities:

1) There should be 6 buttons on the top of the page:
    * 'All students' - fetch data for characters who are Hogwarts students during the book series
    * 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw' - fetch data for characters in a certain house
    * 'Favorites' - navigates to a subpage with characters saved in cookies/local storage
2) Once data are fetched, display a table containing columns:
    * Name
    * Date of birth
    * House
    * Wizard
    * Ancestry
    * Is student/staff
3) Three first columns should be sortable, both ascending and descending.
4) Clicking on any record should open a modal containing the selected character's data and image.
5) Modal should have a button for adding/removing character to Favorites. Data should be saved in cookies/local storage.
6) Favorites subpage should display a rectangular card for each saved character.
7) Each card should contain:
    * Image
    * Name
    * Button for removing from Favorites
8) For a default, 3 cards should be displayed in a row, but the user should be able to change the number of cards in a row (you can use buttons for that e.g. 1/3/5 cards in a row or some switch/input).

# Requirements

1) The application should be written in VanillaJS. Do not use any frameworks, we want to test your JS knowledge.
2) Do not use libraries (e.g. Bootstrap) for styling. You can use CSS / SCSS / SASS.
3) We do not expect the app to look outstanding, but we want to see your styling skills.
4) The application should be responsive to all resolutions.
5) Tests are much appreciated, but not necessary.
6) You can use TypeScript, but it is not required
7) It is allowed to use NodeJS and NPM for setting up local hosting and / or compiling SASS / SCSS files.
8) Please put your solution in a private repository on Github and invite reviewer@profil-software.com as a collaborator (any role with at least read-only access to code) -> https://docs.github.com/en / github / setting-up-and-managing-your-github-user-account / inviting-collaborators-to-a-personal-repository
