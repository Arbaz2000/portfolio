"use client";
import React from "react";
import styled from "styled-components";
import { FaWater } from "react-icons/fa"; // Water icon
import Flipcard from "@/component/filpcard";
import Image from "next/image";
import { SiAccuweather, SiLeaflet } from "react-icons/si";

const links = [
  { label: "Customer App", url: "https://github.com/your-repo/beauty-genie-customer" },
  {
    label: "Expert App",
    url: "https://github.com/your-repo/beauty-genie-expert",
  },
  { label: "Backend", url: "https://github.com/your-repo/beauty-genie-backend" },
];

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card-container">
        <CardComponent />
        <ProjectOverview />
      </div>

      <MoreDetails />
      <ImagesSection />
      <ClientNote />
    </StyledWrapper>
  );
};

// Card Component - For the project card at the top
const CardComponent = () => (
  <div className="card">
    <div className="card-header">
      <div className="project-icon">
        <FaWater size={50} color="white" />
      </div>
      <div className="project-name">
        <p>Beauty Genie</p>
      </div>
    </div>
    <div>
      <Flipcard links={links} coverText="View on GitHub" />
    </div>
  </div>
);

// Project Overview Section
const ProjectOverview = () => (
  <div className="project-overview">
    <h3>Project Overview</h3>
    <p>
      <strong>Beauty Genie</strong> is a comprehensive beauty and wellness service management platform
      consisting of two mobile applications and a robust backend system. The platform connects customers
      with beauty and wellness service providers, enabling seamless booking and service delivery. The
      system includes a customer-facing app for booking services, an expert app for service providers,
      and a custom-built admin panel for backend management. The platform integrates Google Maps APIs
      for location-based services and implements secure payment processing with OTP verification.
    </p>
    <h4>Tech Stack</h4>
    <ul>
      <li>
        <strong>Frontend (Mobile Apps):</strong> React Native CLI
      </li>
      <li>
        <strong>State Management:</strong> Zustand
      </li>
      <li>
        <strong>Backend:</strong> Node.js, Express.js
      </li>
      <li>
        <strong>API Documentation:</strong> Swagger
      </li>
      <li>
        <strong>Authentication:</strong> JWT
      </li>
      <li>
        <strong>Maps Integration:</strong> Google Maps APIs
      </li>
    </ul>
  </div>
);

// More Details Section
const MoreDetails = () => (
  <div className="more-details">
    <div>
      <h4>How It Works</h4>
      <p>
        <strong>Beauty Genie</strong> streamlines the beauty and wellness service industry through
        three integrated components:
      </p>
      <ul>
        <li>
          <strong>Customer App:</strong> Enables users to browse and book beauty and wellness services,
          view service providers, and manage appointments.
        </li>
        <li>
          <strong>Expert App:</strong> Allows service providers to receive booking notifications,
          manage appointments, and process payments using secure OTP verification.
        </li>
        <li>
          <strong>Admin Panel:</strong> Provides comprehensive backend management for service providers,
          customers, and business operations.
        </li>
      </ul>
    </div>
    <div>
      <h4 className="mt-4">More Details</h4>
      <p>
        The platform offers both on-site and off-site service options, with integrated location
        tracking and navigation features. The system implements real-time notifications for booking
        updates and service status changes. The backend is built with scalability in mind, featuring
        comprehensive API documentation through Swagger and secure authentication using JWT.
      </p>
    </div>
    <h4 className="mt-4">Key Features</h4>
    <ul>
      <li>
        <strong>Service Booking:</strong> Browse and book beauty and wellness services with real-time
        availability checking.
      </li>
      <li>
        <strong>Location Services:</strong> Integrated Google Maps for service provider navigation
        and location-based service discovery.
      </li>
      <li>
        <strong>Secure Payments:</strong> OTP-based payment verification system for secure
        transactions.
      </li>
      <li>
        <strong>Real-time Notifications:</strong> Instant updates for bookings, appointments,
        and service status changes.
      </li>
      <li>
        <strong>Admin Dashboard:</strong> Comprehensive backend management system for monitoring
        and controlling business operations.
      </li>
      <li>
        <strong>API Documentation:</strong> Well-documented REST APIs using Swagger for easy
        integration and maintenance.
      </li>
    </ul>
  </div>
);

// Images Section
const ImagesSection = () => (
  <div className="images-section">
    <h4>App Screenshots</h4>
    <div className="images">
      <div className="image-wrapper">
        <Image
          src="/projectImages/beautygenie/Screenshot_1747412480.png"
          alt="Beauty Genie App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/beautygenie/Screenshot_1747412485.png"
          alt="Beauty Genie App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/beautygenie/Screenshot_1747412488.png"
          alt="Beauty Genie App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/beautygenie/Screenshot_1747412497.png"
          alt="Beauty Genie App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/beautygenie/Screenshot_1747412504.png"
          alt="Beauty Genie App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/beautygenie/Screenshot_1747412515.png"
          alt="Beauty Genie App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/beautygenie/Screenshot_1747413125.png"
          alt="Beauty Genie App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/beautygenie/Screenshot_1747413143.png"
          alt="Beauty Genie App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/beautygenie/Screenshot_1747413146.png"
          alt="Beauty Genie App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/beautygenie/Screenshot_1747413160.png"
          alt="Beauty Genie App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/beautygenie/Screenshot_1747413169.png"
          alt="Beauty Genie App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/beautygenie/Screenshot_1747413172.png"
          alt="Beauty Genie App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
    </div>
  </div>
);

// Client Note Section
const ClientNote = () => (
  <div className="client-note">
    <p>
      <strong>Note:</strong> This project was created for a client.
    </p>
  </div>
);

// Styled Wrapper Component with variables for shared styles
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6b3ee5;
  padding: 2rem;
  gap: 1rem;

  /* Color Variables */
  --primary-color: #512faf;
  --secondary-color: #05060f;
  --text-color: white;
  --border-radius: 1rem;
  --shadow: 0.4rem 0.4rem #05060f;

  /* Card Styling */
  .card-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
    gap: 1rem;
  }

  .card {
    width: 250px;
    background: var(--primary-color);
    padding: 1rem;
    border-radius: var(--border-radius);
    border: 0.5vmin solid var(--secondary-color);
    box-shadow: var(--shadow);
    color: black;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .project-icon {
    background-color: var(--secondary-color);
    border-radius: 50%;
    padding: 0.5rem;
  }

  .project-name p {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text-color);
  }

  /* Common Section Styling */
  .project-overview,
  .more-details,
  .images-section,
  .repo-section,
  .client-note {
    width: 90%;
    background: #faf9f6;
    padding: 1rem;
    border-radius: var(--border-radius);
    border: 0.5vmin solid var(--secondary-color);
    box-shadow: var(--shadow);
    color: black;
  }

  .project-overview h3,
  .more-details h4,
  .images-section h4,
  .repo-section h4,
  .client-note p {
    font-size: 1.5rem;
    font-weight: bold; /* Ensures the headings are bold */
  }

  /* Images Section */
  .images-section .images {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
  }

  .images-section img {
    width: 100%; /* Allow images to scale with container width */
    max-width: 500px; /* Ensure images do not exceed this width */
    height: auto;
    max-height: 200px;
    border-radius: 0.5rem;
    box-shadow: 0.2rem 0.2rem var(--secondary-color);
    transition: transform 0.3s ease-in-out;
    transform-origin: center center;
    object-fit: cover; /* Ensure the image fills the container without distortion */
  }

  .images-section img:hover {
    transform: scale(1.5);
    transition: transform 0.3s ease-in-out;
    z-index: 10;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .images-section img {
      max-width: 100%; /* Ensure images are full width on smaller screens */
      max-height: 150px; /* Adjust max height for smaller screens */
    }
    .images-section img:hover {
      transform: scale(3.1);
    }
  }

  @media (max-width: 768px) {
    .card-container {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .card,
    .project-overview,
    .more-details,
    .images-section,
    .repo-section,
    .client-note {
      width: 100%;
      max-width: 350px;
    }
  }
`;

export default Card;
