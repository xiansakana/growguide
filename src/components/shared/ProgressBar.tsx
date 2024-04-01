// ProgressBar.tsx
import React, { useState, useEffect } from "react";

type ProgressBarProps = {
  onLoaded: () => void;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = Math.min(prevProgress + 30, 100);
          if (newProgress === 100) {
            // Start the fade out effect
            setFadeOut(true);
            setTimeout(() => {
              onLoaded();
            }, 500); // Wait for fadeOut effect to finish before notifying parent
          }
          return newProgress;
        });
      }, 500);
    }

    return () => interval && clearInterval(interval);
  }, [progress, onLoaded]);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundColor: fadeOut ? "white" : "transparent" }}
    >
      <div className="w-1/6 bg-gray-200 h-1 ">
        <div
          className="bg-green-500 h-1"
          style={{
            width: `${progress}%`,
            transition: "width 0.5s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
