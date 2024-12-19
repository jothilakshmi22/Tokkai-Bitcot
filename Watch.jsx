import React, { useEffect, useState } from "react";
import "./Watch.css";

const contentList = [
  {
    text: "1 TOKK AI has a dedicate button for effortless volume control.",
    position: 0,
  },
  {
    text: "2 TOKK AI makes your voice clear and easy to hear with powerful speakers and smart microphones that block out noise.",
    position: 1,
  },
  {
    text: "3 OKKTM is designed for easy interactions with a second Multi-Function Button for added convenience.",
    position: 2,
  },
  {
    text: "4 TOKKTM is designed for easy interactions with a second Multi-Function Button for added convenience.",
    position: 3,
  },
];

const Watch = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      setCurrentStep((prev) => {
        const next = Math.min(prev + 1, 23);
        const newIndex = Math.floor(next / 6);
        if (newIndex !== Math.floor(prev / 6)) {
          setActiveIndex(newIndex);
        }
        return next;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const getProgress = () => (currentStep % 6) / 6;
  const isVisible = (index) => index === activeIndex;

  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://tokk-ai-dev.bitcotapps.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumb3.b7a2db24.png&w=640&q=75"
          alt="Watch"
          className="center-image"
        />

        {contentList.map((content, index) => (
          <React.Fragment key={index}>
            <div
              className={`content content-${content.position}`}
              style={{
                display: isVisible(index) ? "block" : "none",
                opacity: isVisible(index) ? getProgress() : 0,
              }}
            >
              {content.text}
            </div>

            <div
              className={`line line-${content.position}`}
              style={{
                width: isVisible(index) ? `${getProgress() * 450}px` : "0px",
                display: isVisible(index) ? "block" : "none",
              }}
            />

            <div
              className={`dot dot-${content.position}`}
              style={{
                display: isVisible(index) ? "block" : "none",
                opacity: isVisible(index) ? 1 : 0,
              }}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Watch;
