"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useHomeTheme } from "@/context/HomeThemeContext";

const ResourcesButton = () => {
  const { theme } = useHomeTheme();

  return (
    <StyledWrapper $theme={theme}>
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

const StyledWrapper = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }

  .card {
    font-family: Montserrat, sans-serif;
    width: 70%;
    height: auto;
    background: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#1ac2ff' : '#ffffff')};
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 12px 12px 0 ${(props) => props.$theme.colors.shadow};
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;

    @media (max-width: 1024px) {
      width: 85%;
      box-shadow: 9px 9px 0 ${(props) => props.$theme.colors.shadow};
    }

    @media (max-width: 768px) {
      width: 100%;
      box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
    }

    @media (max-width: 480px) {
      box-shadow: 4px 4px 0 ${(props) => props.$theme.colors.shadow};
    }
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 50px;
    font-weight: 900;
    width: 100%;
    height: 80px;
    background: ${(props) => props.$theme.colors.cardHeader};
    padding: 5px 12px;
    color: ${(props) => props.$theme.colors.cardHeaderText};
    border-bottom: 3px solid ${(props) => props.$theme.colors.border};
    text-align: left;

    @media (max-width: 1024px) {
      font-size: 42px;
    }

    @media (max-width: 768px) {
      font-size: 36px;
      padding: 5px 10px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
      height: 65px;
    }
  }

  .content {
    width: 100%;
    padding: 30px 20px;
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.$theme.colors.text};
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 18px;
      padding: 25px 18px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 20px 15px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      padding: 15px 12px;
    }
  }

  .description {
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .button {
    display: inline-block;
    padding: 15px 30px;
    background: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#4ade80' : '#cccccc')};
    color: ${(props) => props.$theme.colors.text};
    text-decoration: none;
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
    font-weight: 700;
    font-size: 18px;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;

    @media (max-width: 768px) {
      padding: 12px 24px;
      font-size: 16px;
    }

    &:hover {
      translate: -3px -3px;
      box-shadow: 9px 9px 0 ${(props) => props.$theme.colors.shadow};
      background: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#22c55e' : '#999999')};
    }

    &:active {
      translate: 0 0;
      box-shadow: 3px 3px 0 ${(props) => props.$theme.colors.shadow};
    }
  }

  .card:hover {
    translate: -6px -6px;
    box-shadow: 18px 18px 0 ${(props) => props.$theme.colors.shadow};

    @media (max-width: 768px) {
      translate: -3px -3px;
      box-shadow: 9px 9px 0 ${(props) => props.$theme.colors.shadow};
    }
  }
`;

export default ResourcesButton; 