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
          <Link href="\projects\watercanProject">
            <ProjectCard
              projectName="Watercan Project"
              description="Inventory management system for water delivery."
              techStack={[
                "React",
                "React Native",
                "MongoDB",
                "AWS",
                "REST API",
              ]}
            />
          </Link>
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
    width: 95%;
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
    text-align: center;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: calc(100% - 80px);
    font-size: 28px;
    font-weight: 600;
    color: #000000;
    background: #ef4444;
    overflow-y: scroll;
    padding: 10px;
    gap: 30px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .content::-webkit-scrollbar {
    display: none;
  }

  .card:hover {
    translate: -6px;
  }

  .content > .project-card {
    flex: 1 1 48%;
  }
`;

export default Card;
