let form= document.getElementById('Registration');
let successMessage=document.getElementById('success-message');
let ip1=document.getElementById('ip1');
let ip2=document.getElementById('ip2');
let ip3=document.getElementById('ip3');
let ip4=document.getElementById('ip4');
const userList = document.getElementById('tabledata');
let ip5=document.getElementById('ip5');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let fullName=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let mobileNo=document.getElementById('mobilenumber').value;
    let userName=document.getElementById('username').value;
    let password=document.getElementById('password').value;

    const valid=true;
    const error=[];
    if(fullName.length<6 ||( /^(?=.*[A-Z])(?=.*[a-z])$/).test(fullName)){
        valid=false;
        ip1.textContent='Invalid Full Name';
        // ip1.style.display='block';
    }else{
        ip1.textContent='';
        ip1.style.display='block';
    }
    if(email.length>30 || email.length<10|| !email.includes('@')||!email.includes('.com')){
        valid=false;
        ip2.textContent='Invalid email';
        ip2.style.display='block';
    }else{
        ip2.textContent='';
        ip2.style.display='block';
    }
    if(!/^(?:[6789])\d{9}$/.test(mobileNo)){
        valid=false;
        ip3.textContent='Invalid mobile number';
        ip3.style.display='block';
    }else{
        ip3.textContent='';
        ip3.style.display='block';
    }

    if(userName.length>10 || userName.length<3){
        valid=false;
        ip4.textContent='Invalid User Name';
        ip4.style.display='block';
    }else{
        ip4.textContent='';
        ip4.style.display='block';
    }
    function isStrongPassword(password) {
        // Define password strength criteria
        const minLength = 8;
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/g.test(password);
      
        // Check if password meets all criteria
        return password.length >= minLength && hasLowercase && hasUppercase && hasNumber && hasSpecialChar;
      }
      
    if(!isStrongPassword){
        valid=false;
        ip5.textContent='Password is too week';
        ip5.style.display='block';
    }else{
        ip5.textContent='';
        ip5.style.display='block';
    }
    if(valid){
        // alert(error.join(`\n`))
        successMessage.textContent=`Regestration successful for ${fullName}`;
        successMessage.style.display='block';
    }
     
    const userData={
        fullName,
        email,
        mobileNo,
        userName,
        password,
    };
    localStorage.setItem('registeredUser', JSON.stringify(userData));
    if(valid){
        let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  // Add new user to the array
  registeredUsers.push(userData);

  // Store updated array back to localStorage
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

  successMessage.textContent = `Registration successful for ${fullName}`;
  successMessage.style.display = 'block';

  }

});

