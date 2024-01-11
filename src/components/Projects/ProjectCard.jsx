import React from "react";
import "./Project.css";
import gitImage from "../assets/github.png";

const ProjectCard = ({ data,}) => {
  return (
    <div className="project-container project-card">
      <h3 className="project-title">{data.projectTitle}</h3>
      <img
        src={data.image}
        alt="Project_Image"
        loading="lazy"
        className="project-pic"
      />

      <div className="project_links">
        <a
          href={data.netify}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Live
        </a>

        <a
          href={data.github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Source Code
          <img src={gitImage} alt="github" />
        </a>

        {/* <a
          href={data.githubServer}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Back
          <img src={gitImage} alt="github" />
        </a> */}
      </div>
    </div>
  );
};

export default ProjectCard;
