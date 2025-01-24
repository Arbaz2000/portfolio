"use client";
import { useState, useEffect } from "react";
import HomeSection from "@/section/homeSection";
import AboutSection from "@/section/aboutSection";
import SkillsSection from "@/section/skillsSection";
import ProjectsSection from "@/section/projectsSection";
import Loader from "@/component/loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
