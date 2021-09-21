import { useRef, useEffect } from "react";

export const useClick = (onClick: any) => {
  // const ref = useRef<any>();
  const ref = useRef<any>();
  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      elem.addEventListener("click", onClick);
    }
    return () => {
      if (elem) {
        elem.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return ref.current;
};
