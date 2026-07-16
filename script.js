function checkPassword() {
    const pass = document.getElementById("password").value;

    if (pass === "ingredimini") {
        document.getElementById("login").style.display = "none";
        document.getElementById("main").style.display = "block";
    } else {
        alert("ACCESS DENIED");
    }
}