// ----------------------------------- FIRST PAGE -----------------------------------

function firstpage() {
    let tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.8 } });

    tl.from(".nav-links a", {
        y: -100,
        opacity: 0,
        stagger: 0.2,
    })
    .from("#profile-pic img", {
        y: 100,
        opacity: 0,
    })
    .from("#intro h1, #intro h2, #intro p", {
        y: 80,
        opacity: 0,
        stagger: 0.3,
    })
    .from("#buttons button", {
        x: 100,
        opacity: 0,
        stagger: 0.2,
    });

    const hamMenu = document.querySelector(".ham-menu");
    const navLinks = document.querySelector(".nav-links");

    hamMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Optional: close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    gsap.to("#buttons button", {
        scale: 1.01,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "power1.inOut",
    });
}

firstpage();


// ----------------------------------- SECOND PAGE -----------------------------------

function secondpage() {
    gsap.from("#section-2-top #btn-1", {
        x: -200,
        opacity: 0,
        ease: "sine.in",
        scrollTrigger: {
            trigger: "#section-2-top #btn-1",
            scroller: "body",
            start: "top 60%",
            end: "top 50%",
        },
    });

    gsap.from("#section-2-top #btn-2", {
        y: 50,
        opacity: 0,
        ease: "sine.in",
        scrollTrigger: {
            trigger: "#section-2-top #btn-2",
            scroller: "body",
            start: "top 60%",
            end: "top 50%",
        },
    });

    gsap.from("#section-2-top #btn-3", {
        x: 200,
        opacity: 0,
        ease: "sine.in",
        scrollTrigger: {
            trigger: "#section-2-top #btn-3",
            scroller: "body",
            start: "top 60%",
            end: "top 50%",
        },
    });

    gsap.from("#section-2-bottom-left #circle-2", {
        x: -200,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#section-2-bottom-left #circle-2",
            scroller: "body",
            start: "top 60%",
            end: "top 55%",
        },
    });

    gsap.from("#section-2-bottom-left #circle-1", {
        x: 200,
        opacity: 0,
        stagger: 0.1,
        ease: "sine.out",
        scrollTrigger: {
            trigger: "#section-2-bottom-left #circle-1",
            scroller: "body",
            start: "top 60%",
            end: "top 55%",
        },
    });

    gsap.from("#section-2-bottom-left #circle-3, #section-2-bottom-left img", {
        scale: 1.05,
        opacity: 0,
        stagger: 0.1,
        duration: 2,
        ease: "sine.out",
        scrollTrigger: {
            trigger: "#section-2-bottom-left #circle-3, #section-2-bottom-left img",
            scroller: "body",
            start: "top 60%",
            end: "top 55%",
        },
    });

    gsap.from("#section-2-bottom-right #experience, #education, #interests", {
        x: 200,
        opacity: 0,
        stagger: 0.3,
        ease: "sine.out",
        scrollTrigger: {
            trigger: "#section-2-bottom-left #circle-3, #section-2-bottom-left img",
            scroller: "body",
            start: "top 60%",
            end: "top 55%",
        },
    });
}

secondpage();


// ----------------------------------- THIRD PAGE -----------------------------------

function thirdpage() {
    gsap.from("#section-3-top-h1", {
        x: 200,
        opacity: 0,
        scrollTrigger: {
            trigger: "#section-3-top-h1",
            scroller: "body",
            start: "top 60%",
            end: "top 70%",
            scrub: 0.5,
            ease: "power2.out",
        },
    });

    gsap.from("#section-3-top-h3", {
        x: -200,
        opacity: 0,
        scrollTrigger: {
            trigger: "#section-3-top-h3",
            scroller: "body",
            start: "top 60%",
            end: "top 70%",
            scrub: 0.5,
            ease: "power2.out",
        },
    });

    const skills = [
        { selector: ".ang-load", percent: 60 },
        { selector: ".html-load", percent: 95 },
        { selector: ".css-load", percent: 90 },
        { selector: ".js-load", percent: 70 },
        { selector: ".ts-load", percent: 65 },
        { selector: ".tcss-load", percent: 50 },
        { selector: ".java-load", percent: 85 },
        { selector: ".spring-load", percent: 80 },
        { selector: ".sql-load", percent: 55 },
        { selector: ".git-load", percent: 70 },
        { selector: ".docker-load", percent: 50 },
        { selector: ".aws-load", percent: 40 },
    ];

    ScrollTrigger.create({
        trigger: "#frontend",
        scroller: "body",
        start: "top 70%",
        once: true,
        onEnter: () => {
            skills.forEach((skill, index) => {
                const loader = document.querySelector(skill.selector);
                const percentage = document.querySelectorAll(".loader-percentage")[index];
                let count = 0;

                const loadTime = setInterval(() => {
                    if (count <= skill.percent) {
                        count++;
                        loader.style.width = `${count}%`;
                        percentage.textContent = `${count}%`;
                    } else {
                        clearInterval(loadTime);
                    }
                }, 20);
            });
        },
    });
}

thirdpage();


// ----------------------------------- FOURTH PAGE -----------------------------------

function fourthpage() {
    gsap.from(".section-4-top h1", {
        x: 200,
        opacity: 0,
        scrollTrigger: {
            trigger: ".section-4-top h3",
            scroller: "body",
            start: "top 60%",
            end: "top 70%",
            scrub: 0.5,
            ease: "power2.out",
        },
    });

    gsap.from(".section-4-top h3", {
        x: -200,
        opacity: 0,
        scrollTrigger: {
            trigger: ".section-4-top h3",
            scroller: "body",
            start: "top 60%",
            end: "top 70%",
            scrub: 0.5,
            ease: "power2.out",
        },
    });

    gsap.from(".section-4-main", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: ".section-4-main",
            scroller: "body",
            start: "top 60%",
            end: "top 70%",
            scrub: 1.5,
            ease: "power2.out",
        },
    });

    gsap.from(".section-4-bottom a", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".section-4-bottom",
            start: "top 85%",
        },
    });
}

fourthpage();


// ----------------------------------- FIFTH PAGE -----------------------------------

function fifthpage() {
    gsap.from(".contact-form", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".section-5",
            start: "top 80%",
        },
    });

    gsap.from(".contact-info", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".section-5",
            start: "top 80%",
        },
    });
}

fifthpage();
