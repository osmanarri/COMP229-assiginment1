// Services.jsx
// Osman Tahir
// Student # 301075554

import React from "react";
import styled from 'styled-components';
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const Container = styled.div`
  padding: 2rem;
  max-width: 800px; 
  margin: 0 auto; 
  background-color: #f4f4f4; 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 2.5rem; 
  color: #333; 
  margin-bottom: 2rem; 
  text-align: center; /
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 1.5rem; 
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  transition: background-color 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  gap: 1rem; 
  
  &:hover {
    background-color: #e0e0e0;
    transform: translateY(-2px); 
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #333; 
`;

function Services() {
  return (
    <Container>
      <Heading>Services I Offer</Heading>
      <ServiceList>
        <ServiceItem>
          <Icon><CgWebsite/></Icon>
          Web Development          
        </ServiceItem>
        <ServiceItem>
          <Icon><FaMobileAlt/></Icon>
          Mobile App Development         
        </ServiceItem>
        <ServiceItem>
          <Icon><MdDesignServices/></Icon>
          UI/UX Design         
        </ServiceItem>
      </ServiceList>
    </Container>
  );
}

export default Services;
