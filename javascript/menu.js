function openNav() {
    if (window.innerWidth <= 600) {
        document.getElementById("mySidepanel").style.width = "100%";
        document.getElementById("mySidepanel").style.height = "325px";
        document.getElementById("men_dis").style.opacity = "0%";
    } else {
        document.getElementById("mySidepanel").style.width = "250px";
        document.getElementById("mySidepanel").style.height = "100%";
        document.getElementById("men_dis").style.opacity = "0%";
    }

}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("men_dis").style.opacity = "100%";
}
window.addEventListener('scroll', function () {
    const nav = document.querySelector('body > header > nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
