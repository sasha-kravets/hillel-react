import React, { useEffect } from "react";

const Box = () => {

  useEffect(() => {
    const handleClick = () => {
      console.log("Click");
    };

    window.addEventListener("click", handleClick);

    // clean up function
    return () => {
      window.removeEventListener("click", handleClick);
      console.log("Destroy");
    }
  }, []);

  return <div className="box"></div>;
};

export default Box;
