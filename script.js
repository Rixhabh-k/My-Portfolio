var navBar = document.querySelector("nav");
var profileImg = document.querySelector("#profileImg")
var introduction = document.querySelector(".introduction")

// GSAP animations 

var mainTimeline = gsap.timeline();

mainTimeline.from(navBar,{
    opacity:0,
    duration:2,
    // delay:0.2,
})

// mainTimeline.from(profileImg,{
//     opacity:0,
//     duration:0.5,
// })

mainTimeline.from(profileImg, {
    opacity: 0,
    duration: 0.5,
}, "-=1"); // starts 1s *before* navBar finishes

mainTimeline.from(introduction,{
        opacity:0,
        duration:0.5,
})


