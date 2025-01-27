import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useState } from 'react';
const App = () => {

  // Best practice to use GSAP in React:-----
       // MAGIC RAPPER FOR MEMORY MANAGEMNENT IN REACT
const {contextSafe} = useGSAP()
const rotate = contextSafe(function(){
  gsap.to(".box",{
    duration: 2,
    rotation: 360,
    onComplete: rotate
  })
})




  // 1st method by using useGSAP:---- (used for multiple elements)

// useGSAP(()=>{
  // wirte your gsap code here :-----


  // gsap.to("#box",{
  //   duration: 2,
  //   x: 100,
  //   y: 100,
  //   rotation: 360,
  //   backgroundColor: "red"
  // })
// })


// 2nd method by using useRef:---- (used foronly one element)

// const gsapRef =useRef()
// useGSAP(()=>{
//   gsap.to(gsapRef.current,{
//     duration: 2,
//     x: 100,
//     y: 100,
//     rotation: 360,
//     backgroundColor: "red"
//   })
// })



// useGSAP(()=>{
//   gsap.from(".box",{
//     y:300,
//     duration: 2,
//     rotation: 720,
//     // backgroundColor: "red"
//     delay: 1,
//   })
// })


// 3rd method by using useRef:---- (used foronly one element)
// const boxRef =useRef()
// useGSAP(()=>{
//   gsap.from(boxRef.current,{
//     y:300,
//     duration: 2,
//     rotation: 720,
//     backgroundColor: "red",
//     delay: 1,
//   })
// })

// useGSAP(()=>{
//   gsap.to(".circle",{ 
//     duration: 2,
//     x: 100,
//     y: 100,
//     rotation: 360,
//     backgroundColor: "red"
//   })
// },{scope: ".any"})




/// GSAP using by usestate:-----

// const [move, setmove] = useState()
// const [rotate, setrotate] = useState()  

// const random = gsap.utils.random(-500,500,10)
// const rotateRandom = gsap.utils.random(0,360,10)
// // console.log(random);

// useGSAP(()=>{
//   gsap.to(".fly",{
//     duration: 0.5,
//     x: move,
//     y: move,
//     rotation: rotate,
//   })
// },[move,rotate])


  return (
<main>
  {/* <h1>GSAP React</h1> */}

{/* <div ref={gsapRef} id="box">
</div> */}

{/* <div className="container">
  <div className="circle"></div>
  <div  className="box"></div>
</div>


<div className="any">
  <div className="circle"></div>
  </div> */}
  <div 
  onClick={rotate}
  className="box"></div>

{/* <h1 className='text-5xl font-bold'>Click on Makkhi😶</h1> */}

{/* <img className="fly"
onClick={()=>{
  setmove(random)
   setrotate(rotateRandom)
  console.log(move);
  
 }}
src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png" alt="" /> */}



</main>
  )
}

export default App