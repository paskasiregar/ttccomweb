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
      backgroundImage:
        "https://images.unsplash.com/photo-1544717305-2782549b5136", // Replace with a relevant Creative Coding image
    },
    "visual-coding": {
      title: "Visual Coding Track",
      description:
        "Explore visual programming concepts with ScratchJr. Ideal for ages 6-7 to create stories and projects while learning basic coding principles.",
      backgroundImage:
        "https://images.unsplash.com/photo-1573164574393-b9b12c3ff9c6", // Replace with a relevant Visual Coding image
    },
    "web-development": {
      title: "Web Development Track",
      description:
        "Dive into web development fundamentals with HTML, CSS, and JavaScript. Suitable for ages 8-12 to create exciting mini web projects.",
      backgroundImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c", // Replace with a relevant Web Development image
    },
    "basic-programming": {
      title: "Basic Programming Track",
      description:
        "Learn core programming concepts with Python and JavaScript. Designed for ages 13-16 to build real-world applications and problem-solving skills.",
      backgroundImage:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f", // Replace with a relevant Basic Programming image
    },
    // Add more tracks as needed
  };

  const trackData = trackDetails[track] || {
    title: "Track Not Found",
    description: "The track you are looking for does not exist.",
    backgroundImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Default image for not found
  };

  return (
    <div className="mx-auto">
      {/* Back Button */}
      <div className="my-4 px-4 sm:px-8">
        <button
          className="secondary-button"
          onClick={() => (window.location.href = "/")}
        >
          &lt; Back
        </button>
      </div>

      {/* Track Template */}
      <section className="">
        <TrackTemplate
          title={trackData.title}
          description={trackData.description}
          backgroundImage={trackData.backgroundImage}
        >
          <p className="text-gray-600 mt-4">{`This is the ${trackData.title} page.`}</p>
        </TrackTemplate>

        <section className="my-4 px-4 sm:px-8">
          <div className="text-center md:text-left max-w-lg justify-between">
            <h1 className="text-6xl md:text-6xl font-bold mb-4 text-left">
              <span className="text-purple-700">Learning</span> Journey.
            </h1>
            <h2 className="text-gray-500 text-lg md:text-xl font-semibold mb-4 text-left">
              Small techies, big dreams{" "}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </h2>
          </div>
        </section>
      </section>
    </div>
  );
}
