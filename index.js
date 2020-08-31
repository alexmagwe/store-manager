document.addEventListener('DOMContentLoaded',()=>{

let eye=document.querySelector('#eye');
console.log(eye)
let pass=document.querySelector('#password');
// focus email input onload
document.querySelector('#email').focus();

// show  password
eye.addEventListener('click',togglevisiblity)

    function togglevisiblity(){   
            if (pass.type==='password'){
                pass.type='text'
                }
            else{
                pass.type='password'}
        
}











})