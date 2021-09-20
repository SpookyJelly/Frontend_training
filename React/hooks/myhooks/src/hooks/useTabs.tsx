import { useState } from "react";

export const useTabs = (
  initialTab: number,
  allTabs: Array<{ tab: string; content: string }>
) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
