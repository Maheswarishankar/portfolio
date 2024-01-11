import React from "react";
import ProjectCard from "./ProjectCard";
import BlogApp from "../assets/BlogApp.png";
import LibrayMangement from "../assets/Library Managements.png";
import CurrencyConverter from "../assets/currenyconvertor.png";
import StudentTeacher from '../assets/student-teacher-managements.png'
import MealReceipe from '../assets/MealReceipe.png'
import ChatApp from '../assets/ChatApp.png'

const ProjectData = () => {
  let card = [
    {
      projectTitle: "BlogApp",      
      image: BlogApp,
      github: "https://github.com/Maheswarishankar/blog_app_client",
      githubServer: "https://github.com/Maheswarishankar/blog_app_server",
      netify: "https://mahi-blog-app.netlify.app/",
    },
    {
      projectTitle: "ChatApp",      
      github: "https://github.com/Maheswarishankar/chat_app_client",
      image: ChatApp,
      githubServer:
        "https://github.com/Maheswarishankar/ChatApp_server",
      netify: "https://mahi-chat-app.netlify.app/",
    },

    {
      projectTitle: "Libray Mangement",      
      github: "https://github.com/Maheswarishankar/library-managements-formik",
      image: LibrayMangement,
      githubServer:
        "https://github.com/Maheswarishankar/library-managements-formik",
      netify: "https://react-library-managements.netlify.app/",
    },
    {
      projectTitle: "Student Management",      
      image: StudentTeacher,
      github: "https://github.com/Maheswarishankar/react-student-tech-axios",
      githubServer:
        "https://github.com/Maheswarishankar/react-student-tech-axios",
      netify: "https://react-student-teacher.netlify.app/",
    },
    {
      projectTitle: "Currency Convertor",     
      image: CurrencyConverter,
      github: "https://github.com/Maheswarishankar/Currency-Converter-API",
      githubServer:
        "https://github.com/Maheswarishankar/Currency-Converter-API",
      netify: "https://currencyconverter-api.netlify.app/",
    },
    {
      projectTitle: "Meal Receipe API",     
      image: MealReceipe,
      github: "https://github.com/Maheswarishankar/Meals-Receipes-API",
      githubServer:
        "https://github.com/Maheswarishankar/Meals-Receipes-API",
      netify: "https://meal-receipe-api.netlify.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="project_title">
        <h1> My Projects</h1>
        <br />
        <br />
        <div className="projects-containers">
          {card.map((carddata, id) => {
            return <ProjectCard data={carddata} key={id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectData;
