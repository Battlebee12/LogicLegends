import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const Message = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

function Contact() {
  return (
    <ContactWrapper>
      <Title>Contact Us</Title>
      <Message>
        Sorry, we don't have time to contact you. If you have any inquiries, please stop using our website.
      </Message>
    </ContactWrapper>
  );
}

export default Contact;
