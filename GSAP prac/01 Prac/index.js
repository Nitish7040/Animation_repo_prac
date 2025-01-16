// gsap.to("#box" ,  // pass two values  1 element to animate 
// {
//   x:1000,          // 2 to be done in animation
//   duration:5,
//   delay:2          
// })  

gsap.to("#box2" ,{
    x:1000,         
    duration:2,
    ease: "power2.inOut",
    delay:1,
    rotate:(160),
    repeat:-1,
    yoyo:true
})
gsap.to("#box3" ,{
    x:1000,         
    duration:2,
    backgroundColor: "red",
    borderRadius:"50%",
    ease: "power2.inOut",
    scale:0.5,
    delay:1 ,
    repeat:-1,
    yoyo:true
})

/// for multiple elements:-

gsap.from("h1" , {
    // color:"red",
    opacity:0,
    duration:2,
    y:30,
    delay:1,
    // stagger:0.5   // work to run one by one , every elemnet take 0.5 sec to appear...
    stagger:-1       // appear the elemt from final to inital
})


// to repeat element using repeat property:---
gsap.to("#box" ,{
    x:1000,         
    duration:2,
    ease: "power2.inOut",
    delay:1 ,
    rotate:(360),
    repeat:-1,
    yoyo:true
})