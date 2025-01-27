"use client";
import React from "react";
import styled from "styled-components";
import { FaWater } from "react-icons/fa"; // Water icon
import Flipcard from "@/component/filpcard";
import Image from "next/image";
import { SiAccuweather, SiLeaflet } from "react-icons/si";

const links = [
  { label: "Customer", url: "https://github.com/Arbaz2000/WaterCan-Backend" },
  {
    label: "Shop-Owner",
    url: "https://github.com/kajal-sharma007/WaterCanApp",
  },
  { label: "Delivery ", url: "https://github.com/Arbaz2000/WaterCan-Backend" },
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
        <SiLeaflet size={50} color="white" />
      </div>
      <div className="project-name">
        <p>Get Weed</p>
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
      <strong>Get Weed</strong> is a comprehensive inventory management system
      designed for the cannabis industry. It includes three mobile apps: a Shop
      Owner app, a Delivery app, and a Customer app. Shop owners can list
      products, manage inventory, and provide product details. Delivery drivers
      use the Delivery app to deliver products to customers at specific
      locations. The system integrates Map APIs for delivery navigation and
      includes charts for the dashboard. I was responsible for designing the UI
      in Figma and integrating APIs into the apps.
    </p>
    <h4>Tech Stack</h4>
    <ul>
      <li>
        <strong>Frontend (Shop Owner & Customer App):</strong> React Native
      </li>
      <li>
        <strong>Frontend (Delivery App):</strong> React Native
      </li>
      <li>
        <strong>APIs:</strong> REST APIs for data integration
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
        <strong>Get Weed</strong> optimizes the cannabis delivery process
        through three distinct apps:
      </p>
      <ul>
        <li>
          <strong>Shop Owner App:</strong> Allows users to manage their shop,
          list products, and provide detailed information about each item.
        </li>
        <li>
          <strong>Delivery App:</strong> Enables delivery drivers to navigate to
          customer locations using integrated map APIs for efficient route
          planning.
        </li>
        <li>
          <strong>Customer App:</strong> Lets customers browse products and
          place orders for delivery.
        </li>
      </ul>
    </div>
    <div>
      <h4 className="mt-4">More Details</h4>
      <p>
        The system includes a dynamic dashboard with charts to visualize key
        metrics. Real-time data is provided via integrated REST APIs, ensuring
        seamless communication between the apps. The applications are designed
        for efficiency and user-friendliness, offering a smooth experience for
        all users.
      </p>
    </div>
    <h4 className="mt-4">Key Features</h4>
    <ul>
      <li>
        <strong>Shop Owner App:</strong> List products, manage inventory, and
        provide detailed descriptions of items.
      </li>
      <li>
        <strong>Delivery App:</strong> Navigation with map APIs for optimized
        delivery routes.
      </li>
      <li>
        <strong>Customer App:</strong> Browse products, view descriptions, and
        make purchases.
      </li>
      <li>
        <strong>Charts on Dashboard:</strong> Visual representation of
        inventory, sales, and delivery metrics.
      </li>
      <li>
        <strong>REST APIs:</strong> Integrated for seamless data communication
        between the frontend apps.
      </li>
      <li>
        <strong>Figma to UI:</strong> Full UI design done in Figma and
        integrated into the mobile apps.
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
          src="/projectImages/getWeed/registorShopowner.jpg" // Fixed the path here
          alt="App Login Screenshot"
          width={500} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/getWeed/shopOwner.jpg" // Fixed the path here
          alt="Web Screenshot"
          width={1000} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/getWeed/shopOwnerDashboard.jpg" // Fixed the path here
          alt="App Login Screenshot"
          width={500} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/getWeed/shopownerProfile.jpg" // Fixed the path here
          alt="App Login Screenshot"
          width={500} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/getWeed/chat.jpg" // Fixed the path here
          alt="Web Screenshot"
          width={1000} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/getWeed/chatting.jpg" // Fixed the path here
          alt="App Login Screenshot"
          width={500} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/getWeed/dirliveryDashboard.jpg" // Fixed the path here
          alt="Web Screenshot"
          width={1000} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/getWeed/driverprofile.jpg" // Fixed the path here
          alt="App Login Screenshot"
          width={500} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/getWeed/history.jpg" // Fixed the path here
          alt="Web Screenshot"
          width={1000} // Default width
          height={300} // Default height
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/getWeed/login.jpg" // Fixed the path here
          alt="App Login Screenshot"
          width={500} // Default width
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
      <strong>Note:</strong> This project was created for a client.
    </p>
  </div>
);

// Styled Wrapper Component with variables for shared styles
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3cb336;
  padding: 2rem;
  gap: 1rem;

  /* Color Variables */
  --primary-color: #056e00;
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
