"use client";
import React from "react";
import Card from "@/component/homeCard";
import CardDetails from "@/component/details";
import Git from "@/component/socials/gitSection";
import LinkedIn from "@/component/socials/linkedInSection";
import Instagram from "@/component/socials/instagramSection";
import { useHomeTheme } from "@/context/HomeThemeContext";
import styled from "styled-components";

export default function HomeSection() {
  const { theme } = useHomeTheme();

  return (
    <Container $theme={theme}>
      <Socials>
        <Git />
        <LinkedIn />
        <Instagram />
      </Socials>

      <Content>
        <CardDetails />
        <Card />
      </Content>
    </Container>
  );
}

// Styled components for responsive layout
const Container = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  padding: 80px 20px 20px; // Top padding to account for socials
  flex-direction: row;
  gap: 10%;
  background: ${(props) => props.$theme.colors.background};
  transition: background 0.3s ease-in-out;

  @media (max-width: 1024px) {
    gap: 5%;
    padding: 70px 15px 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 10px 20px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 50px 8px 15px;
    gap: 20px;
  }
`;

const Socials = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    gap: 6px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row; // Default horizontal layout for content
  justify-content: center;
  align-items: center;
  gap: 10%; // Gap between CardDetails and Card

  @media (max-width: 768px) {
    flex-direction: column; // Stack content vertically on mobile
    gap: 20px; // Reduce gap between components on mobile
  }
`;
