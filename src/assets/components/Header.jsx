import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
    navigate('/contact'); // Navigate to Page3
  };
  return (
    <div  className="headbtn fixed w-full flex items-center justify-end z-10 "  style={{ paddingInline: '70px', paddingBlock: '80px' }}>
        <button
        className="hirebtn" onClick={handleHireMeClick}> 
        Hire Me
        </button>
    </div>
  );
};

export default Header;