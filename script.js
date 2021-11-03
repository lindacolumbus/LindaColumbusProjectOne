/* 
1. FORM FUNCTIONALITY ON CONTACT PAGE
When a user fills out the form and hits the submit button:
    their name is stored as a variable
    a pop-up window appears with a personalized message
    user can close the pop-up window upon button click
*/

// FORM TARGETING
// identify the form element to place the event listener
const formEl = document.querySelector(`form`);

// event handling upon submit button click
formEl.addEventListener(`submit`, function(event) {
    // prevent default behaviour
    event.preventDefault();

    // store the user's name as a variable
    const inputEl = document.getElementById(`formName`);
    const inputName = inputEl.value;

    // MODAL
    // upon submit click, the modal becomes visible
    const modal = document.querySelector(`.modal`);
    modal.style.display = `block`;

    // PERSONALIZED MESSAGE
    // take saved input name and use it in the pop-up modal
    modal.innerHTML = `<p>Thanks, ${inputName}! Someone from the Delicious team will get back to you shortly.</p><button class="modalButton">Close</button>`;

    // CLOSE BUTTON
    // when user clicks the close button, the modal disappears
    const modalButton = document.querySelector(`.modalButton`);
    modalButton.addEventListener(`click`, function(modalEvent) {
        modal.style.visibility = `hidden`;
    })
});


/* 
2. HAMBURGER MENU ON SMALLER SCREEN SIZES (CURRENTLY ONLY USED ON CONTACT PAGE)
When the browser scales down and the horizontal menu nav collapses into a hamburger menu icon:
    when clicking the icon, a hidden drop down menu appears
    when clicking the icon again, the menu disappears
    should be able to toggle the visibility of the menu on/off by clicking the icon
*/

// HIDDEN MENU TARGETING
// identify the hidden menu elements and store in variables
const menu = document.querySelector(`.hiddenMenu`);
const menuIcon = document.querySelector(`.fa.fa-bars`);

// event handling upon hamburger icon click
menuIcon.addEventListener(`click`, function(event) {
    // defining variable for when hamburger menu is visible
    const isVisible = menu.style.display === `block`;
    // if hamburger menu is visible, click event = display: none
    if (isVisible) {
        menu.style.display = `none`;
        // otherwise, hamburger menu is invisible, click event = display: block
    } else {
        menu.style.display = `block`;
    }
})