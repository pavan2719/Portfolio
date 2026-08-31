/* ==========================================
   LOADER
========================================== */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.transition = "opacity 0.8s ease, visibility 0.8s ease";
        }, 1100);
    }
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

    if (!typingText) return;

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
const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeToggle.classList.remove("bx-moon");
            themeToggle.classList.add("bx-sun");

        } else {

            themeToggle.classList.remove("bx-sun");
            themeToggle.classList.add("bx-moon");

        }

    });

}


/* ==========================================
   MOBILE MENU
========================================== */
const menuBtn = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

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

}


/* ==========================================
   SCROLL PROGRESS BAR
========================================== */
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        scrollHeight > 0
            ? (scrollTop / scrollHeight) * 100
            : 0;

    progressBar.style.width =
        progress + "%";

}, { passive: true });


/* ==========================================
   BACK TO TOP BUTTON
========================================== */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

}, { passive: true });


if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ==========================================
   CUSTOM CURSOR
========================================== */
const cursor = document.querySelector(".cursor");

if (
    cursor &&
    window.matchMedia("(pointer:fine)").matches
) {

    document.addEventListener("mousemove", e => {

        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";

    });


    const cursorTargets = document.querySelectorAll(
        "a, button, .skill-card, .project-card, .certificate-card"
    );

    cursorTargets.forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.style.width = "40px";
            cursor.style.height = "40px";
            cursor.style.borderColor = "var(--secondary)";

        });


        item.addEventListener("mouseleave", () => {

            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.borderColor = "var(--primary)";

        });

    });

}


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
            section.offsetTop - 220;

        const sectionHeight =
            section.clientHeight;

        if (window.pageYOffset >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

}, { passive: true });


/* ==========================================
   ENTRANCE REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(
        ".section-title, .skill-card, .detail-card, " +
        ".timeline-item, .project-card, .certificate-card, " +
        ".education-card, .contact-form, .reveal"
    );


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ==========================================
   STAGGERED PROJECT / CARD REVEAL
========================================== */

document
    .querySelectorAll(".project-grid, .skills-grid, .certificate-grid")
    .forEach(container => {

        const cards =
            container.querySelectorAll(
                ".project-card, .skill-card, .certificate-card"
            );

        cards.forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 80}ms`;

        });

    });


/* ==========================================
   3D TILT PROJECT CARDS
========================================== */

const tiltCards =
    document.querySelectorAll(
        ".project-card[data-tilt], [data-tilt]"
    );


if (window.matchMedia("(pointer:fine)").matches) {

    tiltCards.forEach(card => {

        card.addEventListener("pointermove", e => {

            const rect =
                card.getBoundingClientRect();

            const mouseX =
                e.clientX - rect.left;

            const mouseY =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                ((mouseX - centerX) / centerX) * 8;

            const rotateX =
                ((mouseY - centerY) / centerY) * -8;


            card.style.setProperty(
                "--mx",
                `${(mouseX / rect.width) * 100}%`
            );

            card.style.setProperty(
                "--my",
                `${(mouseY / rect.height) * 100}%`
            );


            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)
                 scale(1.015)`;

        });


        card.addEventListener("pointerleave", () => {

            card.style.transform = "";

        });

    });

}


/* ==========================================
   PROJECT CARD MOUSE LIGHTING
========================================== */

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener("pointermove", e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;


            card.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            card.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        });

    });


/* ==========================================
   SMOOTH ANCHOR SCROLL
========================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                const targetId =
                    this.getAttribute("href");

                if (!targetId || targetId === "#") {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });


/* ==========================================
   PARTICLE BACKGROUND
========================================== */

function createParticle() {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    const size =
        Math.random() * 8 + 2;

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";

    particle.style.left =
        Math.random() *
        window.innerWidth +
        "px";

    particle.style.top =
        window.innerHeight +
        "px";

    particle.style.position =
        "fixed";

    particle.style.borderRadius =
        "50%";

    particle.style.pointerEvents =
        "none";

    particle.style.background =
        "rgba(0,229,255,.6)";

    particle.style.zIndex =
        "-1";


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
                Math.random() * 5000 + 5000,

            easing:
                "linear"

        }

    );


    document.body.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 10000);

}


setInterval(createParticle, 350);


/* ==========================================
   FLOATING TECHNOLOGY ICONS
========================================== */

const techIcons = [

    "⚛️",
    "🐍",
    "☁️",
    "💻",
    "🧠",
    "🚀",
    "⚡",
    "🔗"

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


    icon.style.position =
        "fixed";

    icon.style.left =
        Math.random() *
        window.innerWidth +
        "px";

    icon.style.bottom =
        "-50px";

    icon.style.fontSize =
        "24px";

    icon.style.pointerEvents =
        "none";

    icon.style.opacity =
        ".55";

    icon.style.zIndex =
        "-1";


    document.body.appendChild(icon);


    icon.animate(

        [

            {
                transform:
                    "translateY(0) rotate(0deg)"
            },

            {
                transform:
                    "translateY(-120vh) rotate(360deg)"
            }

        ],

        {

            duration: 12000,

            easing: "linear"

        }

    );


    setTimeout(() => {

        icon.remove();

    }, 12000);

}


setInterval(floatingIcons, 2600);


/* ==========================================
   HERO PARALLAX - MOUSE MOVEMENT
========================================== */

const hero =
    document.querySelector(".home");

const parallaxLayers =
    document.querySelectorAll(
        ".parallax-layer, [data-parallax]"
    );


if (
    hero &&
    window.matchMedia("(pointer:fine)").matches
) {

    hero.addEventListener("pointermove", e => {

        const rect =
            hero.getBoundingClientRect();

        const x =
            (e.clientX - rect.left) /
                rect.width -
            0.5;

        const y =
            (e.clientY - rect.top) /
                rect.height -
            0.5;


        parallaxLayers.forEach(layer => {

            const speed =
                parseFloat(
                    layer.dataset.speed ||
                    layer.dataset.parallax ||
                    "0.1"
                );


            layer.style.transform =
                `translate3d(
                    ${x * speed * 90}px,
                    ${y * speed * 90}px,
                    0
                )`;

        });

    });


    hero.addEventListener("pointerleave", () => {

        parallaxLayers.forEach(layer => {

            layer.style.transform = "";

        });

    });

}


/* ==========================================
   SCROLL PARALLAX
========================================== */

let parallaxTicking = false;


window.addEventListener(
    "scroll",
    () => {

        if (parallaxTicking) return;

        window.requestAnimationFrame(() => {

            const scrollY =
                window.scrollY;


            document
                .querySelectorAll("[data-parallax]")
                .forEach(layer => {

                    const speed =
                        parseFloat(
                            layer.dataset.parallax ||
                            "0.08"
                        );


                    layer.style.translate =
                        `0 ${scrollY * speed}px`;

                });


            parallaxTicking = false;

        });


        parallaxTicking = true;

    },
    { passive: true }
);


/* ==========================================
   MAGNETIC BUTTON MICRO-INTERACTION
========================================== */

if (
    window.matchMedia("(pointer:fine)").matches
) {

    document
        .querySelectorAll(
            ".primary-btn, .social-icons a"
        )
        .forEach(element => {

            element.addEventListener(
                "pointermove",
                e => {

                    const rect =
                        element.getBoundingClientRect();

                    const centerX =
                        rect.left +
                        rect.width / 2;

                    const centerY =
                        rect.top +
                        rect.height / 2;


                    const moveX =
                        (e.clientX -
                            centerX) *
                        0.12;


                    const moveY =
                        (e.clientY -
                            centerY) *
                        0.12;


                    element.style.transform =
                        `translate(
                            ${moveX}px,
                            ${moveY}px
                        )`;

                }
            );


            element.addEventListener(
                "pointerleave",
                () => {

                    element.style.transform =
                        "";

                }
            );

        });

}


/* ==========================================
   BUTTON RIPPLE MICRO-INTERACTION
========================================== */

document
    .querySelectorAll(
        ".btn, .project-buttons a"
    )
    .forEach(button => {

        button.addEventListener(
            "pointerdown",
            e => {

                const rect =
                    button.getBoundingClientRect();


                button.style.setProperty(
                    "--ripple-x",
                    `${e.clientX - rect.left}px`
                );


                button.style.setProperty(
                    "--ripple-y",
                    `${e.clientY - rect.top}px`
                );


                button.classList.remove(
                    "ripple-active"
                );


                void button.offsetWidth;


                button.classList.add(
                    "ripple-active"
                );

            }
        );

    });


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const counter =
                    entry.target;

                const target =
                    Number(
                        counter.dataset.target
                    );


                let current = 0;


                const duration = 1500;

                const startTime =
                    performance.now();


                function updateCounter(
                    currentTime
                ) {

                    const elapsed =
                        currentTime -
                        startTime;


                    const progress =
                        Math.min(
                            elapsed /
                                duration,
                            1
                        );


                    current =
                        Math.floor(
                            progress *
                            target
                        );


                    counter.innerText =
                        current;


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.innerText =
                            target;

                    }

                }


                requestAnimationFrame(
                    updateCounter
                );


                counterObserver.unobserve(
                    counter
                );

            });

        },

        {
            threshold: 0.6
        }

    );


counters.forEach(counter => {

    counter.innerText = "0";

    counterObserver.observe(counter);

});


/* ==========================================
   HEADER SHADOW ON SCROLL
========================================== */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    () => {

        if (!header) return;


        if (window.scrollY > 50) {

            header.style.background =
                "rgba(5,8,20,.85)";

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.2)";

        } else {

            header.style.background =
                "rgba(0,0,0,.15)";

            header.style.boxShadow =
                "none";

        }

    },
    { passive: true }
);


/* ==========================================
   MICRO INTERACTION - IMAGE HOVER
========================================== */

const profileImage =
    document.querySelector(".profile-card");


if (
    profileImage &&
    window.matchMedia("(pointer:fine)").matches
) {

    profileImage.addEventListener(
        "pointermove",
        e => {

            const rect =
                profileImage.getBoundingClientRect();


            const x =
                ((e.clientX - rect.left) /
                    rect.width -
                    0.5) *
                10;


            const y =
                ((e.clientY - rect.top) /
                    rect.height -
                    0.5) *
                -10;


            profileImage.style.transform =
                `perspective(900px)
                 rotateX(${y}deg)
                 rotateY(${x}deg)
                 scale(1.03)`;

        }
    );


    profileImage.addEventListener(
        "pointerleave",
        () => {

            profileImage.style.transform =
                "";

        }
    );

}


/* ==========================================
   ACCESSIBILITY - REDUCED MOTION
========================================== */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (prefersReducedMotion.matches) {

    document.documentElement.style.scrollBehavior =
        "auto";

}


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
