import React from "react";
import { Typewriter } from "react-simple-typewriter";
import gitImage from "../assets/github.png";
import LinkedIn from "../assets/lin.png";
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="home_data" id="home">
        <h1 className="home_title">
          Hi, I'm Maheshwari S<span className="hand">👋</span>
        </h1>

        <h2 className="typewriter-text1">
          <span className="typewriter-text" style={{ fontWeight: "bold" }}>
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[
                " MERN Stack Developer",
                " Front-End Developer",
                "Back-End Developer",
              ]}
            />
          </span>
        </h2>

        <p className="home_description">
          I'm a Well-qualified Full Stack Developer familiar with a wide range
          of programming utilities and languages. Knowledgeable of backend and
          frontend development requirements with database management. Handles
          any part of the process with ease. Collaborative team player with a
          willingness to learn in and grow with the organization
        </p>
        <div>
          <button className="btn-resume">
            <a
              href={
                "https://drive.google.com/file/d/1YIZsDyYbGGcBVAD51vbG65geZA53NwMG/view?usp=drive_link"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>

          <button className="btn-social-icon">
            <a
              href="https://github.com/Maheswarishankar"
              className="home_social-icon"
              rel="noreferrer"
              target="_blank"
            >
              <img src={gitImage} alt="github" />
            </a>
          </button>
          <button className="btn-social-icon">
            <a
              href="https://www.linkedin.com/in/maheshwari-s-b14023166/"
              className="home_social-icon"
              rel="noreferrer"
              target="_blank"
            >
              <img src={LinkedIn} alt="github" />
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
