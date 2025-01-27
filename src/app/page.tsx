"use client";
import { useState, useEffect } from "react";
import HomeSection from "@/section/homeSection";
import AboutSection from "@/section/aboutSection";
import SkillsSection from "@/section/skillsSection";
import ProjectsSection from "@/section/projectsSection";
import Loader from "@/component/loader";
import WhatIamon from "@/component/whatIamon";
import ShareYourReview from "@/component/shareYourReview";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <HomeSection />

      <div className="mb-20">
        <AboutSection />
      </div>

      <SkillsSection />

      <ProjectsSection />

      <div className="flex justify-center items-center w-full mt-5 flex-col md:flex-row">
        <div className="flex-grow basis-full md:basis-1/3 md:ml-24">
          <WhatIamon />
        </div>
        <div className="flex-grow basis-full md:basis-2/3">
          <ShareYourReview />
        </div>
      </div>
    </>
  );
}
