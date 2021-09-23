import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 2) => {
  const element = useRef<any>();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
