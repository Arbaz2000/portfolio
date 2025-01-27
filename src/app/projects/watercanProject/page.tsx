"use client";
import React from "react";
import styled from "styled-components";
import { FaWater } from "react-icons/fa"; // Water icon
import Flipcard from "@/component/filpcard";
import Image from "next/image";

const links = [
  { label: "Web", url: "https://github.com/harshendraup/WaterCan-web" },
  { label: "App", url: "https://github.com/kajal-sharma007/WaterCanApp" },
  { label: "Backend", url: "https://github.com/Arbaz2000/WaterCan-Backend" },
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
        <p>WaterCan</p>
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
      <strong>WaterCan</strong> is a comprehensive inventory management system
      for delivering water. It includes both a web app for plant owners and a
      mobile app for delivery drivers. The system helps manage deliveries, track
      inventory, and optimize routes.
    </p>
    <h4>Tech Stack</h4>
    <ul>
      <li>
        <strong>Frontend (Web App):</strong> React
      </li>
      <li>
        <strong>Frontend (Mobile App):</strong> React Native
      </li>
      <li>
        <strong>Backend:</strong> Node.js
      </li>
      <li>
        <strong>Database:</strong> MongoDB (NoSQL)
      </li>
      <li>
        <strong>Deployment:</strong> AWS EC2 (Backend), AWS S3 (Web App)
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
        WaterCan optimizes the workflow for both plant owners and delivery
        drivers:
      </p>
      <ul>
        <li>
          <strong>Plant Owners:</strong> Admin rights for route management and
          inventory control.
        </li>
        <li>
          <strong>Delivery Drivers:</strong> Navigation via mobile app with
          integrated maps.
        </li>
        <li>
          <strong>Transaction Management:</strong> All transactions are logged
          for transparency.
        </li>
      </ul>
    </div>
    <div>
      <h4 className="mt-4">More Details</h4>
      <p>
        WaterCan ensures efficient and accurate delivery, with features like
        real-time tracking and route optimization. The system is powered by
        Node.js and MongoDB, with the mobile and web apps built using React
        technologies.
      </p>
    </div>
    <h4 className="mt-4">Key Features</h4>
    <ul>
      <li>
        <strong>React Web App:</strong> Used by plant owners to manage inventory
        and deliveries.
      </li>
      <li>
        <strong>React Native Mobile App:</strong> For drivers to manage tasks
        and deliveries.
      </li>
      <li>
        <strong>Node.js Backend:</strong> Handles transactions, users, and
        routes.
      </li>
      <li>
        <strong>MongoDB Database:</strong> Stores customer and transaction data.
      </li>
      <li>
        <strong>AWS Hosting:</strong> Deployed on EC2 and S3 for scalability.
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
          src="/projectImages/watercan/addCus.jpg" // Fixed the path here
          alt="Web Screenshot"
          width={1000} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper moblie-hover">
        <Image
          src="/projectImages/watercan/applogin.jpg" // Fixed the path here
          alt="Web Screenshot"
          width={1000} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper moblie-hover">
        <Image
          src="/projectImages/watercan/appMap.jpg" // Fixed the path here
          alt="Web Screenshot"
          width={1000} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/watercan/history.jpg" // Fixed the path here
          alt="Web Screenshot"
          width={1000} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/watercan/plantowner.jpg" // Fixed the path here
          alt="Web Screenshot"
          width={1000} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/watercan/watercanweb.png" // Fixed the path here
          alt="Web Screenshot"
          width={1000} // Default width
          height={300} // Default height
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
      <strong>Note:</strong> This project was created for a client to help
      manage their water delivery system more efficiently.
    </p>
  </div>
);

// Styled Wrapper Component with variables for shared styles
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #30c6fc;
  padding: 2rem;
  gap: 1rem;

  /* Color Variables */
  --primary-color: #306dfc;
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
    font-weight: bold;
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
    .moblie-hover img:hover {
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
