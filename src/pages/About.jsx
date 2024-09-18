// About.jsx
// Osman Tahir
// Student # 301075554
import React from "react";
import styled from 'styled-components';
import photo from '../assets/photo.jpg';
import resume from '../assets/resume.pdf';

const Container = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ResumeLink = styled.a`
  position: absolute;
  right: 2rem;
  top: 2rem;
  padding: 0.5rem 1rem;
  background-color: #453e3e;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #544c4c;
    transform: translateY(-2px);
  }
`;

function About() {
  return (
    <Container>
      <ResumeLink href={resume} download>Download my resume</ResumeLink>
      <Heading>About Me</Heading>
      <ProfileImage src={photo} alt="Osman" />
      <Description>
        Hello, I'm Osman, a dedicated software engineer with over 3 years of experience in the field. My journey has involved working with various technologies and building both personal and professional projects that showcase my skills and passion for coding.
        <br /><br />
        My expertise spans across full-stack development, where I have honed my skills in technologies such as React, Node.js, and MongoDB. I have a track record of delivering scalable and efficient solutions, whether it's creating dynamic web applications or solving complex problems with innovative approaches.
        <br /><br />
        I am committed to continuous learning and staying updated with the latest industry trends. I thrive in collaborative environments where I can contribute my knowledge and work towards achieving shared goals. My goal is to leverage my technical skills and experience to make a meaningful impact and drive success in every project I undertake.
        <br /><br />
        Feel free to browse through my portfolio and reach out if you’d like to discuss potential opportunities or collaborations.
      </Description>
    </Container>
  );
}

export default About;
