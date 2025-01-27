"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link"; // Import Link from next/link
import ProjectCard from "@/component/projectCard";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="head">What I did</div>

        <div className="content">
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
          <Link href="/projects/krikalEdu">
            <ProjectCard
              projectName="Krikal Education"
              description="Admission Portal for coaching institution with mock AI interviewer"
              techStack={["React", "Express.js", "Gemini API"]}
            />
          </Link>

          <Link href="/projects/tagGame">
            <ProjectCard
              projectName="Tag Game"
              description="Game of Tag made in Unity"
              techStack={["Unity", "C#"]}
            />
          </Link>
          <Link href="/projects/toursAndTravel">
            <ProjectCard
              projectName="Tours & Travel"
              description="Travel agency Promotion page"
              techStack={["Next.js", "React", "SEO"]}
            />
          </Link>
          <Link href="/projects/qup">
            <ProjectCard
              projectName="Qup"
              description="Social media"
              techStack={["Expo", "React-Native", "Axios"]}
            />
          </Link>
          <Link href="/projects/ecommerceBoilerPlate">
            <ProjectCard
              projectName="E-commerce"
              description="E-commerce Boiler Plate code"
              techStack={["Next.js", "React", "SEO"]}
            />
          </Link>
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
  height: 100vh;
  margin: 0;
  transition: all 0.3s ease;

  .card {
    font-family: Montserrat, sans-serif;
    width: 90%;
    height: 85%;
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
    height: calc(100% - 80px);
    font-size: 28px;
    font-weight: 600;
    color: #000000;
    background: #ef4444;
    overflow-y: auto; /* Changed from scroll to auto */
    padding: 30px;
    gap: 30px; /* Adjust as needed */
    column-gap: 10px; /* Column gap adjustment */
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .content::-webkit-scrollbar {
    display: none; /* Keep this if you want to hide the scrollbar */
  }

  .card:hover {
    transform: translateY(-6px); /* Smooth hover effect */
  }

  .content > .project-card {
    flex: 1 1 48%;
  }

  .bottom-right {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 20px;
    font-weight: 700;
    color: black;
    text-align: right;
    margin-top: 10%;
  }

  /* Media queries for responsiveness */
  @media (max-width: 768px) {
    .content > .project-card {
      flex: 1 1 100%; /* Stack cards on smaller screens */
    }
  }
`;

export default Card;
