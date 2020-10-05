import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProjectCard.css";

const ProjectCard = () => {
  const [project, setProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:4000/project").then((res) => {
      setProject(res.data);
      setIsLoaded((isLoaded) => !isLoaded);
    });
  }, []);

  return !isLoaded ? (
    <div>Loading...</div>
  ) : (
    <section className="ProjectCard">
      {project.map((project) => (
        <div className='ContainerCard'> 
          <img className='LogoProject' src={`Pictures/${project.logo}`} alt="Logo of the project" />
          <h1> {project.title} </h1>
          <p>{project.description}</p>
          
        </div>
      ))}
    </section>
  );
};

export default ProjectCard;
