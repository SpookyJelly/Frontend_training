import { useEffect, useState } from "react";

export const useTitle = (init: string) => {
  const [title, setTitle] = useState(init);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    if (htmlTitle) {
      htmlTitle.innerText = title;
    }
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
