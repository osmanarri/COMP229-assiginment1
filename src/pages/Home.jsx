// Home.jsx
// Osman Tahir
// Student # 301075554
import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const MissionStatement = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
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

function Home() {
  return (
    <Container>
      <Heading>Welcome to My Portfolio</Heading>
      <Description>This is my personal portfolio website.</Description>
      <Heading>Mission</Heading>
      <MissionStatement>As a software engineer, my mission is to develop innovative solutions that drive progress and enhance user experiences, leveraging technology to solve real-world problems.</MissionStatement>
      <StyledLink to="/about">Learn more about me</StyledLink>
    </Container>
  );
}

export default Home;
