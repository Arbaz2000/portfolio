"use client";
import React from "react";
import styled from "styled-components";
import { useHomeTheme } from "@/context/HomeThemeContext";

interface CardProps {
  projectName: string;
  description: React.ReactNode;
  techStack: string[];
}

const Card: React.FC<CardProps> = ({ projectName, description, techStack }) => {
  const { theme } = useHomeTheme();

  return (
    <StyledWrapper $theme={theme}>
      <div className="card">
        <div className="project-block-content">
          <p className="project-name">{projectName}</p>
          <p className="description">{description}</p>

          <div className="tech-stack">
            <p>Tech Stack:</p>
            <ul>
              {techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $theme: any }>`
  .card {
    width: auto;
    background: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#00ffa0' : '#ffffff')};
    padding: 1rem;
    border-radius: 1rem;
    border: 0.5vmin solid ${(props) => props.$theme.colors.border};
    box-shadow: 0.4rem 0.4rem ${(props) => props.$theme.colors.shadow};
    overflow: hidden;
    color: ${(props) => props.$theme.colors.text};
    transition: all 0.3s ease-in-out;
    height: 100%;

    @media (max-width: 768px) {
      padding: 0.875rem;
      box-shadow: 0.3rem 0.3rem ${(props) => props.$theme.colors.shadow};
      border: 3px solid ${(props) => props.$theme.colors.border};
    }

    @media (max-width: 480px) {
      padding: 0.75rem;
      box-shadow: 0.25rem 0.25rem ${(props) => props.$theme.colors.shadow};
    }
  }

  .project-block-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background: transparent;

    @media (max-width: 768px) {
      gap: 0.6rem;
    }

    @media (max-width: 480px) {
      gap: 0.5rem;
    }
  }

  .project-name {
    color: ${(props) => props.$theme.colors.text};
    font-size: 1.4rem;
    line-height: 1.3;
    font-weight: 700;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  .description {
    color: ${(props) => props.$theme.colors.text};
    font-size: 1rem;
    line-height: 1.5;
    opacity: 0.9;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.4;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  .tech-stack {
    font-size: 1rem;
    color: ${(props) => props.$theme.colors.text};
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }

    p {
      margin: 0;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      width: auto;

      @media (max-width: 768px) {
        gap: 0.4rem;
      }

      @media (max-width: 480px) {
        gap: 0.35rem;
      }
    }

    li {
      background-color: ${(props) => props.$theme.colors.border};
      color: #fff;
      padding: 0.25rem 0.5rem;
      border-radius: 1rem;
      font-weight: 600;

      @media (max-width: 768px) {
        padding: 0.2rem 0.4rem;
        font-size: 0.85rem;
      }

      @media (max-width: 480px) {
        padding: 0.15rem 0.35rem;
        font-size: 0.75rem;
      }
    }
  }
`;

export default Card;
