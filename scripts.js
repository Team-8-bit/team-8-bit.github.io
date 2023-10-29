function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function openNav() {
    document.getElementById("sidenav").style.width = "325px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

function popup(name) {
    var popup = document.getElementById("popup-" + name);
    var background = document.getElementById("popup-background");
    var body = document.body;
    background.classList.toggle("visible")
    popup.classList.toggle("show");
    body.classList.toggle("noscroll");
    popup.classList.toggle("slideout");
}

window.addEventListener("scroll", reveal);