import React from 'react'


const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.abc} style={{ paddingBlockStart:'100px' }}>
     <h1 className='text-[4vw] leading-[4vw]  uppercase font-[ashuf4] '> I AM<span className='ashutosh' style={{ color:'rgba(140, 137, 137, 0.488)' }}>&nbsp;ASHUTOSH  </span>™, A</h1>
     <h1 className='text-[8vw] leading-[7vw] font-[ashuf1]' > DESIGNER</h1>
     <h1 className='text-[4vw] leading-[4vw] font-[ashuf4]'>TO HIRE</h1>
  </div>
  );
};

export default TiltText;
