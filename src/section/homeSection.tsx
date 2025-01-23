"use client";

import Card from "@/component/homeCard";
import CardDetails from "@/component/details";
import Git from "@/component/socials/gitSection";
import LinkedIn from "@/component/socials/linkedInSection";
import Instagram from "@/component/socials/instagramSection";

export default function HomeSection() {
  return (
    <div style={styles.container}>
      <div style={styles.socials}>
        <Git />
        <LinkedIn />
        <Instagram />
      </div>

      <div style={styles.content}>
        <CardDetails />
        <Card />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    position: "relative",
    padding: "0 20px", // Horizontal padding
  },
  socials: {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10%", // Gap between CardDetails and Card
  },
};
