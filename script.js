/* 1. FORM FUNCTIONALITY ON CONTACT PAGE
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


/* 2. HAMBURGER MENU ON SMALLER SCREEN SIZES (CURRENTLY ONLY USED ON CONTACT PAGE)
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
//hidden drop down menu appears
menuIcon.addEventListener(`click`, function(menuEvent) {
    menu.style.display = `block`;

    // if user wants to close drop down menu, click the hamburger icon again to hide the drop down menu
    if (menu.style.display === `block`) {
        menuIcon.addEventListener(`click`, function(hideMenu) {
            menu.style.display = `none`
        })
        // trying to figure out how to have the icon continuously toggle between hiding/showing the drop down menu.
        // this code doesn't seem to register:
    } else if (menu.style.display === `none`) {
        console.log(`hello`)
        menuIcon.addEventListener(`click`, function(showMenuAgain) {
            menu.style.display = `block`
        })
    }
})
