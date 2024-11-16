"use client";
import { useParams } from "next/navigation";
import TrackTemplate from "../[track]";

export default function TrackPage() {
  const { track } = useParams();

  const trackDetails = {
    "creative-coding": {
      title: "Creative Coding Track",
      description:
        "Introduce coding to young learners through engaging, hands-on activities and educational toys. Perfect for ages 4-5 to build logical thinking skills.",
    },
    "visual-coding": {
      title: "Visual Coding Track",
      description:
        "Explore visual programming concepts with ScratchJr. Ideal for ages 6-7 to create stories and projects while learning basic coding principles.",
    },
    "web-development": {
      title: "Web Development Track",
      description:
        "Dive into web development fundamentals with HTML, CSS, and JavaScript. Suitable for ages 8-12 to create exciting mini web projects.",
    },
    "basic-programming": {
      title: "Basic Programming Track",
      description:
        "Learn core programming concepts with Python and JavaScript. Designed for ages 13-16 to build real-world applications and problem-solving skills.",
    },
    // Add more tracks as needed
  };

  const trackData = trackDetails[track] || {
    title: "Track Not Found",
    description: "The track you are looking for does not exist.",
  };

  return (
    <TrackTemplate title={trackData.title} description={trackData.description}>
      <p className="text-gray-600">This is the {trackData.title} page.</p>
    </TrackTemplate>
  );
}
