"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHomeTheme } from "@/context/HomeThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme, isNeoBrutalism } = useHomeTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Show the button after 1.5 seconds with bounce animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    toggleTheme();
    
    // Reset click animation after it completes
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <StyledWrapper $isVisible={isVisible} $isClicked={isClicked}>
      <button className="Btn" onClick={handleClick}>
        <span className="icon">🎨</span>
        <span className="text">
          {isNeoBrutalism ? "Switch to Mono?" : "Back to Color?"}
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $isVisible: boolean; $isClicked: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) =>
    props.$isVisible ? "bounceInRight 0.8s ease-out" : "none"};

  .Btn {
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.4s;
    cursor: pointer;
    position: relative;
    background-color: rgb(31, 31, 31);
    overflow: hidden;
    transform: ${(props) => (props.$isClicked ? "scale(0.95)" : "scale(1)")};
    font-family: Montserrat, sans-serif;
  }

  .icon {
    font-size: 1.4em;
    transition-duration: 0.3s;
  }

  .text {
    position: absolute;
    color: rgb(255, 255, 255);
    width: 120px;
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    transition-duration: 0.4s;
  }

  .Btn:hover {
    width: 160px;
    transition-duration: 0.4s;
    border-radius: 30px;
  }

  .Btn:hover .text {
    opacity: 1;
    transition-duration: 0.4s;
  }

  .Btn:hover .icon {
    opacity: 0;
    transition-duration: 0.3s;
  }

  @keyframes bounceInRight {
    0% {
      transform: translateX(100px);
      opacity: 0;
    }
    60% {
      transform: translateX(-10px);
      opacity: 1;
    }
    80% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;

    .Btn:hover {
      width: 140px;
    }

    .text {
      width: 100px;
      font-size: 12px;
    }
  }
`;

export default ThemeToggleButton;
