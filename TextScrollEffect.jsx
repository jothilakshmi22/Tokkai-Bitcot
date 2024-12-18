import React, { useState, useEffect, useRef } from "react";
import "./TextScrollEffect.css";

function TextScrollEffect() {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(true);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 300);
  };

  const scrollTimeout = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const content = [
    "“Hey, I've noticed you've been sitting down for a while. Howabout we take a break and stretch for a few minutes?“",
    "“Yes. That sounds good, where can I start today ?“",
    "“Let‘s get you moving with a few quick stretches to loosen up. We‘ll focus on your neck, shoulders, back, and legs.How does that sound?“",
    "“My left shoulder is a bit stifftoday. Can we do something else?“",
    "“Absolutely! We can focus on some gentle stretches and movements to help relieve that stiffness in your left shoulder without causing any discomfort. Here‘s a sequence designed to ease into it...“",
  ];

  return (
    <div className="full-container">
      <div className="container-overview">
        <div className="left">
          <img
            src="https://tokk-ai-dev.bitcotapps.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumb3.b7a2db24.png&w=640&q=75"
            alt="Watch"
            className="center-image"
          />
        </div>

        <div className="scroll-container" ref={containerRef}>
          {content.map((text, index) => (
            <div
              key={index}
              className={`scroll-item ${index % 2 === 0 ? "red" : "white"}`}
              style={{
                opacity: isScrolling ? 0.5 : 1,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <h2>{text}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextScrollEffect;
