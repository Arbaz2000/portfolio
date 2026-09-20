"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import ProjectCard from "@/component/projectCard";
import SkillsHeatMap from "@/component/SkillsHeatMap";
import { motion } from "framer-motion";
import { useHomeTheme } from "@/context/HomeThemeContext";

import { projects } from "@/constants/projects";

const Card = () => {
  const { theme } = useHomeTheme();

  return (
    <StyledWrapper $theme={theme}>
      <div className="main-card">
        <div className="head">
          <div className="head-info">
            <span className="head-title">What I did</span>
            <p className="head-desc">
              These are selected client & freelance projects. Company enterprise work is strictly protected under <strong>NDA</strong>. Many more repositories and experiments are available on my GitHub!
            </p>
          </div>

          <a
            href="https://github.com/Arbaz2000"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link-btn"
          >
            <svg
              className="github-icon"
              viewBox="0 0 496 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
            <span>GitHub Profile</span>
          </a>
        </div>

        <div className="content">
          {/* <SkillsHeatMap /> */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="project-wrapper"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={project.link}>
                  <ProjectCard
                    projectName={project.name}
                    description={project.description}
                    techStack={project.techStack}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="bottom-note">
            <p className="nda-note">
              <span>🔒 Note:</span> Products shown above were crafted for individual clients and open-source. Full-time company works are signed under non-disclosure agreements (NDA).
            </p>
            <p>Freelance services, bug fixes, full-stack development.</p>
            <p className="github-cta">
              Looking for more projects? Check out{" "}
              <a
                href="https://github.com/Arbaz2000"
                target="_blank"
                rel="noopener noreferrer"
              >
                my GitHub (@Arbaz2000) ↗
              </a>
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 5%;
  margin: 0;
  transition: all 0.3s ease;

  .main-card {
    font-family: Montserrat, sans-serif;
    width: 95%;
    max-width: 1400px;
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 12px 12px 0 ${(props) => props.$theme.colors.shadow};
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  .head {
    font-family: Montserrat, sans-serif;
    width: 100%;
    min-height: 85px;
    background: ${(props) => props.$theme.colors.cardHeader};
    padding: 16px 24px;
    color: ${(props) => props.$theme.colors.cardHeaderText};
    border-bottom: 3px solid ${(props) => props.$theme.colors.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .head-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
    min-width: 260px;
  }

  .head-title {
    font-size: 42px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.5px;
  }

  .head-desc {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.85;
    line-height: 1.4;
    max-width: 780px;

    strong {
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
  }

  .github-link-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 18px;
    background: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#FFE600' : '#ffffff')};
    color: #000000;
    border: 2.5px solid ${(props) => props.$theme.colors.border};
    box-shadow: 4px 4px 0 ${(props) => props.$theme.colors.shadow};
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;

    .github-icon {
      width: 18px;
      height: 18px;
    }

    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
      background: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#00f0ff' : '#eaeaea')};
    }

    &:active {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 ${(props) => props.$theme.colors.shadow};
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#ef4444' : '#e5e5e5')};
    padding: 30px;
    gap: 30px;
    transition: background 0.3s ease-in-out;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    padding: 25px;
  }

  .project-wrapper {
    transition: all 0.3s ease;
  }

  .bottom-note {
    text-align: center;
    padding: 24px 20px;
    background: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#ffffff' : '#f8f8f8')};
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 5px 5px 0 ${(props) => props.$theme.colors.shadow};
    margin: 10px 25px 0 25px;
    
    p {
      font-size: 16px;
      font-weight: 600;
      color: ${(props) => props.$theme.colors.text};
      margin: 8px 0;
      transition: color 0.3s ease-in-out;
    }

    .nda-note {
      font-size: 15px;
      font-weight: 600;
      color: #333333;
      max-width: 750px;
      margin: 0 auto 10px auto;
      line-height: 1.5;

      span {
        font-weight: 800;
        color: #000000;
      }
    }

    .github-cta {
      font-weight: 800;
      font-size: 18px;
      margin-top: 10px;

      a {
        color: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#d90429' : '#000000')};
        text-decoration: underline;
        text-decoration-thickness: 2.5px;
        transition: color 0.2s ease;

        &:hover {
          color: #2563eb;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .main-card {
      width: 98%;
    }
    
    .projects-grid {
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    }
  }

  @media (max-width: 1024px) {
    padding: 3% 3%;
    
    .main-card {
      box-shadow: 9px 9px 0 ${(props) => props.$theme.colors.shadow};
    }
    
    .projects-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 15px;
      padding: 20px;
    }
    
    .content {
      padding: 20px;
      gap: 20px;
    }

    .head-title {
      font-size: 36px;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    
    .main-card {
      box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
    }
    
    .head {
      padding: 16px;
      gap: 15px;
    }

    .head-title {
      font-size: 32px;
    }

    .head-desc {
      font-size: 13px;
    }

    .content {
      padding: 15px;
      gap: 15px;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 15px;
      padding: 15px;
    }

    .bottom-note {
      margin: 10px 10px 0 10px;
      padding: 18px 14px;

      p {
        font-size: 14px;
      }

      .github-cta {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
    
    .main-card {
      box-shadow: 4px 4px 0 ${(props) => props.$theme.colors.shadow};
    }
    
    .head {
      padding: 12px;
    }

    .head-title {
      font-size: 26px;
    }

    .head-desc {
      font-size: 12px;
    }

    .github-link-btn {
      width: 100%;
      justify-content: center;
    }

    .content {
      padding: 10px;
      gap: 10px;
    }

    .projects-grid {
      padding: 10px;
      gap: 10px;
    }

    .bottom-note {
      margin: 10px 5px 0 5px;
      padding: 14px 10px;
      
      p {
        font-size: 13px;
      }

      .github-cta {
        font-size: 14px;
      }
    }
  }
`;

export default Card;
