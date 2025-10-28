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

    tl.from("#intro h1,h2,p", {
        y: 100,
        opacity: 0,
        stagger: 0.3
    })

    tl.from("#buttons button", {
        x: 100,
        opacity: 0,
        stagger: 0.2
    })

    tl.from("#buttons button", {
        scale: 1.01,
        yoyo: true,
        repeat: -1,
        duration: 1
    })
}
// firstpage()

// ------------------------------- page 2 js -----------------------------

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
