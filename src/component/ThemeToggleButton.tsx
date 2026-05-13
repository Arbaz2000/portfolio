"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHomeTheme } from "@/context/HomeThemeContext";
import MinimalButton from "@/component/minimalButton";

const ThemeToggleButton = () => {
  const { toggleTheme, isNeoBrutalism } = useHomeTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledWrapper $isVisible={isVisible && !isScrolled}>
      <MinimalButton
        text={isNeoBrutalism ? "Switch to Mono?" : "Back to Color?"}
        onClick={toggleTheme}
        type="C"
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) => (props.$isVisible ? "translateX(0)" : "translateX(20px)")};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};
  animation: ${(props) =>
    props.$isVisible ? "bounceInRight 0.8s ease-out" : "none"};

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
  }
`;

export default ThemeToggleButton;
