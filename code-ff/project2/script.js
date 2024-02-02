const form = document.getElementById("form")
const errorElement=document.getElementById("error")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("grid-last-name")
const cardNumber= document.getElementById("grid-cardnum")
const expDate = document.getElementById("grid-exp")
const cvc = document.getElementById("grid-cvc")
const subForm = document.getElementById("subForm")
const inputElements= document.getElementsByTagName("input")

   
form.addEventListener('submit',(e) =>{
  
   let messages = []
  if (firstName.value === '') {
    messages.push('First Name is required');
}

if (lastName.value === '') {
    messages.push("Last name is required");
}

if (cardNumber.value.length < 15) {
    messages.push('Invalid card number');
}

if (expDate.value === '') {
    messages.push("Must provide expiration date");
}

if (isNaN(parseInt(expDate.value))) {
    messages.push("Expiration date must be a number");
}

if (cvc.value === '') {
    messages.push("Must provide CVC");
}

if (isNaN(parseInt(cvc.value))) {
    messages.push("CVC must be a number");

   }
   if (messages.length > 0) {
   e.preventDefault()
   errorElement.innerText = messages.join (', ')
   console.log("submitted")

   return;
   }
   e.preventDefault();
    form.style.display="none"
    subForm.style.display="block"
   
})

function getValue(inputId, displayId) {
    let textInput = document.getElementById(inputId);
    let textValue= textInput.value;

    let result = document.getElementById(displayId);
    result.innerText=textValue;
}

// function updateCard() {
   


  
//     let firstName = document.getElementById("firstName").value;
//     let lastName = document.getElementById("grid-last-name").value;
//     let cardNumber = document.getElementById("grid-cardnum").value;
//     let expDate = document.getElementById("grid-city").value;
//     let cvc = document.getElementById("grid-cvc").value;

   
//     document.getElementById("cardFirstName").innerText = firstName;
//     document.getElementById("cardLastName").innerText = lastName;
//     document.getElementById("cardNumber").innerText = cardNumber;
//     document.getElementById("cardExpDate").innerText = expDate;
//     document.getElementById("cardCvc").innerText = cvc;
//   }

