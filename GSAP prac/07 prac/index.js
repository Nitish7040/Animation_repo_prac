// nitish make seprate in span tag using js

function breaktext(){

var h1  = document.querySelector("h1")

var h1text =document.querySelector("h1").textContent
// var h1text = h1.textContent
// console.log(h1);

var splittedtext = h1text.split("")
// console.log(splittedtext);

var clutter =""

var halfvalue= splittedtext.length/2
// console.log(halfvalue);

splittedtext.forEach(function(e , idx){

    if(idx<halfvalue){
  clutter += `<span class="a">${e}</span>`
      
    }else{
       clutter += `<span class="b">${e}</span>`
        
    }

   
    // console.log(clutter);
})
// console.log(clutter);

h1.innerHTML = clutter

}
breaktext();


// gsap.from("h1 span" , {
//     y:50,
//     duration:0.8,
//     stagger:0.15,
//     delay:0.5,
//     opacity:0
// })

gsap.from("h1 .a",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0
})
gsap.from("h1 .b",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})