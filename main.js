function SignIn(){
    let userName = document.getElementById("username").value.trim();
    if (userName === "SD-schooldistrict"){
        window.location.href = "SchoolDistrictSection.html";
    }
    else if (userName === "B-busdriver"){
        window.location.href = "BusDriverSection.html";
    }
    else if (userName === "R-rideshareuser"){
        window.location.href = "RideshareSection.html";
    } else {
        alert("Invalid username");
    }
}

function GoToConfirmation(){
    window.location.href = "Confirm.html";
}

function Confirmation(){
    window.location.href = "ThankYou.html";
}

function GoBackHome(){
    window.location.href = "SignInPage.html";
}

function BookAgain(){
    window.location.href = "SchoolDistrictSection.html";
}
function Confirmation2(){
    window.location.href = "ThankYou2.html";
}

function GoBackHome2(){
    window.location.href = "SignInPage.html";
}

function BookAgain2(){
    window.location.href = "BusDriverSection.html";
}

function Confirmation3(){
    window.location.href = "ThankYou3.html";
}

function GoBackHome3(){
    window.location.href = "SignInPage.html";
}

function BookAgain3(){
    window.location.href = "RideshareSection.html";
}