import React from "react";
import styled from "styled-components";

// Define types for props
interface CardProps {
  projectName: string;
  description: string;
  techStack: string[];
}

const Card: React.FC<CardProps> = ({ projectName, description, techStack }) => {
  return (
    <StyledWrapper>
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

const StyledWrapper = styled.div`
  /*Neo Brutalism project card*/
  .card {
    width: 240px;
    background: #00ffa0;
    padding: 1rem;
    border-radius: 1rem;
    border: 0.5vmin solid #05060f;
    box-shadow: 0.4rem 0.4rem #05060f;
    overflow: hidden;
    color: black;
  }

  /*Card content*/
  .project-block-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background: #00ffa0;
  }

  .project-name {
    color: #05060f;
    font-size: 1.4rem;
    line-height: 1.3;
    font-weight: 700;
    margin: 0;
  }

  .description {
    color: #05060f;
    font-size: 1rem;
    line-height: 1.5;
    opacity: 0.9;
  }

  .tech-stack {
    font-size: 1rem;
    color: #05060f;
    font-weight: 700;

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
    }

    li {
      background-color: #05060f;
      color: #fff;
      padding: 0.25rem 0.5rem;
      border-radius: 1rem;
      font-weight: 600;
    }
  }
`;

export default Card;
