"use client";
import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
const Flipcard = dynamic(() => import("@/component/filpcard"), { ssr: false });
import dynamic from "next/dynamic";
import Image from "next/image";

const links = [
  { label: "Vendor App", url: "https://github.com/your-repo/apnadiscount-vendor" },
  { label: "Customer App", url: "https://github.com/your-repo/apnadiscount-customer" },
  { label: "Agent App", url: "https://github.com/your-repo/apnadiscount-agent" },
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
        <FaShoppingCart size={50} color="white" />
      </div>
      <div className="project-name">
        <p>ApnaDiscount</p>
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
      <strong>ApnaDiscount</strong> is a comprehensive discount and membership
      management platform consisting of three React Native applications: Vendor,
      Customer, and Agent apps. The platform enables shopkeepers to create and
      manage discount groups, while customers can purchase memberships and utilize
      various types of coupon codes. The system features complex calculations and
      functionality, with Firebase integration for real-time notifications and
      Redux for state management. The applications are deployed on the Play Store
      for easy access to users.
    </p>
    <h4>Tech Stack</h4>
    <ul>
      <li>
        <strong>Mobile Apps:</strong> React Native (Vendor, Customer & Agent Apps)
      </li>
      <li>
        <strong>State Management:</strong> Redux
      </li>
      <li>
        <strong>Backend Services:</strong> Firebase
      </li>
      <li>
        <strong>Notifications:</strong> Firebase Cloud Messaging
      </li>
      <li>
        <strong>Deployment:</strong> Google Play Store
      </li>
      <li>
        <strong>Database:</strong> Firebase Realtime Database
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
        ApnaDiscount streamlines discount and membership management through its
        integrated platform:
      </p>
      <ul>
        <li>
          <strong>Vendor App:</strong> Allows shopkeepers to create and manage
          discount groups, set up membership plans, and generate coupon codes.
        </li>
        <li>
          <strong>Customer App:</strong> Enables users to browse available
          discount groups, purchase memberships, and redeem various types of
          coupon codes.
        </li>
        <li>
          <strong>Agent App:</strong> Provides tools for managing and monitoring
          the discount system, handling customer queries, and overseeing vendor
          activities.
        </li>
      </ul>
    </div>
    <div>
      <h4 className="mt-4">More Details</h4>
      <p>
        The platform features a sophisticated coupon system with multiple types
        of discount codes and membership tiers. Firebase integration ensures
        real-time notifications for users, while Redux manages the complex state
        of the applications. The system includes advanced calculations for
        discount applications and membership benefits. All three applications
        are deployed on the Google Play Store, making them easily accessible to
        users.
      </p>
    </div>
    <h4 className="mt-4">Key Features</h4>
    <ul>
      <li>
        <strong>Discount Groups:</strong> Shopkeepers can create and manage
        discount groups for their products and services.
      </li>
      <li>
        <strong>Membership System:</strong> Customers can purchase memberships
        to access exclusive discounts and benefits.
      </li>
      <li>
        <strong>Coupon System:</strong> Multiple types of coupon codes with
        different discount structures and validity periods.
      </li>
      <li>
        <strong>Real-time Notifications:</strong> Firebase Cloud Messaging for
        instant updates and alerts.
      </li>
      <li>
        <strong>State Management:</strong> Redux implementation for efficient
        state handling across the applications.
      </li>
      <li>
        <strong>Play Store Deployment:</strong> All three applications available
        on Google Play Store for easy access.
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
          src="/projectImages/apnaDiscount/IMG-20250516-WA0001.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0002.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0003.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0004.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0005.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0006.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0007.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0008.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0009.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0010.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0011.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0012.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0013.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0014.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0015.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0016.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0017.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0018.jpg"
          alt="ApnaDiscount App Screenshot"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/projectImages/apnaDiscount/IMG-20250516-WA0019.jpg"
          alt="ApnaDiscount App Screenshot"
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
  background-color: #e65100;
  padding: 2rem;
  gap: 1rem;

  /* Color Variables */
  --primary-color: #bf360c;
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
