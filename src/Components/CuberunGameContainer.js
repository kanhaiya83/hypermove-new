import { useState, useEffect } from "react";
import CubeWorld from "./games/cuberun/components/CubeWorld";

const CuberunGameContainer = () => {
  const [showGame, setShowGame] = useState(true);
  useEffect(() => {
    console.log("Running useEffect, state:", showGame);
    if (showGame === false) {
      setShowGame(true);
    }
  }, [showGame]);

  return (
    <div className="cuberun-game-container rounded-3">
      {showGame && (
          <CubeWorld setShowGame={setShowGame} />
      )}
    </div>
  );
};

export default CuberunGameContainer;
