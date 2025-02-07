import React, { useRef, useState, useEffect } from 'react';
import TiltText from '../assets/components/TiltText';
import Page1Bottom from '../assets/components/Page1Bottom'
import gsap from "gsap";
import {useGSAP} from '@gsap/React';


const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving =(e) => {
     setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x-tiltRef.current.getBoundingClientRect().width/2)/30) 
    
     setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y-tiltRef.current.getBoundingClientRect().height/2)/8 )

      
}

useGSAP(function(){
        gsap.to(tiltRef.current,{
          transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
          duration: 3, 
          ease: 'power4.out'
        })}, [xVal, yVal])

return (

<div id='page1' onMouseMove={(e) => {
  mouseMoving(e)
  }}  className="h-screen bg-white relative" style={{ padding: '14px' }}> 

  <div className="heroME shadow-md shadow-black h-full w-full rounded-[30px]"style={{ padding: '50px' }} >
    <img id='page1-in' className='h-16 ' style={{ marginInline:'24px' }} src="https://static.vecteezy.com/system/resources/previews/043/543/343/large_2x/silver-alphabet-letter-and-number-free-png.png" alt="ashuLogo" />
    
    
      <TiltText  abc={tiltRef} />
    
      <Page1Bottom />
  </div>
</div>
);
};

export default Page1;