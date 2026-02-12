"use client"
import React from "react";
import styled from "styled-components";

// Define types for the props
interface CardProps {
  links: { label: string; url: string }[]; // An array of objects with label and url
  coverText: string; // Text to display on the cover
}

const Card: React.FC<CardProps> = ({ links, coverText }) => {
  return (
    <StyledWrapper>
      <div className="book">
        {links.map((link, index) => (
          <strong key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </strong>
        ))}
        <div className="cover">
          <p>{coverText}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .book {
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    min-height: 250px;
    background-color: whitesmoke;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;
    padding: 1rem;
    gap: 1rem;

    @media (max-width: 768px) {
      min-height: 200px;
      padding: 0.875rem;
      gap: 0.75rem;
    }

    @media (max-width: 480px) {
      min-height: 180px;
      padding: 0.75rem;
      gap: 0.5rem;
    }
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: #faf9f6;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media (max-width: 768px) {
      padding: 0.75rem;
    }

    @media (max-width: 480px) {
      padding: 0.5rem;
    }
  }

  .book:hover .cover {
    transform: rotateY(-80deg);
  }

  /* Add touch support for mobile */
  @media (hover: none) and (pointer: coarse) {
    .book:active .cover {
      transform: rotateY(-80deg);
    }
  }

  p {
    font-size: 20px;
    font-weight: bolder;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  a {
    margin: 5px 0;
    text-decoration: none;
    color: #000;
    font-size: 16px;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all 0.2s ease;

    @media (max-width: 768px) {
      font-size: 14px;
      margin: 4px 0;
    }

    @media (max-width: 480px) {
      font-size: 13px;
      margin: 3px 0;
      padding: 6px 10px;
    }
  }

  a:hover {
    color: #0077cc;
    background-color: rgba(0, 119, 204, 0.1);
  }
`;

export default Card;
