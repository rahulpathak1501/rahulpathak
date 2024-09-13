import React, { useState, useEffect } from "react";
import "./RotatingText.css"; // Import the CSS file for animations

const RotatingText = ({ items, colors, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const fadeOut = () => setFadeClass("fade-out");
    const fadeIn = () => setFadeClass("fade-in");

    const handle = setInterval(() => {
      fadeOut(); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        fadeIn(); // Start fade-in after index changes
      }, 1000);
    }, interval);

    return () => clearInterval(handle);
  }, [items.length, interval]);

  return (
    <div className="rotating-text-container">
      <span
        className={`rotating-text ${fadeClass}`}
        style={{ color: colors[currentIndex] }}
      >
        {items[currentIndex]}
      </span>
    </div>
  );
};

export default RotatingText;
