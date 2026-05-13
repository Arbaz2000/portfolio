"use client";
import React from "react";
import styled from "styled-components";
import { useHomeTheme } from "@/context/HomeThemeContext";

const Card = () => {
  const { theme } = useHomeTheme();

  return (
    <StyledWrapper $theme={theme}>
      <div className="card">
        <div className="head">What I'm working on</div>
        <div className="content">
          <h1>
            <strong>2D Metaverse Office Platform</strong>
          </h1>
          Building a virtual office space using MERN stack where users can interact through avatars, 
          chat, video calls, and customize their environment. Features include real-time movement, 
          messaging, and a drag-and-drop map builder.
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $theme: any }>`
  padding: 2rem;
  gap: 1rem;
  .card {
    font-family: Montserrat, sans-serif;
    width: auto;
    translate: -6px -6px;
    background: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#ff66a3' : '#ffffff')};
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 12px 12px 0 ${(props) => props.$theme.colors.shadow};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 25px;
    font-weight: 900;
    width: 100%;
    background: ${(props) => props.$theme.colors.cardHeader};
    padding: 5px 12px;
    color: ${(props) => props.$theme.colors.cardHeaderText};
    border-bottom: 3px solid ${(props) => props.$theme.colors.border};
  }

  .content {
    padding: 12px 15px;
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.$theme.colors.text};
  }

  ul {
    padding-left: 20px;
  }
`;

export default Card;
