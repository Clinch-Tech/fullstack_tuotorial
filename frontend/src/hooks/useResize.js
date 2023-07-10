import { useEffect, useState } from "react";

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const resizeListnere = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", resizeListnere);

    return () => window.removeEventListener("resize", resizeListnere);
  }, []);

  return [width, height];
};

export default useResize;
