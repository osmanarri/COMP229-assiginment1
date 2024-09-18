// Footer.jsx
// Osman Tahir
// Student # 301075554

import React from "react";
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #453e3e;
  color: #f4f4f4;
  text-align: center;
  padding: 1rem 1.5rem;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #444;
  position: relative; 
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #c5b3b3;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} Osman</FooterText>
      <FooterText>
        <FooterLink href="https://www.linkedin.com/in/osman-tahir-851382197/" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink> |
        <FooterLink href="https://github.com/osmanarri" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
