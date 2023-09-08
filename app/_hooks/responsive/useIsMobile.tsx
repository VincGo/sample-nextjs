import {useEffect, useState} from "react";

const useIsMobile = (): boolean => {
  const [width, setWidth] = useState<number>(0);
  const handleWindowSizeChange = (): void => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowSizeChange();

    window.addEventListener("resize",
      handleWindowSizeChange);

    return (): void => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 700;
};

export default useIsMobile;
