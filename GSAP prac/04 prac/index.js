var main =document.querySelector("#main") 
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function(val){
    // console.log(val.x);

gsap.to(cursor, {
    x:val.x,
    y:val.y,
    duration:0.2,
    
})
    
})

