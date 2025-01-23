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

  /* Responsiveness */
  @media (max-width: 768px) {
    .icon {
      size: 60px;
    }
  }

  @media (max-width: 480px) {
    .icon {
      size: 50px;
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
