"use client";
import Card from "@/component/homeCard";
import CardDetails from "@/component/details";
import Git from "@/component/socials/gitSection";
import LinkedIn from "@/component/socials/linkedInSection";
import Instagram from "@/component/socials/instagramSection";

export default function homeSection() {
  return (
    <div className="bg-primaryColor h-screen">
      <div className="h-screen flex items-center justify-center">
        <div className="flex gap-32 items-center justify-center ">
          <CardDetails />
          <Card />
        </div>
      </div>
      <div className="flex items-end justify-end pt-6 pr-10 absolute top-0 right-0">
        <Git />
        <LinkedIn />
        <Instagram />
      </div>
    </div>
  );
}
