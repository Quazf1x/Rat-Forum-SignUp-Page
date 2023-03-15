document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('.input-form');
  const labels = document.querySelectorAll('label');
  const errorContents = document.getElementsByClassName('error');
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const email = document.querySelector('#email');
  const phoneNumber = document.querySelector('#phoneNumber');
  const password = document.querySelector('#password');
  const passwordC = document.querySelector('#passwordC');
  const regex = {
    password: /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[a-zA-z0-9]{8,}/,
    phoneNumber:/\d{11}/
  }

  /*function validateRegex(form,regex){
    if(regex.test(field.value)){
      invalidInput()
    }
  }
*/
  function invalidInput(message,formIndex,bool){
    if(bool){
      errorContents[formIndex].textContent = message;
      labels[formIndex].style.transition="color .2s";
      labels[formIndex].style.color="red";
    }
    else{
      errorContents[formIndex].textContent = '';
      labels[formIndex].style.color="black";
    }
  }

  firstName.addEventListener('keyup',(e) => { invalidInput('Please enter your first name.',0,firstName.value==='')});

  lastName.addEventListener('keyup',(e) => { invalidInput('Please enter your last name.',1,lastName.value==='')});

  email.addEventListener('keyup', (e) => { invalidInput('Please enter a valid Email.', 2, email.validity.typeMismatch);});

 // phoneNumber.addEventListener('keyup',(e) => { validateRegex(e.target, regex[e.target.attributes.name.value])});

  passwordC.addEventListener('keyup',(e) => { invalidInput('Passwords do not match.', 5, password.value!==passwordC.value);});

});

