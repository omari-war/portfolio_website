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

function showHeading() {
    document.getElementById("nav_heading").style.display = 'block';
}
function hideHeading() {
    document.getElementById("nav_heading").style.display = 'none';
}
const elementId = 'page_heading';
        const elementToWatch = document.getElementById(elementId);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    // Element is no longer in view
                    console.log('Element out of view');
                    // Your function here
                    showHeading()
                }
                if (entry.isIntersecting) {
                    // Element is no longer in view
                    console.log('Element in view');
                    // Your function here
                    hideHeading();
                }
            });
        });

        observer.observe(elementToWatch);