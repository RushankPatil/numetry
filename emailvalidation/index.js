        
function verify() {
    const email = document.getElementById("emailInput").value;
    // let a=false;
    let  otp=Math.floor(Math.random()*10000);
    sessionStorage.setItem('generatedOTP', otp);
    Email.send({
    SecureToken : "5a6934f7-19c5-4ba2-b6ca-8b243c55a74a",
    To : email,
    From : "rushank2002@gmail.com",
    Subject : "OTP",
    Body :otp
    }).then(
        message =>{
            if(message==="OK"){
                alert("OTP sent to your email");
                // const bu=document.getElementById("otpbutton");
                // bu.textContent="verify"
            }
        }
    );}
const userTableBody = document.getElementById("userTableBody");

userTableBody.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
        const row = target.parentNode.parentNode;
        const nameCell = row.cells[0];
        const emailCell = row.cells[1];

        if (target.textContent === 'Edit') {
            // Replace name and email cells with input fields
            nameCell.innerHTML = `<input type="text" value="${nameCell.textContent}">`;
            emailCell.innerHTML = `<input type="email" value="${emailCell.textContent}">`;

            // Change button text to "Save"
            target.textContent = "Save";
        } else if (target.textContent === 'Save') {
            // Update table cells with input values
            const newName = nameCell.querySelector("input").value;
            const newEmail = emailCell.querySelector("input").value;
            nameCell.innerHTML = newName;
            emailCell.innerHTML = newEmail;

            // Change button text back to "Edit"
            target.textContent = "Edit";
        } else if (target.textContent === 'Delete') {
            row.remove();
        }
    }
});
function addData() { 
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    // Create a new row
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
    `;
    userTableBody.appendChild(newRow);
}

function verifyOTP() {
    const enteredOTP = document.getElementById("OTPInput").value; // Get entered OTP
    const generatedOTP = sessionStorage.getItem('generatedOTP'); // Retrieve stored OTP
      
    if (enteredOTP == generatedOTP) {
        alert("OTP verified successfully");
        addData();
    } else {
      alert("Invalid OTP");
    }
}