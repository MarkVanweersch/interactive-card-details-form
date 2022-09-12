// elements from the form
const form = document.getElementById("form");
const cardHolderName = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-number");
const cardDateMonth = document.getElementById("card-date-month");
const cardDateYear = document.getElementById("card-date-year");
const cardCVC = document.getElementById("card-cvc");

const errorNoteName = document.querySelector(".error-note.name");
const errorNoteNumber = document.querySelector(".error-note.number");
const errorNoteDate = document.querySelector(".error-note.date");
const errorNoteCVC = document.querySelector(".error-note.cvc");

// variables for setting the border color of the input fields
const borderDefaultColor = "hsl(270, 3%, 87%)";
const borderErrorColor = "hsl(0, 100%, 66%)";

// elements from the card preview
const cardNamePreview = document.querySelector(".card-name-preview");
const cardNumberPreview = document.querySelector(".card-number-preview");
const cardDatePreview = document.querySelector(".card-date-preview");

// form validation
form.addEventListener("submit", (event) => {
  if (cardHolderName.value === "" || cardHolderName.value === null) {
    cardHolderName.style.borderColor = borderErrorColor;
    errorNoteName.innerText = "Name must be filled out";
    errorNoteName.style.visibility = "visible";
    event.preventDefault();
  }

  if (cardNumber.value === "" || cardNumber.value === null) {
    cardNumber.style.borderColor = borderErrorColor;
    errorNoteNumber.innerText = "Card number must be filled out";
    errorNoteNumber.style.visibility = "visible";
    event.preventDefault();
  }

  if (cardNumber.value.length > 0 && cardNumber.value.length !== 16) {
    cardNumber.style.borderColor = borderErrorColor;
    errorNoteNumber.innerText = "Number must consist of 16 digits";
    errorNoteNumber.style.visibility = "visible";
    event.preventDefault();
  }

  if ((cardDateMonth.value === "" || cardDateMonth.value === null) && (cardDateYear.value === "" || cardDateYear.value === null)) {
    cardDateMonth.style.borderColor = borderErrorColor;
    cardDateYear.style.borderColor = borderErrorColor;
    errorNoteDate.innerText = "Expiry date must be filled out";
    errorNoteDate.style.visibility = "visible";
    event.preventDefault();
  } else if (cardDateMonth.value === "" || cardDateMonth.value === null) {
    cardDateMonth.style.borderColor = borderErrorColor;
    errorNoteDate.innerText = "Expiry month must be filled out";
    errorNoteDate.style.visibility = "visible";
    event.preventDefault();
  } else if (cardDateYear.value === "" || cardDateYear.value === null) {
    cardDateYear.style.borderColor = borderErrorColor;
    errorNoteDate.innerText = "Expiry year must be filled out";
    errorNoteDate.style.visibility = "visible";
    event.preventDefault();
  } else if (cardDateMonth.value.length !== 2) {
    cardDateMonth.style.borderColor = borderErrorColor;
    errorNoteDate.innerText = "Expiry month must consist of 2 digits";
    errorNoteDate.style.visibility = "visible";
    event.preventDefault();
  } else if (cardDateYear.value.length !== 2) {
    cardDateYear.style.borderColor = borderErrorColor;
    errorNoteDate.innerText = "Expiry year must consist of 2 digits";
    errorNoteDate.style.visibility = "visible";
    event.preventDefault();
  }

  if (cardCVC.value === "" || cardCVC.value === null) {
    cardCVC.style.borderColor = borderErrorColor;
    errorNoteCVC.innerText = "CVC must be filled out";
    errorNoteCVC.style.visibility = "visible";
    event.preventDefault();
  } else if (cardCVC.value.length !== 3) {
    cardCVC.style.borderColor = borderErrorColor;
    errorNoteCVC.innerText = "CVC must consist of 3 digits";
    errorNoteCVC.style.visibility = "visible";
    event.preventDefault();
  }

  /* cardHolderNameValue.push(cardHolderName.value); */
});

//border reset on input fields after failed submition
cardHolderName.addEventListener("click", () => {
  cardHolderName.style.borderColor = borderDefaultColor;
  errorNoteName.style.visibility = "hidden";
})

cardNumber.addEventListener("click", () => {
  cardNumber.style.borderColor = borderDefaultColor;
  errorNoteNumber.style.visibility = "hidden";
})

cardDateMonth.addEventListener("click", () => {
  cardDateMonth.style.borderColor = borderDefaultColor;
  errorNoteDate.style.visibility = "hidden";
})

cardDateYear.addEventListener("click", () => {
  cardDateYear.style.borderColor = borderDefaultColor;
  errorNoteDate.style.visibility = "hidden";
})

cardCVC.addEventListener("click", () => {
  cardCVC.style.borderColor = borderDefaultColor;
  errorNoteCVC.style.visibility = "hidden";
});


// display input values in the preview card
cardHolderName.addEventListener("keyup", () => {
  cardNamePreview.innerText = cardHolderName.value;
});

cardNumber.addEventListener("keyup", () => {
  cardNumberPreview.innerText = cardNumber.value;
});

cardDateMonth.addEventListener("keyup", datePreview);
cardDateYear.addEventListener("keyup", datePreview);

function datePreview() {
  cardDatePreview.innerText = cardDateMonth.value + "/" + cardDateYear.value;
}