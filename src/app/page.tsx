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
      <div className="mb-20">
        <HomeSection />
      </div>
      <div className="mb-20">
        <AboutSection />
      </div>
      <div className="mb-20 pt-10">
        <SkillsSection />
      </div>
      <div>
        <ProjectsSection />
      </div>

      <div className="flex justify-center items-center w-full mt-5 flex-col md:flex-row">
        <div className="flex-grow basis-full md:basis-1/3 md:ml-24">
          <WhatIamon />
        </div>
        <div className="flex-grow basis-full md:basis-1/3">
          <WhatIamDoingToo />
        </div>
        <div className="flex-grow basis-full md:basis-2/3">
          <ShareYourReview />
        </div>
      </div>
    </>
  );
}
