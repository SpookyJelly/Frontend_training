import { useEffect } from "react";

export const useBeforeLeave = (onBefore: Function) => {
  const handle = () => {
    onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
