function firstpage() {
    let tl = gsap.timeline()

    tl.from("nav h3", {
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
firstpage()