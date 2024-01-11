import React from "react";
import HtmlIcon from "../assets/icons8-html-5-96.png";
import CssIcon from "../assets/icons8-css3-96.png";
import javascriptIcon from "../assets/icons8-javascript.gif";
import BootstrapIcon from "../assets/icons8-bootstrap-96.png";
import ReactIcon from "../assets/react.png";
import redux_icon from "../assets/icons8-redux-96.png";
import mysql from "../assets/logo-mysql-26296.png";
import mongodb from "../assets/mongoDB.png";
import NodeIcon from "../assets/icons8-nodejs-96.png";
import expressjs from "../assets/icons8-express-js-96.png";
import git from "../assets/icons8-git-96.png";
import "./Skills.css";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: HtmlIcon,
      classes: "html",
      title: "HTML5",
    },
    {
      id: 2,
      src: CssIcon,
      classes: "CssIcon",
      title: "CSS3",
    },
    {
      id: 3,
      src: javascriptIcon,
      classes: "javascriptIcon",
      title: "Javascript",
    },
    {
      id: 4,
      src: BootstrapIcon,
      classes: "BootstrapIcon",
      title: "Bootstrap",
    },
    {
      id: 5,
      src: ReactIcon,
      classes: "ReactIcon",
      title: "React Js",
    },
    {
      id: 6,
      src: redux_icon,
      classes: "redux_icon",
      title: "Redux",
    },
    {
      id: 7,
      src: NodeIcon,
      classes: "NodeIcon",
      title: "Node Js",
    },
    {
      id: 8,
      src: expressjs,
      classes: "expressjs",
      title: "Express",
    },
    {
      id: 9,
      src: mongodb,
      classes: "mongodb",
      title: "Mongodb",
    },
    {
      id: 10,
      src: mysql,
      classes: "mysql",
      title: "Mysql",
    },
    {
      id: 11,
      src: git,
      classes: "git",
      title: "Git",
    },
  ];
  return (
    <div className="skill_container" id="skill">
      <div className="skills">
        <h1 className="skill_title_color">Skills</h1>
      </div>
      <div className=" skill_icons ">
        {techs.map(({ id, src, title, classes }) => {
          return (
            <div className="icon-container" key={id}>
              <img
                src={src}
                className={`skill_img ${classes}`}
                alt="skills-icon"
              />
              <p>{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
