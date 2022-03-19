import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      numberOfPieces={150}
      width={width}
      height={height * 1.5}
      gravity={0.01}
    />
  );
};

export default ConfettiComponent;
