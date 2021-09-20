import React, { useState, useEffect, useRef } from "react";
import { useInput } from "./hooks/useInput";
import { useTabs } from "./hooks/useTabs";
import "./App.css";

const content = [
  {
    tab: "Section 1",
    content: "content of Section 1",
  },
  {
    tab: "Section 2",
    content: "content of Section 2",
  },
];

const useTitle = (init: string) => {
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

const useClick = (onClick: Function) => {
  // const ref = useRef<any>();
  const ref = useRef<any>();
  console.log(ref);
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return ref.current;
};

const App = () => {
  const maxLen = (value: string) => value.length < 10;
  const name = useInput("Mr.", maxLen);
  const { currentItem, changeItem } = useTabs(0, content);
  const sayHello = () => console.log("hello");
  const title = useClick(sayHello);
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("changed"), 3000);

  const potato = useRef<any>();
  setTimeout(() => {
    if (potato.current) {
      potato.current.focus();
    }
  }, 5000);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello</h1>
      <input placeholder="name" {...name} />
      <div>{currentItem.content}</div>
      <div>
        {content.map((tab, index) => {
          return (
            <button key={index} onClick={() => changeItem(index)}>
              {tab.tab}
            </button>
          );
        })}
      </div>
      <input ref={potato} placeholder="mu-ya-ho" />
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
