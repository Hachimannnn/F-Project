function validateForm(event) {
    event.preventDefault();
    
    let email = document.getElementById('user-email').value;
    let password = document.getElementById('user-password').value;
    
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    
    location.replace('content.html');
}

function show() {
    if(document.getElementById("forgot").style.display != "block") {
        document.getElementById("forgot").style.display = "block";
        document.getElementById("forgot-button").innerHTML = "Forgot password?";
    }
    else {
        document.getElementById("forgot").style.display = "none";
        document.getElementById("forgot-button").innerHTML = "Forgot password?  ";
    }
}

