"use client";
import React from "react";
import styled from "styled-components";
import { FaTasks } from "react-icons/fa";
const Flipcard = dynamic(() => import("@/component/filpcard"), { ssr: false });
import dynamic from "next/dynamic";
import Image from "next/image";

const links = [
  { label: "Mobile App", url: "https://github.com/your-repo/gettasker-mobile" },
  { label: "Admin Panel", url: "https://github.com/your-repo/gettasker-admin" },
  { label: "Backend", url: "https://github.com/your-repo/gettasker-backend" },
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
        <FaTasks size={50} color="white" />
      </div>
      <div className="project-name">
        <p>GetTasker</p>
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
      <strong>GetTasker</strong> is a comprehensive task management platform designed
      for urban companies to efficiently manage and track tasks. The platform consists
      of a React Native mobile application for task creators and executors, and an
      admin panel for centralized control and customization. The system enables users
      to create tasks, accept them, and track their progress either on-site or off-site.
      The backend is built with Swagger for API documentation and includes an admin
      panel for customizing the mobile application's user interface and functionality.
    </p>
    <h4>Tech Stack</h4>
    <ul>
      <li>
        <strong>Mobile App:</strong> React Native
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
        <strong>Admin Panel:</strong> React.js with TypeScript
      </li>
      <li>
        <strong>Database:</strong> MongoDB
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
        GetTasker streamlines task management through its integrated platform:
      </p>
      <ul>
        <li>
          <strong>Task Creation:</strong> Users can create tasks with detailed
          requirements and specifications.
        </li>
        <li>
          <strong>Task Acceptance:</strong> Task executors can view and accept
          available tasks.
        </li>
        <li>
          <strong>Location Tracking:</strong> Support for both on-site and off-site
          task execution with location verification.
        </li>
      </ul>
    </div>
    <div>
      <h4 className="mt-4">More Details</h4>
      <p>
        The platform features a robust admin panel that allows for complete
        customization of the mobile application's interface and functionality.
        The backend is built with Swagger for comprehensive API documentation,
        making it easy for developers to understand and integrate with the system.
        The mobile application uses Zustand for efficient state management,
        ensuring smooth performance and real-time updates.
      </p>
    </div>
    <h4 className="mt-4">Key Features</h4>
    <ul>
      <li>
        <strong>Task Management:</strong> Create, accept, and track tasks with
        detailed progress monitoring.
      </li>
      <li>
        <strong>Location Services:</strong> Support for both on-site and off-site
        task execution with location verification.
      </li>
      <li>
        <strong>Admin Control:</strong> Comprehensive admin panel for customizing
        the mobile application's interface and functionality.
      </li>
      <li>
        <strong>API Documentation:</strong> Swagger integration for clear and
        comprehensive API documentation.
      </li>
      <li>
        <strong>State Management:</strong> Efficient state management using
        Zustand for smooth performance.
      </li>
      <li>
        <strong>Real-time Updates:</strong> Instant updates for task status and
        progress tracking.
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
          src="/projectImages/gettasker/Screenshot_1747418518.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot_1747418524.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot_1747418528.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot_1747418544.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot_1747418564.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot_1747418584.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot_1747418596.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot_1747418601.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot_1747418605.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot_1747418609.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot 2025-05-16 233443.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot 2025-05-16 233459.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot 2025-05-16 233523.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot 2025-05-16 233536.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot 2025-05-16 233838.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot 2025-05-16 233850.png"
          alt="GetTasker App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/gettasker/Screenshot 2025-05-16 233920.png"
          alt="GetTasker App Screenshot"
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
      <strong>Note:</strong> This project was created for a client
    </p>
  </div>
);

// Styled Wrapper Component with variables for shared styles
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2e7d32;
  padding: 2rem;
  gap: 1rem;

  /* Color Variables */
  --primary-color: #1b5e20;
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
