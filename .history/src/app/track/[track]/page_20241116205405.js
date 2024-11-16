"use client";
import { useParams } from "next/navigation";
import TrackTemplate from "@/components/templates/TrackTemplate";

export default function TrackPage() {
  const { track } = useParams();

  const trackDetails = {
    "creative-coding": {
      title: "Creative Coding Track",
      description:
        "Learn the basics of coding through fun and interactive activities.",
    },
    "visual-coding": {
      title: "Visual Coding Track",
      description:
        "Master visual programming with ScratchJr and create exciting stories.",
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
