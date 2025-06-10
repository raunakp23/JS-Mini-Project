const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cPassword = document.querySelector('#confirm-password');
const submit = document.querySelector('#btn');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    ValidateInputs();
})

const ValidateInputs = ()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim(); 


    //for username
    if(usernameValue === ''){
        setError(username,'username is required');
    }
        else{
            setSuccess(username);
        }

    //email 
    if(emailValue === ''){
        setError(email,'email is required');
    }
    else if(isValidEmail(emailValue)){
        setError(email,"provide a valid email address");
    }
    else{
        setSuccess(email);
    }
    //form password
    if(passwordValue === ''){
        setError(password,'password is required')
    }
    else if(passwordValue.length <8){
        setError(password,'password must be atleast 8 characters');
    }
    else{
        setSuccess(password);
    }

    //cpassword
    if(cPasswordValue === ''){
        setError(cPassword,'please confirm your password');
    }
    else if(cPasswordValue !== passwordValue){
        setError(password,"password doesn't match");
    }
    else{
        setSuccess(cPassword);
    }
}
const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(e){
    
}