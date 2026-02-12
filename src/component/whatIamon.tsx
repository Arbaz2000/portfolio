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
  
  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }

  .card {
    font-family: Montserrat, sans-serif;
    width: auto;
    translate: -6px -6px;
    background: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#ff66a3' : '#ffffff')};
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 12px 12px 0 ${(props) => props.$theme.colors.shadow};
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px) {
      box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
      translate: -3px -3px;
    }

    @media (max-width: 480px) {
      box-shadow: 4px 4px 0 ${(props) => props.$theme.colors.shadow};
      translate: -2px -2px;
    }
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 25px;
    font-weight: 900;
    width: 100%;
    background: ${(props) => props.$theme.colors.cardHeader};
    padding: 5px 12px;
    color: ${(props) => props.$theme.colors.text};
    border-bottom: 3px solid ${(props) => props.$theme.colors.border};

    @media (max-width: 768px) {
      font-size: 20px;
      padding: 8px 10px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      padding: 6px 8px;
    }
  }

  .content {
    padding: 12px 15px;
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.$theme.colors.text};

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 10px 12px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      padding: 8px 10px;
    }
  }

  ul {
    padding-left: 20px;

    @media (max-width: 480px) {
      padding-left: 15px;
    }
  }
`;

export default Card;
