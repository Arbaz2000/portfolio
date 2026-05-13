"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { useHomeTheme } from "@/context/HomeThemeContext";

const Card = () => {
  const { theme } = useHomeTheme();
  const imageSrc = theme.name === 'monochrome' 
    ? '/Gemini_Generated_Image_ipk4iaipk4iaipk4.png' 
    : '/me.png';
  
  const isMonochromeImage = theme.name === 'monochrome';

  return (
    <StyledWrapper $theme={theme} $smallerImage={isMonochromeImage}>
      <div className="card">
        <div className="head">This is ME!</div>
        <div className="content">
          <div className="image-container">
            <Image
              key={imageSrc}
              src={imageSrc}
              alt="Profile image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $theme: any; $smallerImage?: boolean }>`
  .card {
    font-family: Montserrat, sans-serif;
    width: 70vh;
    height: 70vh;
    background: ${(props) => props.$theme.colors.primary};
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 12px 12px 0 ${(props) => props.$theme.colors.shadow};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    position: relative;
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 2vw;
    font-weight: 900;
    width: 100%;
    height: 10%;
    background: ${(props) => props.$theme.colors.cardHeader};
    padding: 2% 3%;
    color: ${(props) => props.$theme.colors.cardHeaderText};
    border-bottom: 3px solid ${(props) => props.$theme.colors.border};
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  .content {
    padding: 2% 3%;
    font-size: 3vw;
    font-weight: 600;
    position: relative;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: ${(props) => (props.$smallerImage ? '65vh' : '65vh')};
    overflow: hidden;
    ${(props) =>
      props.$smallerImage &&
      `
      display: flex;
      align-items: center;
      justify-content: center;
      & img {
        object-fit: contain !important;
      }
    `}
  }

  .card:hover {
    transform: translateY(-6px);
  }

  // Mobile responsiveness
  @media (max-width: 768px) {
    .card {
      width: 90vw; // Make the card take up 90% of viewport width on mobile
      height: auto; // Adjust height for mobile
    }

    .head {
      font-size: 5vw; // Reduce font size on smaller screens
    }

    .content {
      font-size: 4vw; // Adjust content font size
    }

    .image-container {
      height: 40vh; // Adjust image container height for mobile
    }
  }
`;

export default Card;
