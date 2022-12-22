const navBar = document.getElementById("header__menu");
const navEnlaces = document.getElementById("nav");
const fade = document.getElementById("fade");
let active = false;

navBar.addEventListener("click", () => {
    navEnlaces.classList.toggle("nav__toggle");
    fade.classList.toggle("fade");
    if (active) {
        active = false;
        document.getElementById("header__barra").src = "images/icon-hamburger.svg";
    }
    else {
        active = true;
        document.getElementById("header__barra").src = "images/icon-close.svg";
    }

})

let actual = 0, posX1, posX2;
const testimonialesListado = document.getElementById("testimoniales__listado");
const puntos = document.querySelectorAll(".testimoniales__punto");

testimonialesListado.addEventListener("touchstart", (e) => {
    posX1 = e.touches[0].clientX;
}, false);

testimonialesListado.addEventListener("touchend", (e) => {
    posX2 = e.changedTouches[0].clientX;

    if (posX1 > posX2) {
        actual = (actual != 3 ? actual + 1 : actual)
    } else {
        actual = (actual != 0 ? actual - 1 : actual)
    }

    if (screen.width < 768) {
        testimonialesListado.style.transform = "translateX(" + (actual * -100) + "%)";

        puntos.forEach((element) => {
            element.classList.remove("testimoniales__punto--relleno");
        })
        puntos[actual].classList.add("testimoniales__punto--relleno");
    }



});

const formulario = document.getElementById("formulario");
const email = formulario.elements[0];

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = email.value.trim();
    if (texto === "") {
        return showMessage("Please enter your email")
    }
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(texto)) {
        return showMessage("Please insert a valid email");
    }
    formulario.submit();
});

function showMessage(message) {
    const msg = document.getElementById("footer__error");
    msg.innerText = message;
}