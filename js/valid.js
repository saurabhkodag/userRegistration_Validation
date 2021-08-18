const Username=document.getElementById('Username');
const Email=document.getElementById('Email');
const Password=document.getElementById('Password');
const Confirm_Password=document.getElementById('Confirm_Password');



function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerText=message;
}
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className='form-control success';
}
function checkusernamelength(input){
    if(input.value.length<3 || input.value.length>=20){
        showError(Username,"It should be between 2 to 20");
    }
}
function checkemail(input){
    let eregx=/^([a-zA-Z0-9_]+)(.)([a-zA-Z0-9_]+)(@)([a-zA-Z0-9_]+)(.)([a-zA-Z0-9_]+)(.)([a-zA-Z0-9_]+)$/;
    if(!eregx.test(input)){
        showError(input,"Not valid email");
    }
    else{
        showSuccess(input);
    }
}
function checkpassword(Password,Confirm_Password){
    if(Password.value!=Confirm_Password.value){
        showError(Confirm_Password,"Confirm_Password and Password does not match");
    }
    else{
        showSuccess(Password);
        showSuccess(Confirm_Password);
    }
}
function checkRequired(inputArr){
    inputArr.forEach(input =>{
        if(input.value.trim()===''){
            showError(input,`${input.id} required`);
        }
        else{
            showSuccess(input);
        }
    });
}
const validate  =() =>{
    
    checkRequired([Username,Email,Password,Confirm_Password]);
    checkusernamelength(Username);
    checkemail(Email);
    checkpassword(Password,Confirm_Password);
}