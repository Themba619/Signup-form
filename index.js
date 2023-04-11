// Get references to DOM elements
var submitBtn = document.getElementById("btn");
var boxSet = document.getElementsByClassName("inputBox");
var errorIcon = document.getElementsByClassName("errorIcon");
var errorMsg = document.getElementsByClassName("errorMsg");

// Add click event listener to submit button
submitBtn.addEventListener("click", function(event){
    event.preventDefault(); // Prevent the page from refreshing or redirecting

    // Loop through each input box
    for(var i = 0; i < boxSet.length; i++) {
        var box = boxSet[i];
        
        // If the input box is empty, show the error message and icon
        if(box.value === "") {
            errorMsg[i].style.visibility = "visible";
            errorIcon[i].style.visibility = "visible";
        } else {
            // If the input box is not empty, continue to the next input box
            continue;
        }
    }

    // Check if all input boxes are filled in
    var allFilled = true;
    for(var i = 0; i < boxSet.length; i++) {
        var box = boxSet[i];
        if(box.value === "") {
            allFilled = false;
            break;
        }
    }

    // If all input boxes are filled in, show the success message and reset the form
    if(allFilled) {
        alert("Registration successful");
        document.forms["myForm"].reset();
    }
});

// Validate first name input
function validateFName(){
    var nameInput = document.forms["myForm"]["fName"].value;
    var errorMsg = document.getElementById("errorMsg1");
    var errorIcon = document.getElementById("errorIcon1");
    if(nameInput === ""){
        return errorMsg.style.visibility = "visible", 
        errorIcon.style.visibility = "visible";
    }
}

// Validate last name input
function validateLName(){
    var lastNameInput = document.forms["myForm"]["sName"].value;
    var errorMsg = document.getElementById("errorMsg2");
    var errorIcon = document.getElementById("errorIcon2");
    if(lastNameInput === ""){
        return errorMsg.style.visibility = "visible", 
        errorIcon.style.visibility = "visible";
    }
}

// Validate email input
function validateEmail(){
    var email = document.forms["myForm"]["emailInput"].value;
    var errorMsg = document.getElementById("errorMsg3");
    var errorIcon = document.getElementById("errorIcon3");
    var errorEmailBox = document.getElementById("emailBox");
    if(email === ""){
        return errorEmailBox.innerHTML = "email@example/com",
        errorEmailBox.style.color = "hsl(0, 100%, 74%)",
        errorMsg.style.visibility = "visible", 
        errorIcon.style.visibility = "visible";
    }
}

// Validate password input
function validatePassword(){
    var Password = document.forms["myForm"]["passwordInp"].value;
    var errorMsg = document.getElementById("errorMsg4");
    var errorIcon = document.getElementById("errorIcon4");
    if(Password === ""){
        return errorMsg.style.visibility = "visible", 
        errorIcon.style.visibility = "visible";
    }
}
