// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================


// ===============================
// 1. ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 250) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


// ===============================
// 2. SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    "section, article"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});

/// ===============================
// 3. BACK TO TOP BUTTON
// ===============================

const backToTop = document.querySelector("#backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    backToTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ===============================
// 4. CURRENT YEAR
// ===============================

const footerYear = document.querySelector("footer p");

if (footerYear) {

    footerYear.innerHTML =
        `© ${new Date().getFullYear()} Saihaj Kaur`;

}


// ===============================
// 5. WELCOME MESSAGE
// ===============================

console.log(
    "Welcome to Saihaj Kaur's Portfolio 🚀"
);

