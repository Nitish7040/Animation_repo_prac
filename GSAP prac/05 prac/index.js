var main =document.querySelector("#main") 
var cursor = document.querySelector("#cursor")
var imagediv = document.querySelector("#image")


main.addEventListener("mousemove", function(val){
    // console.log(val.x);

gsap.to(cursor, {
    x:val.x,
    y:val.y,
    duration:0.2,
    
})
    
})

//cursor enter
imagediv.addEventListener("mouseenter", function(){
    // console.log("clicked");
cursor.innerHTML="hello nitish"
gsap.to( cursor,{
    scale:3,
    backgroundColor:"rgba(255, 255, 255, 0.65)",
})
    
})

// cursor leave
imagediv.addEventListener("mouseleave", function(){
    // console.log("clicked");
cursor.innerHTML=""
gsap.to( cursor,{
    scale:1,
    backgroundColor:"white",
})
    
})

