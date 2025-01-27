"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaDocker,
  FaAws,
  FaGit,
  FaGitlab,
  FaYarn,
  FaSlack,
  FaLinux,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiMongodb,
  SiVercel,
  SiNpm,
  SiRedux,
  SiJest,
  SiSass,
  SiMysql,
  SiBootstrap,
  SiExpress,
  SiVite,
  SiAtlassian,
  SiAndroid,
  SiUnity,
  SiSwagger,
  SiAmazons3,
  SiAmazonec2,
  SiGnometerminal,
  SiMongoose,
} from "react-icons/si";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  padding: 3rem;

  /* Make the icons wrap and scale down on small screens */
  @media (max-width: 768px) {
    gap: 1rem; /* Smaller gap on mobile */
    padding: 2rem; /* Reduced padding */
  }

  @media (max-width: 480px) {
    gap: 0.5rem; /* Even smaller gap for extra small screens */
    padding: 1rem; /* Reduced padding further */
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Needed for positioning the tooltip */

  .icon {
    transition: transform 0.3s;
    cursor: pointer;
    margin-bottom: 0.5rem; /* Space between icon and tooltip */

    /* Responsive icon size */
    @media (max-width: 768px) {
      font-size: 60px; /* Smaller icons on tablets and small screens */
    }

    @media (max-width: 480px) {
      font-size: 50px; /* Even smaller icons on mobile */
    }
  }

  .icon:hover {
    transform: scale(1.2);
  }

  .tooltip {
    position: absolute;
    bottom: 110%; /* Position above the icon */
    opacity: 0;
    font-size: 0.875rem; /* Adjust tooltip font size */
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    text-align: center;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(10px); /* Hide the tooltip initially */
    white-space: nowrap;
  }

  &:hover .tooltip {
    opacity: 1;
    transform: translateY(-10px); /* Show the tooltip on hover */
  }

  /* Tooltip responsiveness */
  @media (max-width: 768px) {
    .tooltip {
      font-size: 0.75rem; /* Smaller tooltip text on mobile */
      bottom: 120%; /* Adjust position of tooltip on smaller screens */
    }
  }
`;

const iconData = [
  { Component: FaReact, key: "react" },
  { Component: SiAndroid, key: "Android" },
  { Component: SiNextdotjs, key: "nextjs" },
  { Component: FaNodeJs, key: "nodejs" },
  { Component: FaJs, key: "javascript" },
  { Component: SiTypescript, key: "typescript" },
  { Component: FaHtml5, key: "html5" },
  { Component: FaCss3Alt, key: "css3" },
  { Component: SiAtlassian, key: "Atlassian" },
  { Component: SiTailwindcss, key: "tailwind" },
  { Component: FaGitAlt, key: "git" },
  { Component: FaPython, key: "python" },
  { Component: SiGraphql, key: "graphql" },
  { Component: FaDocker, key: "docker" },
  { Component: SiVercel, key: "vercel" },
  { Component: SiNpm, key: "npm" },
  { Component: SiRedux, key: "redux" },
  { Component: SiJest, key: "jest" },
  { Component: FaGitlab, key: "gitlab" },
  { Component: SiSass, key: "sass" },
  { Component: FaGit, key: "git-fa" },
  { Component: FaJava, key: "java" },
  { Component: FaYarn, key: "yarn" },
  { Component: FaSlack, key: "slack" },
  { Component: FaLinux, key: "linux" },
  { Component: FaFigma, key: "figma" },
  { Component: SiMysql, key: "mysql" },
  { Component: SiBootstrap, key: "bootstrap" },
  { Component: SiExpress, key: "express" },
  { Component: SiVite, key: "vite" },
  { Component: FaAws, key: "aws-fa" },
  { Component: SiUnity, key: "Unity" },
  { Component: SiMongodb, key: "mongodb" },
  { Component: SiSwagger, key: "Swagger" },
  { Component: SiAmazons3, key: "Amazons3" },
  { Component: SiAmazonec2, key: "Amazonec2" },
  { Component: SiGnometerminal, key: "Gnome terminal" },
  { Component: SiMongoose, key: "Mongoose" },
];

const AppIcons: React.FC = () => {
  return (
    <StyledWrapper>
      {iconData.map(({ Component, key }) => (
        <IconWrapper key={key}>
          <Component size={80} className="icon" aria-label={key} />
          <div className="tooltip">{key}</div>
        </IconWrapper>
      ))}
    </StyledWrapper>
  );
};

export default AppIcons;
