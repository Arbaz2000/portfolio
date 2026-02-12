"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import ProjectCard from "@/component/projectCard";
import { motion } from "framer-motion";
import { useHomeTheme } from "@/context/HomeThemeContext";

const Card = () => {
  const projects = [
    {
      name: "Watercan Project",
      description: "Website, Android app & backend - Inventory management system for water delivery.",
      techStack: ["React", "React Native", "MongoDB", "AWS", "REST API"],
      link: "/projects/watercanProject"
    },
    {
      name: "Get Weed app",
      description: "Three mobile Apps - Delivery, Shop Owner & Customer App",
      techStack: ["React Native", "REST API", "Google Map API"],
      link: "/projects/getWeed"
    },
    {
      name: "Pikkro",
      description: "Content creation and delivery platform",
      techStack: ["React Native", "Node.js", "Express.js", "AWS"],
      link: "/projects/pikkro"
    },
    {
      name: "GetTasker",
      description: "Task management platform",
      techStack: ["React Native", "Node.js", "Express.js", "MongoDB"],
      link: "/projects/gettasker"
    },
    {
      name: "Hirangana.in",
      description: "Admin panel & E-Commerce site - Inventory management system",
      techStack: ["React", "AWS S3", "MySQL"],
      link: "/projects/hirangana"
    },
    {
      name: "E-commerce",
      description: "E-commerce Boiler Plate code",
      techStack: ["Next.js", "React", "SEO"],
      link: "/projects/ecommerceBoilerPlate"
    },
    {
      name: "ApnaDiscount",
      description: "Discount and membership management platform",
      techStack: ["React Native", "Firebase", "Redux"],
      link: "/projects/apnaDiscount"
    },
    {
      name: "Beauty Genie",
      description: "Beauty and wellness service management platform",
      techStack: ["React Native", "Node.js", "Express.js"],
      link: "/projects/beautyGenie"
    },
    {
      name: "Krikal Education",
      description: "Admission Portal for coaching institution with mock AI interviewer",
      techStack: ["React", "Express.js", "Gemini API"],
      link: "/projects/krikalEdu"
    },
    {
      name: "Qup",
      description: "Social media platform",
      techStack: ["Expo", "React-Native", "Axios"],
      link: "/projects/qup"
    },
    {
      name: "Tours & Travel",
      description: "Travel agency Promotion page",
      techStack: ["Next.js", "React", "SEO"],
      link: "/projects/toursAndTravel"
    },
    {
      name: "Tag Game",
      description: "Game of Tag made in Unity",
      techStack: ["Unity", "C#"],
      link: "/projects/tagGame"
    }
  ];

  const { theme } = useHomeTheme();

  return (
    <StyledWrapper $theme={theme}>
      <div className="main-card">
        <div className="head">What I did</div>
        
        <div className="content">
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
              <p>Freelance services, bug fixes, full-stack development.</p>
              <p>More projects on GitHub! 😎</p>
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
    font-size: 50px;
    font-weight: 900;
    width: 100%;
    height: 80px;
    background: ${(props) => props.$theme.colors.cardHeader};
    padding: 5px 20px;
    color: ${(props) => props.$theme.colors.text};
    border-bottom: 3px solid ${(props) => props.$theme.colors.border};
    text-align: left;
    display: flex;
    align-items: center;
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
    padding: 20px 0;
    
    p {
      font-size: 18px;
      font-weight: 600;
      color: ${(props) => props.$theme.colors.text};
      margin: 8px 0;
      transition: color 0.3s ease-in-out;
      
      &:last-child {
        font-weight: 700;
        font-size: 20px;
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

    .head {
      font-size: 42px;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    
    .main-card {
      box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
    }
    
    .head {
      font-size: 36px;
      padding: 10px 15px;
      height: 70px;
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

    .bottom-note p {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
    
    .main-card {
      box-shadow: 4px 4px 0 ${(props) => props.$theme.colors.shadow};
    }
    
    .head {
      font-size: 28px;
      padding: 8px 12px;
      height: 60px;
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
      padding: 15px;
      
      p {
        font-size: 14px;
        
        &:last-child {
          font-size: 16px;
        }
      }
    }
  }
`;

export default Card;
