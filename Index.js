// Logo Scale
document.querySelectorAll(".section.hero--section").forEach(function (element) {
    let triggerElement = element;
    let targetElement = document.querySelector(".nav__logo");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "bottom top",
            scrub: 1,
        },
    });

    const mq1440 = window.matchMedia("(max-width: 1440px)");
    const mq768 = window.matchMedia("(max-width: 767px)");
    const mq425 = window.matchMedia("(max-width: 425px)");

    if (mq1440.matches && !mq768.matches && !mq425.matches) {
        tl.from(targetElement, {
            y: "-470px",
            width: "100%",
            scale: 1,
            duration: 1,
        });
    } else if (mq768.matches && !mq425.matches) {
        tl.from(targetElement, {
            y: "-490px",
            width: "100%",
            scale: 1,
            duration: 1,
        });
    } else if (mq425.matches) {
        tl.from(targetElement, {
            y: "-460px",
            width: "100%",
            scale: 1,
            duration: 1,
        });
    } else {
        tl.from(targetElement, {
            y: "-347%",
            width: "100%",
            duration: 1,
            scale: 1,
        });
    }
});

// Header Text Hide
document.querySelectorAll(".header_text-move").forEach(function (element) {
    let triggerElement = element;
    let targetElement = element;

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "-100% top",
            end: "30% top",
            scrub: 0.8,
        },
    });
    tl.to(targetElement, {
        y: "100%",
        duration: 1,
    });
});

// Sticky Circle Grow
document.querySelectorAll(".header__image").forEach(function (element) {
    let triggerElement = element;
    let targetElement = document.querySelectorAll(".header__image--element");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    });
    tl.fromTo(
        targetElement,
        {
            width: "35em",
            height: "35em",
            borderRadius: "35em",
            duration: 1,
        },
        {
            width: "100vw",
            height: "100vh",
            borderRadius: "0em",
            duration: 1,
        }
    );
});

// Light to Dark Color Change
document.querySelectorAll(".grid_wrapper:nth-child(odd)").forEach(function (element) {
    let triggerElement = element;
    let targetElement = document.querySelectorAll("body, .section.navbar");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    });

    tl.fromTo(
        targetElement,
        {
            backgroundColor: "#e8e2da",
            color: "#2e2a27",
            duration: 1,
        },
        {
            backgroundColor: "#2e2a27",
            color: "#e8e2da",
            duration: 1,
        }
    );
});

// Dark to Light Color Change
document.querySelectorAll(".grid_wrapper:nth-child(even), .header__image").forEach(function (triggerElement) {
    let targetElements = document.querySelectorAll("body, .section.navbar");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    });

    tl.fromTo(
        targetElements,
        {
            backgroundColor: "#2e2a27",
            color: "#e8e2da",
            duration: 1,
        },
        {
            backgroundColor: "#e8e2da",
            color: "#2e2a27",
            duration: 1,
        }
    );
});

// Grid Title Change
document.querySelectorAll(".grid__text-item")[0].classList.add("is--active");

document.querySelectorAll(".grid_wrapper").forEach(function (triggerElement) {
    let myIndex = Array.from(document.querySelectorAll(".grid_wrapper")).indexOf(triggerElement);
    let targetElement = document.querySelectorAll(".grid__text-item")[myIndex];

    gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top bottom", // The start and end values define the scroll positions when the animation should be triggered.
            end: "bottom bottom",
            onEnter: function () {
                document.querySelectorAll(".grid__text-item").forEach(function (element) {
                    element.classList.remove("is--active");
                });
                targetElement.classList.add("is--active");
            },
            onEnterBack: function () {
                document.querySelectorAll(".grid__text-item").forEach(function (element) {
                    element.classList.remove("is--active");
                });
                targetElement.classList.add("is--active");
            },
        },
    });
});

// Grid Image Move 1
document.querySelectorAll(".grid_item:nth-child(3n+1)").forEach(function (triggerElement) {
    let targetElement = triggerElement;

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        },
    });
    tl.to(targetElement, {
        y: "-30%",
        duration: 1,
    });
});

// Grid Image Move 2
document.querySelectorAll(".grid_item:nth-child(3n+2)").forEach(function (triggerElement) {
    let targetElement = triggerElement;

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
        },
    });
    tl.to(targetElement, {
        y: "-50%",
        duration: 1,
    });
});

// Grid Image Move 3
document.querySelectorAll(".grid_item:nth-child(3n+3)").forEach(function (triggerElement) {
    let targetElement = triggerElement;

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
        },
    });
    tl.to(targetElement, {
        y: "-70%",
        duration: 1,
    });
});