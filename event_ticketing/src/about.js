import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Nav } from './css/Navbar';

const AboutWrapper = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

function About() {
  return (
    <div>
      <Nav/>
      <AboutWrapper>
        <Title>About Eventify</Title>
        <Description>
          Eventify is a comprehensive event management platform designed to streamline the process of organizing, promoting, and managing events of all types and sizes. Whether you're planning a conference, concert, workshop, or any other event, Eventify provides the tools and features you need to make it a success.
        </Description>
        <Description>
          With Eventify, event organizers can easily create and customize event pages, manage ticket sales, track attendee information, and communicate with participants. Our user-friendly interface and intuitive dashboard make it simple to oversee every aspect of your event from start to finish.
        </Description>
        <Description>
          Key features of Eventify include:
          <ul>
            <li>Customizable Event Pages: Create visually stunning event pages with customizable themes and branding options.</li>
            <li>Online Ticket Sales: Sell tickets directly through the platform, with support for multiple ticket types and pricing tiers.</li>
            <li>Attendee Management: Easily manage attendee information, track ticket sales, and send personalized communications.</li>
            <li>Promotion Tools: Utilize built-in marketing tools to promote your event across social media channels and reach a wider audience.</li>
            <li>Real-time Analytics: Gain insights into event performance with real-time analytics and reporting.</li>
          </ul>
        </Description>
        <Description>
          Whether you're a seasoned event organizer or planning your first event, Eventify empowers you to create memorable experiences for your attendees while saving time and effort in the planning process.
        </Description>
      </AboutWrapper>
    </div>
  );
}

export default About;
