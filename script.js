// FORM FUNCTIONALITY ON CONTACT PAGE

/* SUBMISSION EVENT
When a user fills out the form and hits the submit button:
    their name is stored as a variable
    a pop-up window appears with a personalized message
*/

// FORM INPUT
// targeting
const formEl = document.querySelector(`form`);

// registering event
formEl.addEventListener(`submit`, function(event) {
    event.preventDefault();
    // store the user's name as a variable
    const inputEl = document.getElementById(`formName`);
    const inputName = inputEl.value;
    console.log(inputName);
});

// PERSONALIZED MODAL