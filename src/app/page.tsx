"use client";
import { useState, useEffect } from "react";
import HomeSection from "@/section/homeSection";
import AboutSection from "@/section/aboutSection";
import SkillsSection from "@/section/skillsSection";
import ProjectsSection from "@/section/projectsSection";
import Loader from "@/component/loader";
import WhatIamon from "@/component/whatIamon";
import WhatIamDoingToo from "@/component//whatIamDoingToo";
import ShareYourReview from "@/component/shareYourReview";
import ResourcesButton from "@/component/resourcesButton";
import { HomeThemeProvider, useHomeTheme } from "@/context/HomeThemeContext";

function PageContent() {
  const { theme } = useHomeTheme();
  return (
    <div
      style={{
        background: theme.colors.background,
        minHeight: "100vh",
        transition: "background 0.3s ease-in-out",
      }}
    >
      <div className="mb-12 md:mb-20">
        <HomeSection />
      </div>
      <div className="mb-12 md:mb-20">
        <AboutSection />
      </div>
      <div className="mb-12 md:mb-20 pt-6 md:pt-10">
        <SkillsSection />
      </div>
      <div className="mb-12 md:mb-20">
        <ProjectsSection />
      </div>
      <div className="mb-12 md:mb-20">
        <ResourcesButton />
      </div>

      <div className="flex justify-center items-stretch w-full mt-5 flex-col lg:flex-row gap-4 px-2 md:px-4 pb-8">
        <div className="flex-grow w-full lg:w-1/3 lg:basis-1/3">
          <WhatIamon />
        </div>
        <div className="flex-grow w-full lg:w-1/3 lg:basis-1/3">
          <WhatIamDoingToo />
        </div>
        <div className="flex-grow w-full lg:w-1/3 lg:basis-1/3">
          <ShareYourReview />
        </div>
      </div>
    </div>
  );
}

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
    <HomeThemeProvider>
      <PageContent />
    </HomeThemeProvider>
  );
}
