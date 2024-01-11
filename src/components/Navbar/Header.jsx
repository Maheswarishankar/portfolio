import React from "react";
import { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import {BiSolidHome ,BiSolidPhone  ,BiSolidLayer, BiSolidUser , BiSolidFile } from "react-icons/bi";


const Header = () => {
  // Toggle
  const [Toggle, showMenu] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <Link to={"/home"} className="nav_logo">
            <span>S</span><span className="purple_color">o</span><span>f</span><span className="purple_color">t</span><span>w</span><span className="purple_color">a</span><span>r</span ><span className="purple_color">e</span>
            &nbsp;<span>d</span><span className="purple_color">e</span><span>v</span><span className="purple_color">e</span><span>l</span><span className="purple_color">o</span><span>p</span><span className="purple_color">e</span>
            <span>r</span> 
 
          </Link>

          <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
               
                <Link
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset based on your layout
                  duration={500}                
                  
                ><BiSolidHome />
                  Home
                </Link>
              </li>


              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset based on your layout
                duration={500}
              ><BiSolidUser />
                About
              </Link>

             

              <Link
                activeClass="active"
                to="Skills"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset based on your layout
                duration={500}
              ><BiSolidFile />
                Skills
              </Link>

              
              <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset based on your layout
                duration={500}
              ><BiSolidLayer />
                Projects
              </Link>

             
              {/* <Link
                activeClass="active"
                to="Resume"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset based on your layout
                duration={500}
              >
                Resume
              </Link> */}

              

              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset based on your layout
                duration={500}
              ><BiSolidPhone />
                Contact
              </Link>
            </ul>

            <i
              className="uil uil-times nav_close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>

          <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps nav-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
