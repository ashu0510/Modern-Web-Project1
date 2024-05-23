// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// function firstPageAnim(){
//     var tl = gsap.timeline();

//     tl.from("#nav", {
//         y : '-10',
//         opacity : 0,
//         ease : Power3,
//         duration : 1,
//     })

//     .to(".boundingelem", {
//         y : 0,
//         // opacity : 0,
//         ease : Power3,
//         duration : 2,
//         delay : -1,
//         stagger : .2,  // for  difference in elements
//     })

//     .from("#hero_footer", {
//         y : -10,
//         opacity : 0,
//         duration: 1,
//         delay : -1,
//         ease : Power3,
//     })
// }

// function circleChapta() {
//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var yprev = 0;

//     window.addEventListener("mousemove",function(details){
//         xscale = gsap.utils.clamp(0.8, 1.2, details.clientX - xprev)
//         yscale = gsap.utils.clamp(0.8, 1.2, details.clientY - yprev)

//         xprev = details.clientX
//         yprev = details.clientY

//         circleMouseFollower(xscale, yscale);
//     })
// }

// circleChapta();

// function circleMouseFollower(xscale, yscale) {
//     window.addEventListener("mousemove", function(details){
//         document.querySelector(".minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale}))`
//     });
// }

// firstPageAnim();

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        ease: Power3.easeOut,
        duration: 1,
    })
        .to(".boundingelem", {
            y: 0,
            ease: Power3.easeOut,
            duration: 2,
            delay: -1,
            stagger: 0.2,
        })
        .from("#hero_footer", {
            y: -10,
            opacity: 0,
            duration: 1,
            delay: -0.5,
            ease: Power3.easeOut,
        });
}

function circleChapta() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (details) {
        var xdiff = details.clientX - xprev;
        var ydiff = details.clientY - yprev;

        xscale = gsap.utils.clamp(0.5, 1.5, Math.abs(xdiff) / 100);
        yscale = gsap.utils.clamp(0.5, 1.5, Math.abs(ydiff) / 100);

        xprev = details.clientX;
        yprev = details.clientY;

        circleMouseFollower(details.clientX, details.clientY, xscale, yscale);
    });
}

function circleMouseFollower(x, y, xscale, yscale) {
    document.querySelector(
        ".minicircle"
    ).style.transform = `translate(${x}px, ${y}px) scale(${xscale}, ${yscale})`;
}

circleChapta();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {

    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;

        diffrot = dets.clientX - rotate;
        rotate = dets.clientX


        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2),
        });

    });

    elem.addEventListener("mouseleave", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;

        diffrot = dets.clientX - rotate;
        rotate = dets.clientX


        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            
        });

    });
});
