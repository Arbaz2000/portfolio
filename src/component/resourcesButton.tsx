"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ResourcesButton = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="head">Resources & Tools</div>
        <div className="content">
          <p className="description">
            Discover my curated collection of useful links for developers, designers, and creators. 
            These tools and libraries can improve your productivity, boost your UI/UX game, and simplify your workflow.
          </p>
          <Link href="/resources" className="button">
            View Resources →
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
  margin: 0;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }

  .card {
    font-family: Montserrat, sans-serif;
    width: 70%;
    height: auto;
    background: #1ac2ff;
    border: 3px solid #000000;
    box-shadow: 12px 12px 0 #000000;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      width: 100%;
      box-shadow: 6px 6px 0 #000000;
    }
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

    @media (max-width: 768px) {
      font-size: 36px;
      padding: 5px 10px;
    }
  }

  .content {
    width: 100%;
    padding: 30px 20px;
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 20px 15px;
    }
  }

  .description {
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .button {
    display: inline-block;
    padding: 15px 30px;
    background: #4ade80;
    color: #000000;
    text-decoration: none;
    border: 3px solid #000000;
    box-shadow: 6px 6px 0 #000000;
    font-weight: 700;
    font-size: 18px;
    transition: all 0.3s ease;
    border-radius: 5px;

    @media (max-width: 768px) {
      padding: 12px 24px;
      font-size: 16px;
    }

    &:hover {
      translate: -3px -3px;
      box-shadow: 9px 9px 0 #000000;
      background: #22c55e;
    }

    &:active {
      translate: 0 0;
      box-shadow: 3px 3px 0 #000000;
    }
  }

  .card:hover {
    translate: -6px -6px;
    box-shadow: 18px 18px 0 #000000;

    @media (max-width: 768px) {
      translate: -3px -3px;
      box-shadow: 9px 9px 0 #000000;
    }
  }
`;

export default ResourcesButton; 