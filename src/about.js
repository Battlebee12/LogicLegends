import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

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

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;
`;

const TeamMember = styled.li`
  margin-bottom: 30px;
`;

const MemberName = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  color: #333;
`;

const MemberRole = styled.p`
  font-size: 16px;
  color: #666;
`;

function About() {
  return (
    <div>
      <Navbar />
      <AboutWrapper>
        <Title>About Us</Title>
        <Description>
          Eventify is a comprehensive event management platform designed to simplify the process of organizing and managing events of all types and sizes. Whether you're hosting a small gathering or a large-scale conference, Eventify provides the tools and features you need to plan, promote, and execute successful events.
        </Description>
        <TeamList>
          <TeamMember>
            <MemberName>Raghav</MemberName>
            <MemberRole>CEO</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberName>Sarab</MemberName>
            <MemberRole>CTO</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberName>Lluis</MemberName>
            <MemberRole>Lead Developer</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberName>Shreya</MemberName>
            <MemberRole>Lead Developer</MemberRole>
          </TeamMember>
        </TeamList>
      </AboutWrapper>
    </div>
  );
}

export default About;
