// Projects.jsx
// Osman Tahir
// Student # 301075554

import React from "react";
import styled from 'styled-components';
// Import images
import projectImage1 from '../assets/jobs.png';
import project2Image from '../assets/movies.png'; 
import project3Image from '../assets/food.png'; 

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column; 
  align-items: center; 
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem; 
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  width: 100%;
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: calc(20% - 1.5rem); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Job Hunt App",
      description: "The job board project is a web application that allows employers to post job listings and job seekers to search and apply for jobs. The project leverages the MERN stack, which includes MongoDB, Express.js, React, and Node.js, to provide a full-stack solution with a modern and responsive user interface, robust backend services, and efficient data management.",
      image: projectImage1
    },
    {
      id: 2,
      title: "Movie Management App",
      description: "movie management application designed to help users effortlessly organize and manage their movie collections. Built with the ASP.NET stack, this application provides a robust platform for adding, updating, and tracking movies in a user-friendly environment.",
      image: project2Image,
    },
    {
      id: 3,
      title: "Food Delivery App",
      description: "A streamlined food delivery platform using MongoDB, Express.js, React, and Node.js. Users can browse restaurants, view menus, and place orders for delivery or pickup. Features include user authentication, real-time tracking, and secure payments, with a responsive design for all devices. Restaurant owners can manage menus and track orders efficiently.",
      image: project3Image,
    },
  ];

  return (
    <Container>
      <Heading>My Projects</Heading>
      <ProjectGrid>
        {projects.map(project => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Container>
  );
}

export default Projects;
