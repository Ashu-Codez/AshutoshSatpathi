import React from 'react'
import gsap from "gsap";
import {useGSAP} from '@gsap/React';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(useGSAP);


const Page2 = () => {
  
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function(){
    gsap.from(".rotateText",{
        transform:'rotateX(-80deg)',
        opacity:0,
        duration: 1,
        stagger:1,
        scrollTrigger: {
          trigger: ".rotateText",
          start : "top 60%",
          end: "top -300%"
        }
        
      });
    }, []);
  return (
    <div id='section2' className='bg-white text-center   font-[ashuf3]' style={{ padding:'20px', color:'black' }} >
      
        <h3 className='copyright text-lg' style={{  color:'gray' }}>© ashu-codez 2025 | designed and developed</h3>
        <div className='rotateText' >
          <h1 className='text-[30vw]  font-[ashuf5] uppercase leading-[25vw]'style={{  color:'black', marginBlockStart:'50px' }}>HTML</h1>
        </div>
        <div className='rotateText' >
          <h1 className='text-[30vw]  font-[ashuf5] uppercase leading-[25vw]'style={{  color:'black' }}>CSS</h1>
        </div>
        <div className='rotateText' >
          <h1 className='text-[30vw]  font-[ashuf5] uppercase leading-[25vw]'style={{  color:'black' }}>JAVASCRIPT</h1>
        </div>
        <div className='rotateText' >
          <h1 className='text-[30vw]  font-[ashuf5] uppercase leading-[25vw]'style={{  color:'black' }}>REACT</h1>
        </div>
        <div className='rotateText' >
          <h1 className='text-[30vw]  font-[ashuf5] uppercase leading-[25vw]'style={{  color:'black' }}>TAILWIND</h1>
        </div>
        <div className='rotateText' >
          <h1 className='text-[30vw]  font-[ashuf5] uppercase leading-[25vw]'style={{  color:'black' }}>MONGO DB</h1>
        </div>
        <div className='rotateText' >
          <h1 className='text-[30vw]  font-[ashuf5] uppercase leading-[25vw]'style={{  color:'black' }}>EXPRESS</h1>
        </div>
        <div className='rotateText' >
          <h1 className='text-[30vw]  font-[ashuf5] uppercase leading-[25vw]'style={{  color:'black' }}>NODE JS</h1>
        </div>
        <div className='rotateText' >
          <h1 className='text-[30vw]  font-[ashuf5] uppercase leading-[25vw]'style={{  color:'black' }}>GSAP</h1>
        </div>
        <div className='rotateText' >
          <h1 className='text-[30vw]  font-[ashuf5] uppercase leading-[25vw]'style={{  color:'black' }}>MOTION</h1>
        </div>
    </div>
  )
}

export default Page2
