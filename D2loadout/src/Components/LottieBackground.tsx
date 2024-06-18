import React from "react";
import Lottie from "react-lottie";
import animationData from "./WaveTest.json";
import "./Background.css";

const LottieBackground: React.FC = () => {
  console.log(animationData);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="lottie-background">
      <Lottie options={defaultOptions} height="100vh" width="100%" />
    </div>
  );
};

export default LottieBackground;
