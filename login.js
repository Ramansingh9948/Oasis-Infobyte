const users = [
    {username: "raman", password: "raman"},
    {username: "nishu", password: "nishu"},

];

const loginform = document.getElementById("loginform");
const message = document.getElementById("message");

loginform.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find((u) => u.username === username && u.password === password);

    if(user) {
        message.innerHTML="Login Successful";
        message.style.color = "green";
        console.log("Login Successfull");
        open("raman.html");
    }
    else {
        message.innerHTML="Invalid Username or password";
        message.style.color = "red";
        console.log("Login Unsuccessfull");

    }
});



