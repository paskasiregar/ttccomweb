"use client";
import { useParams } from "next/navigation";
import TrackTemplate from "../[track]";
import ljImage from "../assets/lj.png"; // Import lj.png directly

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
      <section>
        <TrackTemplate
          title={trackData.title}
          description={trackData.description}
          backgroundImage={trackData.backgroundImage}
        />

        {/* Learning Journey Section */}
        <section className="w-full my-8 px-4 sm:px-8 max-w-container mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
            {/* Title */}
            <div className="max-w-lg md:w-1/2">
              <h1 className="text-6xl md:text-8xl font-bold mb-8">
                Learning <span className="text-purple-700">Journey</span>
              </h1>
            </div>

            {/* Description */}
            <div className="mt-6 md:mt-0 md:w-1/2 mb-8">
              <p className="text-gray-600 text-base md:text-lg">
                Embark on a transformative learning experience designed to
                inspire creativity, nurture logical thinking, and build
                confidence in young tech enthusiasts. With tailored tracks for
                every age group, we ensure that your child's journey into the
                world of technology is both fun and impactful.
              </p>
            </div>

            {/* Image */}
            <div className="mt-6 md:mt-0">
              <img
                src={ljImage}
                alt="Learning Journey"
                className="rounded-lg w-full max-w-sm"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
