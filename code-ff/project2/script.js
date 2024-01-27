const form = document.getElementById("form")
const errorElement=document.getElementById("error")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("grid-last-name")
const cardNumber= document.getElementById("grid-cardnum")
const expDate = document.getElementById("grid-city")
const cvc = document.getElementById("grid-cvc")
const subForm = document.getElementById("subForm")

    
form.addEventListener('submit',(e) =>{
  
   let messages = []
   if (firstName.value === '') {
       messages.push(' First Name is required')
   }

   if (lastName.value === ''){
       messages.push ("Last name is required")
   }

   if (cardNumber.value === NaN){
       messages.push ("Numbers only")
   }

   if (cardNumber.value.length < 15) {
       messages.push('Invalid card number')
   }
   if (expDate.value ===''){
       messages.push("Must provide expiration date")
   }
   if (expDate.value === NaN){
    messages.push( "Exp.cdate must be a number" )
   }
   if (cvc.value === ''){
    messages.push ("Must provide CVC")
   }
   if (cvc.value === NaN){
       messages.push("Numbers only")
   }
   if (messages.length > 0){
   e.preventDefault()
   errorElement.innerText = messages.join (', ')
   } else {
   subForm.style.display='block'
   }
})


function getValue() {
    let textInput = document.getElementById("firstName");
    let textValue= textInput.value;

    let result = document.getElementById("show");
    result.innerText=textValue;
}

