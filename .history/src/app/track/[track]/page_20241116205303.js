import { useParams } from "next/navigation";
import TrackTemplate from "@/components/templates/TrackTemplate";

export default function TrackPage() {
  const params = useParams();
  const { track } = params;

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
    "web-development": {
      title: "Web Development Track",
      description:
        "Dive into HTML, CSS, and JavaScript to build your first mini projects.",
    },
    "basic-programming": {
      title: "Basic Programming Track",
      description: "Learn Python, JavaScript, and build simple applications.",
    },
  };

  const trackData = trackDetails[track] || {
    title: "Track Not Found",
    description: "The track you are looking for does not exist.",
  };

  return (
    <TrackTemplate title={trackData.title} description={trackData.description}>
      <p className="text-gray-600">
        This is a detailed description of the {trackData.title}.
      </p>
    </TrackTemplate>
  );
}
