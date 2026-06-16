/* ==========================================
   LOADER
========================================== */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.8s ease";
    }, 1500);
});

/* ==========================================
   TYPING EFFECT
========================================== */
const typingText = document.querySelector(".typing-text");

const roles = [
    "Software Developer",
    "AI & ML Engineer",
    "React Developer",
    "Python Programmer",
    "Full Stack Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

/* ==========================================
   DARK / LIGHT MODE
========================================== */
const themeToggle =
document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {
        themeToggle.classList.remove("bx-moon");
        themeToggle.classList.add("bx-sun");
    } else {
        themeToggle.classList.remove("bx-sun");
        themeToggle.classList.add("bx-moon");
    }
});

/* ==========================================
   MOBILE MENU
========================================== */
const menuBtn =
document.querySelector(".mobile-menu");

const navbar =
document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.classList.remove("bx-menu");
        menuBtn.classList.add("bx-x");
    } else {
        menuBtn.classList.remove("bx-x");
        menuBtn.classList.add("bx-menu");
    }
});

document.querySelectorAll(".navbar a")
.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.classList.remove("bx-x");
        menuBtn.classList.add("bx-menu");

    });

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */
const progressBar =
document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    progress + "%";

});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */
const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==========================================
   CUSTOM CURSOR
========================================== */
const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";

});

document
.querySelectorAll(
"a, button, .skill-card, .project-card"
)
.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.width = "40px";
        cursor.style.height = "40px";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.width = "20px";
        cursor.style.height = "20px";

    });

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */
const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 200;

        const sectionHeight =
        section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */
const revealElements =
document.querySelectorAll(
".section-title, .skill-card, .detail-card, .timeline-item, .project-card, .certificate-card, .education-card, .contact-form"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (
            revealTop <
            windowHeight - revealPoint
        ) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ==========================================
   PARTICLE BACKGROUND
========================================== */
function createParticle() {

    const particle =
    document.createElement("span");

    particle.classList.add("particle");

    document.body.appendChild(particle);

    let size =
    Math.random() * 8 + 2;

    particle.style.width =
    size + "px";

    particle.style.height =
    size + "px";

    particle.style.left =
    Math.random() * window.innerWidth +
    "px";

    particle.style.top =
    window.innerHeight + "px";

    particle.style.position =
    "fixed";

    particle.style.borderRadius =
    "50%";

    particle.style.pointerEvents =
    "none";

    particle.style.background =
    "rgba(0,229,255,.6)";

    particle.style.zIndex = "-1";

    particle.animate(
        [
            {
                transform:
                "translateY(0)",
                opacity: 1
            },
            {
                transform:
                "translateY(-120vh)",
                opacity: 0
            }
        ],
        {
            duration:
            Math.random() * 5000 + 5000
        }
    );

    setTimeout(() => {
        particle.remove();
    }, 10000);

}

setInterval(createParticle, 300);

/* ==========================================
   FLOATING TECHNOLOGY ICONS
========================================== */
const techIcons = [
    "⚛️",
    "🐍",
    "☁️",
    "💻",
    "🧠",
    "🚀"
];

function floatingIcons() {

    const icon =
    document.createElement("div");

    icon.innerHTML =
    techIcons[
        Math.floor(
            Math.random() *
            techIcons.length
        )
    ];

    icon.style.position = "fixed";
    icon.style.left =
    Math.random() * window.innerWidth +
    "px";

    icon.style.bottom = "-50px";

    icon.style.fontSize = "24px";

    icon.style.pointerEvents = "none";
    icon.style.opacity = ".6";
    icon.style.zIndex = "-1";

    document.body.appendChild(icon);

    icon.animate(
        [
            {
                transform:
                "translateY(0)"
            },
            {
                transform:
                "translateY(-120vh)"
            }
        ],
        {
            duration: 12000
        }
    );

    setTimeout(() => {
        icon.remove();
    }, 12000);

}

setInterval(floatingIcons, 2500);

/* ==========================================
   SMOOTH SECTION TRANSITIONS
========================================== */
document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e) {

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});

/* ==========================================
   COUNTER ANIMATION
========================================== */
const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute(
            "data-target"
        );

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(
                current + increment
            )}`;

            setTimeout(
                updateCounter,
                20
            );

        }else{

            counter.innerText =
            target;

        }

    };

    updateCounter();

});

/* ==========================================
   HEADER SHADOW ON SCROLL
========================================== */
const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background =
        "rgba(5,8,20,.85)";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.2)";

    }
    else{

        header.style.background =
        "rgba(0,0,0,.15)";

        header.style.boxShadow =
        "none";

    }

});

/* ==========================================
   CONSOLE SIGNATURE
========================================== */
console.log(`
=====================================
Portfolio Developed For
CHENNAM PAVAN KUMAR
Software Developer | AI & ML Engineer
=====================================
`);