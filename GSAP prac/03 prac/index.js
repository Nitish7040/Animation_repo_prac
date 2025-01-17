
var path ="M 10 100 Q 550 100 990 100"
var finalpath ="M 10 100 Q 250 100 990 100"

var string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets){
    // console.log(dets);
    path = ` M 10 100 Q ${dets.x} ${dets.y}  990 100 `  // in place of 100 for y | 500 for x

    gsap.to("svg path" ,{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    })

})
string.addEventListener("mouseleave", function(){
    // console.log("leaved");

    gsap.to("svg path", {
        attr:{d:finalpath},
        duration:1.5,
        ease: "elastic.out(1,0.1)"
    })
    
})

