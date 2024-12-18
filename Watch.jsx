import React, { useEffect, useState } from "react";
import "./Watch.css";

const contentList = [
  "1 TOKK AI has a dedicate button for effortless volume control.",
  "2 TOKK AI makes your voice clear and easy to hear with powerful speakers and smart microphones that block out noise.",
  "3 OKKTM is designed for easy interactions with a second Multi-Function Button for added convenience.",
  "4 TOKKTM is designed for easy interactions with a second Multi-Function Button for added convenience.",
];

const Watch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();

      setScrollCount((prevCount) => {
        const newCount = prevCount + 1;

        if (newCount >= 6) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % contentList.length);
          return 0;
        }

        return newCount;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const calculateLineWidth = (scrollCount) => {
    const baseWidth = 70;
    return Math.min(350, baseWidth * scrollCount);
  };

  const calculateOpacity = (scrollCount) => {
    const maxScroll = 6;
    return Math.min(1, scrollCount / maxScroll);
  };

  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://tokk-ai-dev.bitcotapps.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumb3.b7a2db24.png&w=640&q=75"
          alt="Watch"
          className="center-image"
        />

        {contentList.map((content, index) => (
          <div
            key={index}
            className={`content content-${index} ${
              index === currentIndex ? "visible" : ""
            }`}
            style={{
              opacity: index === currentIndex ? calculateOpacity(scrollCount) : 0,
            }}
          >
            {content}
          </div>
        ))}

        {contentList.map((_, index) => (
          <div
            key={index}
            className={`line line-${index} ${index === currentIndex ? "visible" : ""}`}
            style={{
              width: index === currentIndex ? `${calculateLineWidth(scrollCount)}px` : "0px",
            }}
          />
        ))}

        {contentList.map((_, index) => (
          <div
            className={`dot ${index === currentIndex ? `visible dot-${index}` : ""}`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Watch;
