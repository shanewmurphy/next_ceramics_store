import React, { useState } from "react";
import Noir from "./Noir";
import Ivory from "./Ivory";
import Rose from "./Rose";
import Olive from "./Olive";

const MyPage = () => {
  const [currentComponent, setCurrentComponent] = useState("Noir");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Noir":
        return (
          <Noir
            loadIvory={loadIvory}
            loadRose={loadRose}
            loadOlive={loadOlive}
          />
        );
      case "Ivory":
        return (
          <Ivory
            loadNoir={loadNoir}
            loadRose={loadRose}
            loadOlive={loadOlive}
          />
        );
      case "Rose":
        return (
          <Rose
            loadNoir={loadNoir}
            loadIvory={loadIvory}
            loadOlive={loadOlive}
          />
        );
      case "Olive":
        return (
          <Olive
            loadNoir={loadNoir}
            loadIvory={loadIvory}
            loadRose={loadRose}
          />
        );
      default:
        return null;
    }
  };

  const loadNoir = () => {
    setCurrentComponent("Noir");
  };

  const loadIvory = () => {
    setCurrentComponent("Ivory");
  };

  const loadRose = () => {
    setCurrentComponent("Rose");
  };

  const loadOlive = () => {
    setCurrentComponent("Olive");
  };

  return <div>{renderComponent()}</div>;
};

export default MyPage;
