
const navLinks = document.querySelectorAll("#menu ul a.link");
navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.getElementById(href.slice(1));
        if (target) {
            const headerHeight = document.querySelector("header").offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }

    });
});

