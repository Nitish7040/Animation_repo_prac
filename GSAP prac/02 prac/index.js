// gsap.to("#box1" , {
//     x:1300,
//     rotate:360,
//     duration:2,
//     delay:1
// })

// gsap.to("#box2" , {
//     x:1300,
//     rotate:360,
//     backgroundColor:"green",
//     duration:1.5,
//     delay:2.5
// })

// gsap.to("#box3" , {
//     x:1300,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4
// })


// using of timeline property:------------

// var tl = gsap.timeline()

// tl.to("#box1",{
//     x:1300,
//     rotate:360,
//     duration:1.45,
//     delay:0.5
// })
// tl.to("#box2", {
//     x:1300,
//     duration:2,
//     rotate:180
// })
// tl.to("#box3",{
//     x:1300,
//     rotate:-180,
//     duration:2
// })

/// for nav bar:-

var tl = gsap.timeline()

tl.from("h2" ,{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("h3" ,{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})
