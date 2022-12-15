import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (option) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const returnEntry = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(returnEntry, option);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, option]);

  return [containerRef, isVisible];
};

export default useIntersectionObserver;
