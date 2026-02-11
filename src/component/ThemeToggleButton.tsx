"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHomeTheme } from "@/context/HomeThemeContext";
import MinimalButton from "@/component/minimalButton";

const ThemeToggleButton = () => {
  const { toggleTheme, isNeoBrutalism } = useHomeTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledWrapper $isVisible={isVisible}>
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
