import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
      <div className="text-box">
        <h2 className="heading-primary">
          <span className="heading-primary-top">GAMING WORLD</span>
          {/* <span className="heading-primary-bottom">Find your adventurous side</span> */}
        </h2>
    
      
        <div><Link to ={"/fetchteams"} className="link" >GET STARTED..!! </Link></div>
        </div>
    </header>
  );
}

export default Header;

