document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('.input-form');
  const errorContents = document.getElementsByClassName('error');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const passwordC = document.querySelector('#passwordC');

  function Validate(message,currentForm,validated){
    //....
  }

 email.addEventListener('keyup',(e)=>{
  if(email.validity.typeMismatch){
  errorContents[2].textContent ='Please enter a valid Email.'
  email.style.borderColor = "red";}
  else errorContents[2].textContent ='';
 });

 passwordC.addEventListener('keyup',(e)=>{
  password.value!==passwordC.value ?  errorContents[5].textContent ='Passwords do not match.' : errorContents[5].textContent ='';
 })

});
