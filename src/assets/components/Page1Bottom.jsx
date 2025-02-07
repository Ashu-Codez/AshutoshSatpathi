import React from 'react'
import gsap from "gsap";
import {useGSAP} from '@gsap/React';
gsap.registerPlugin(useGSAP);

const Page1Bottom = () => {

  useGSAP(function(){
      gsap.to('#banner img', {
        rotate: 360,
        duration: 5, 
        repeat:-1,
        ease: 'linear'
        
      })
    })
  
  return (
    <div className='absolute flex items-end justify-between  w-full' style={{ padding:'80px', left: '0px', bottom:'0px' }}>
      <div className='prof'>
        <h2 className='prof1 text-xl font-[ashuf2]'>WEB DEV | WEB DESIGN </h2>
        <h3 className='prof2 text-xl leading-[2vw] font-[ashuf3] text-gray-500'>&nbsp;FULL STACK DEVELOPER</h3>
      </div>
      {/* <div id='banner'>
        <img className='size-20' style={{ marginBlockEnd: '2rem' }} src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.pngassets/Ashu-logo.png" />
        <img className='size-20 leading-[2vw]' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" />
      </div> */}
    </div>
  )
}

export default Page1Bottom;
