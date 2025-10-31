function firstpage() {
    let tl = gsap.timeline()

    tl.from("nav a", {
        y: -100,
        opacity: 0,
        stagger: 0.2,
    })

    tl.from("#profile-pic img", {
        y: 100,
        opacity: 0,
    })

    tl.from("#intro h1, #intro h2, #intro p", {
        y: 100,
        opacity: 0,
        stagger: 0.3
    })

    tl.from("#buttons button", {
        x: 100,
        opacity: 0,
        stagger: 0.2
    }, "-=0.3")

    gsap.to("#buttons button", {
        scale: 1.01,
        yoyo: true,
        repeat: -1,
        duration: 1
    })
}
// firstpage()

// ------------------------------- page 2 js -----------------------------

function secondpage() {
    gsap.from("#section-2-top #btn-1", {
        x: -200,
        opacity: 0,
        ease: "sine.in",
        duration: 2,
        scrollTrigger: {
            trigger: "#section-2-top #btn-1",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 55%",
            scrub: 2,
        }
    })

    gsap.from("#section-2-top #btn-2", {
        y: 50,
        opacity: 0,
        ease: "sine.in",
        scrollTrigger: {
            trigger: "#section-2-top #btn-2",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 55%",
            scrub: 2
        }
    })

    gsap.from("#section-2-top #btn-3", {
        x: 200,
        opacity: 0,
        ease: "sine.in",
        scrollTrigger: {
            trigger: "#section-2-top #btn-3",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 55%",
            scrub: 2
        }
    })

    gsap.from("#section-2-bottom-left #circle-2", {
        x: -200,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#section-2-bottom-left #circle-2",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 55%"
        }
    })

    gsap.from("#section-2-bottom-left #circle-1", {
        x: 200,
        opacity: 0,
        stagger: 0.1,
        ease: "sine.out",
        scrollTrigger: {
            trigger: "#section-2-bottom-left #circle-1",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 55%"
        }
    })

    gsap.from("#section-2-bottom-left #circle-3,#section-2-bottom-left img", {
        scale: 1.05,
        opacity: 0,
        stagger: 0.1,
        duration: 2,
        ease: "sine.out",
        scrollTrigger: {
            trigger: "#section-2-bottom-left #circle-3,#section-2-bottom-left img",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 55%"
        }
    })

    gsap.from("#section-2-bottom-right #experience,#education,#interests", {
        x: 200,
        opacity: 0,
        stagger: 0.3,
        ease: "sine.out",
        scrollTrigger: {
            trigger: "#section-2-bottom-left #circle-3,#section-2-bottom-left img",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 55%",
        }
    })
}

// secondpage()

// ------------------------------third page-------------------------------

gsap.from("#section-3-top-h1", {
    x: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: "#section-3-top-h1",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 70%",
        scrub: 0.5,
        ease: "power2.out"
    }
})

gsap.from("#section-3-top-h3", {
    x: -200,
    opacity: 0,
    scrollTrigger: {
        trigger: "#section-3-top-h3",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 70%",
        scrub: 0.5,
        ease: "power2.out"
    }
})


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
    { selector: ".aws-load", percent: 40 }
];



ScrollTrigger.create({
    trigger: "#frontend",
    scroller: "body",
    markers: true,
    start: "top 70%",
    once: true,
    onEnter: () => {
        skills.forEach((skill, index) => {
            const loader = document.querySelector(skill.selector)
            const percentage = document.querySelectorAll(".loader-percentage")[index]
            let count = 0

            const loadTime = setInterval(() => {
                if (count <= skill.percent) {
                    count++
                    loader.style.width = `${count}%`
                    percentage.textContent = `${count}%`
                }
                else clearInterval(loadTime)
            }, 20)
        })
    }
})