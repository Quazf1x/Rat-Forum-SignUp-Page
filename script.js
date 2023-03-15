document.addEventListener('DOMContentLoaded', function () {
  const labels = document.querySelectorAll('label');
  const errorContents = document.getElementsByClassName('error');
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const passwordC = document.querySelector('#passwordC');
  
  const regex = {
    password: /\w{8,}/
  }

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

  password.addEventListener('keyup',(e) => { 
    invalidInput(`Password must be at least 8 characters long.`, 4,
    !regex[e.target.attributes.name.value].test(e.target.value)) }); //I used ! because .test value returns false when it doesnt match,but invalidInput function takes 'false' bool as a sign of no problems

  passwordC.addEventListener('keyup',(e) => { invalidInput('Passwords do not match.', 5, password.value!==passwordC.value);});

});

