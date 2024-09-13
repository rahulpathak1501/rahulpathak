import React, { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    const hidePreloader = () => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    };
    window.addEventListener("load", hidePreloader);

    // Cleanup event listener when the component unmounts
    return () => window.removeEventListener("load", hidePreloader);
  }, []);

  return <div id="preloader"></div>;
};

export default Preloader;
