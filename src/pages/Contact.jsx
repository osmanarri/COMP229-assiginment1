import React, { useState } from "react";
import styled from 'styled-components';

// Styled-components
const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto; 
  background-color: #f9f9f9; 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  display: flex;
  justify-content: space-between; 
  gap: 2rem; 
`;

const FormSection = styled.div`
  flex: 1; 
`;

const InfoSection = styled.div`
  flex: 0 0 300px;
  max-width: 300px;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 1.5rem; 
  color: #333;
  margin-bottom: 2rem; 
  text-align: center; 
`;

const InfoHeading = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem; 
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc; 
  border-radius: 8px; 
  font-size: 1rem;
  width: 100%; 
  box-sizing: border-box;
  transition: border-color 0.3s; 
  
  &:focus {
    border-color: #007bff; 
    outline: none; 
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ccc; 
  border-radius: 8px; 
  resize: vertical;
  font-size: 1rem;
  width: 100%; 
  box-sizing: border-box; 
  transition: border-color 0.3s; 
  
  &:focus {
    border-color: #007bff; 
    outline: none; 
  }
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #453e3e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: #544c4c;
    transform: translateY(-2px); 
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <Container>
      <FormSection>
        <Heading>Contact Me</Heading>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            placeholder="First Name" 
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <Input 
            type="text" 
            placeholder="Last Name" 
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
          <Input 
            type="text" 
            placeholder="Contact Number" 
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
          />
          <Input 
            type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Textarea 
            placeholder="Message" 
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <Button type="submit">Send Message</Button>
        </Form>
      </FormSection>
      <InfoSection>
        <InfoHeading>Contact Information</InfoHeading>
        <InfoText><strong>Phone:</strong> +1 (647) 603-8786</InfoText>
        <InfoText><strong>Email:</strong> osmanarri1984@gmail.com</InfoText>
        <InfoText><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/osman-tahir-851382197/" target="_blank" rel="noopener noreferrer">linkedin.com/in/osman-tahir</a></InfoText>
      </InfoSection>
    </Container>
  );
}

export default Contact;
