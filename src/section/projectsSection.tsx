"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import ProjectCard from "@/component/projectCard";
import { motion } from "framer-motion"; // Import motion for animation

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="head">What I did</div>

        <div className="content">
          {/* Drag effect with bounce */}
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 0.9,
              y: -10, // Slight upward movement when hovering
              transition: { type: "spring", stiffness: 200, damping: 20 }, // Bounce effect
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 400, damping: 10 }, // Bounce effect on click
            }}
            drag // Allow dragging
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} // Keep it within the constraints
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Link href="/projects/watercanProject">
              <ProjectCard
                projectName="Watercan Project"
                description={
                  <>
                    <strong>Website, Android app & backend</strong>
                    <br />
                    Inventory management system for water delivery.
                  </>
                }
                techStack={[
                  "React",
                  "React Native",
                  "MongoDB",
                  "AWS",
                  "REST API",
                ]}
              />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 0.9,
              y: -10,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Link href="/projects/getWeed">
              <ProjectCard
                projectName="Get Weed app"
                description={
                  <>
                    <strong>Three mobile Apps</strong>
                    <br />
                    Delivery, Shop Owner & Customer App
                  </>
                }
                techStack={["React Native", "REST API", "Google Map API"]}
              />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 0.9,
              y: -10,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Link href="/projects/hirangana">
              <ProjectCard
                projectName="Hirangana.in"
                description={
                  <>
                    <strong>Admin panel & E-Commerce site</strong>
                    <br />
                    Inventory management system
                  </>
                }
                techStack={["React", "AWS S3", "MySQL"]}
              />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 0.9,
              y: -10,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Link href="/projects/krikalEdu">
              <ProjectCard
                projectName="Krikal Education"
                description="Admission Portal for coaching institution with mock AI interviewer"
                techStack={["React", "Express.js", "Gemini API"]}
              />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 0.9,
              y: -10,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Link href="/projects/tagGame">
              <ProjectCard
                projectName="Tag Game"
                description="Game of Tag made in Unity"
                techStack={["Unity", "C#"]}
              />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 0.9,
              y: -10,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Link href="/projects/toursAndTravel">
              <ProjectCard
                projectName="Tours & Travel"
                description="Travel agency Promotion page"
                techStack={["Next.js", "React", "SEO"]}
              />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 0.9,
              y: -10,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Link href="/projects/qup">
              <ProjectCard
                projectName="Qup"
                description="Social media"
                techStack={["Expo", "React-Native", "Axios"]}
              />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 0.9,
              y: -10,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Link href="/projects/ecommerceBoilerPlate">
              <ProjectCard
                projectName="E-commerce"
                description="E-commerce Boiler Plate code"
                techStack={["Next.js", "React", "SEO"]}
              />
            </Link>
          </motion.div>

          <div className="bottom-right">
            I have extensive experience providing freelance services,
            <br />
            including bug fixes, as well as frontend and backend development
            solutions.😎👍
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 5%;
  margin: 0;
  transition: all 0.3s ease;

  .card {
    font-family: Montserrat, sans-serif;
    width: 90%;
    height: auto;
    border: 3px solid #000000;
    box-shadow: 12px 12px 0 #000000;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 50px;
    font-weight: 900;
    width: 100%;
    height: 80px;
    background: #ffffff;
    padding: 5px 12px;
    color: #000000;
    border-bottom: 3px solid #000000;
    text-align: left;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: flex-start;
    width: 100%;
    height: auto;
    font-size: 28px;
    font-weight: 600;
    color: #000000;
    background: #ef4444;
    overflow-y: auto;
    padding: 30px;
    gap: 30px;
  }

  .content::-webkit-scrollbar {
    display: none;
  }

  .card:hover {
    transform: translateY(-6px);
  }

  .content > .project-card {
    flex: 1 1 48%;
  }

  .bottom-right {
    bottom: 20px;
    font-size: 20px;
    font-weight: 700;
    color: black;
    text-align: center;
    margin-top: 10%;
  }

  @media (max-width: 1024px) {
    .content > .project-card {
      flex: 1 1 48%;
    }
  }

  @media (max-width: 768px) {
    .content > .project-card {
      flex: 1 1 100%;
    }

    .head {
      font-size: 30px;
      padding: 10px;
    }

    .content {
      padding: 20px;
      gap: 20px;
    }

    .bottom-right {
      font-size: 16px;
      bottom: 15px;
      right: 10px;
    }
  }

  @media (max-width: 480px) {
    .head {
      font-size: 24px;
    }

    .content {
      padding: 15px;
    }

    .bottom-right {
      font-size: 14px;
      bottom: 10px;
      right: 5px;
    }
  }
`;

export default Card;
