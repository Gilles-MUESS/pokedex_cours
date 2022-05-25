const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    //tentative de relier la page de login aux pokedexs
    if (username === "user" && password === "PokemyApp") {
        window.open ("file:///index.html");   
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})