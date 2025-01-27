import React from "react";
import Card from "@/component/homeCard";
import CardDetails from "@/component/details";
import Git from "@/component/socials/gitSection";
import LinkedIn from "@/component/socials/linkedInSection";
import Instagram from "@/component/socials/instagramSection";
import styled from "styled-components";

export default function HomeSection() {
  return (
    <Container>
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
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  padding: 0 20px; // Horizontal padding
  flex-direction: row; // Default layout for larger screens
  gap: 10%;

  @media (max-width: 768px) {
    flex-direction: column; // Stack content vertically on smaller screens (mobile)
    padding: 0 10px; // Reduce horizontal padding for mobile
  }
`;

const Socials = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: row; // Always keep social icons in a row
  gap: 10px;

  // No changes needed for mobile here, as we want to keep it in a row
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
