"use client";

import React from "react";
import styled from "styled-components";
import Iconrack from "@/component/appIcons";
import { useHomeTheme } from "@/context/HomeThemeContext";

const Card = () => {
  const { theme } = useHomeTheme();

  return (
    <StyledWrapper $theme={theme}>
      <div className="card">
        <div className="head">What I know</div>
        <div className="content">
          <Iconrack /> {/* Displaying the icon components here */}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
    width: 90%;
    height: auto;
    background: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#eb7711' : '#ffffff')};
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 12px 12px 0 ${(props) => props.$theme.colors.shadow};
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;

    @media (max-width: 1024px) {
      width: 95%;
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
    color: ${(props) => props.$theme.colors.text};
    border-bottom: 3px solid ${(props) => props.$theme.colors.border};
    text-align: left; /* Ensure the heading is aligned left */

    /* Responsive font size */
    @media (max-width: 768px) {
      font-size: 36px; /* Smaller font size for smaller screens */
      padding: 5px 10px; /* Reduced padding for mobile */
    }
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100% - 80px);
    font-size: 28px;
    font-weight: 600;
    color: ${(props) => props.$theme.colors.text};

    /* Responsive font size */
    @media (max-width: 768px) {
      font-size: 20px; /* Smaller font size for mobile */
      padding: 10px; /* Add padding on mobile */
    }
  }

  .card:hover {
    translate: -6px;
  }
`;

export default Card;
