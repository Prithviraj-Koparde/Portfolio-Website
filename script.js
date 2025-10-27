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

let tl = gsap.timeline()

gsap.from("#section-2-top #btn-1", {
    x: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#btn-1",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 50%",
    }
})

gsap.from("#section-2-top #btn-2", {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#btn-1",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 50%",
    }
})

gsap.from("#section-2-top #btn-3", {
    x: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#btn-1",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 50%",
    }
})
