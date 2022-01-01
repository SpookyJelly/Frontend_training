import { MouseEvent, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import logo from "./logo.svg";
import "./App.scss";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.tsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {" | "}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   );
// }

console.log("key", import.meta.env.VITE_CAT_API_KEY);

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [normal, setNormal] = useState("");

  const handleBtn: React.MouseEventHandler<HTMLButtonElement> = async (
    e: MouseEvent
  ) => {
    console.log(e);

    const URL = `${import.meta.env.VITE_CAT_API_URL}`;
    console.log(URL);
    const config: AxiosRequestConfig = {
      headers: {
        "x-api-key": `${import.meta.env.VITE_CAT_API_KEY}`,
      },
      params: {
        limit: 1,
        page: 1,
      },
    };
    try {
      const res = await axios.get(URL, config);
      console.log(res);
      if (res.data) {
        const a = res.data.pop();
        const { url } = a;
        const image = document.querySelector("#image");
        setNormal(url);
        console.log("url", url);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setCount(count + 1);
    }
  };

  return (
    <div className="App">
      <h1>My first Vite + React App</h1>
      <div>
        <p>tester</p>
        <div>
          <img id="image" src={normal} alt="" />
        </div>
        <p>{count}</p>
        <button onClick={handleBtn}>Get Random Cat</button>
      </div>
    </div>
  );
};

export default App;
