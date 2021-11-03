// FORM FUNCTIONALITY ON CONTACT PAGE

/* When a user fills out the form and hits the submit button:
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