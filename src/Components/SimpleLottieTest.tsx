import React from "react";
import Lottie from "react-lottie";
import animationData from "./WaveTest.json"; // Ensure this path is correct

const SimpleLottieTest: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height="400px" width="400px" />;
};

export default SimpleLottieTest;
