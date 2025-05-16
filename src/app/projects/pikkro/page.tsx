"use client";
import React from "react";
import styled from "styled-components";
import { FaPenFancy } from "react-icons/fa";
const Flipcard = dynamic(() => import("@/component/filpcard"), { ssr: false });
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaPen, FaPenClip } from "react-icons/fa6";

const links = [
  { label: "Writer App", url: "https://github.com/your-repo/pikkro-writer" },
  { label: "Customer App", url: "https://github.com/your-repo/pikkro-customer" },
  { label: "Web Platform", url: "https://github.com/your-repo/pikkro-web" },
  { label: "Backend", url: "https://github.com/your-repo/pikkro-backend" },
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
        <FaPenFancy size={50} color="white" />
      </div>
      <div className="project-name">
        <p>Pikkro</p>
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
      <strong>Pikkro</strong> is a comprehensive content creation and delivery platform
      consisting of two mobile applications (Writer and Customer apps), a web platform,
      and a robust backend system. The platform connects content writers with customers,
      enabling seamless content creation, delivery, and management. The system is built
      with React Native for mobile apps and features extensive AWS integration for
      infrastructure and deployment. The backend is deployed on EC2 with Caddy for SSL
      management, while the web platform is deployed through AWS Amplify with CI/CD
      pipeline integration.
    </p>
    <h4>Tech Stack</h4>
    <ul>
      <li>
        <strong>Mobile Apps:</strong> React Native (Writer & Customer Apps)
      </li>
      <li>
        <strong>Web Platform:</strong> React.js with TypeScript
      </li>
      <li>
        <strong>Backend:</strong> Node.js, Express.js
      </li>
      <li>
        <strong>File Storage:</strong> Multer for video and image handling
      </li>
      <li>
        <strong>Maps Integration:</strong> Google Maps APIs
      </li>
      <li>
        <strong>Infrastructure:</strong> AWS (EC2, Amplify, Route 53, CI/CD)
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
        Pikkro streamlines content creation and delivery through its integrated platform:
      </p>
      <ul>
        <li>
          <strong>Writer App:</strong> Enables content creators to manage projects,
          upload content, and communicate with customers.
        </li>
        <li>
          <strong>Customer App:</strong> Allows clients to browse writers, place orders,
          and track content delivery.
        </li>
        <li>
          <strong>Web Platform:</strong> Provides comprehensive management interface
          for both writers and customers.
        </li>
      </ul>
    </div>
    <div>
      <h4 className="mt-4">More Details</h4>
      <p>
        The platform features a robust infrastructure built on AWS services. The backend
        is deployed on EC2 instances with Elastic IP and Caddy for SSL management.
        The web platform is deployed through AWS Amplify with CI/CD pipeline integration
        for automated deployments. Route 53 is used for domain management and routing.
        The system implements secure file handling with Multer for video and image
        uploads, and integrates Google Maps APIs for location-based services.
      </p>
    </div>
    <h4 className="mt-4">Key Features</h4>
    <ul>
      <li>
        <strong>AWS Infrastructure:</strong> Comprehensive cloud setup with EC2, Amplify,
        Route 53, and CI/CD pipeline integration.
      </li>
      <li>
        <strong>Secure Deployment:</strong> Free SSL implementation with Caddy on EC2
        instances.
      </li>
      <li>
        <strong>File Management:</strong> Multer integration for handling video and
        image uploads.
      </li>
      <li>
        <strong>Location Services:</strong> Google Maps API integration for location-based
        features.
      </li>
      <li>
        <strong>Cross-Platform:</strong> Mobile apps for both writers and customers,
        plus a web platform for comprehensive management.
      </li>
      <li>
        <strong>Automated Deployment:</strong> CI/CD pipeline for streamlined updates
        and deployments.
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
          src="/projectImages/pikkro/Screenshot 2025-05-16 232357.png"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/Screenshot 2025-05-16 232409.png"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/Screenshot 2025-05-16 232424.png"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/Screenshot 2025-05-16 232545.png"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/Screenshot 2025-05-16 232605.png"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/IMG-20250516-WA0020.jpg"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/IMG-20250516-WA0021.jpg"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/IMG-20250516-WA0022.jpg"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/IMG-20250516-WA0023.jpg"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/IMG-20250516-WA0025.jpg"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/IMG-20250516-WA0026.jpg"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/IMG-20250516-WA0027.jpg"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/IMG-20250516-WA0028.jpg"
          alt="Pikkro App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/pikkro/WhatsApp Image 2025-05-16 at 23.19.55_e8eed36d.jpg"
          alt="Pikkro App Screenshot"
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
