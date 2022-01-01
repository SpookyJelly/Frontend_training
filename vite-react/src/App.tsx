import { MouseEvent, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import logo from "./logo.svg";
import "./App.scss";
import sample from "./sample.jpg";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [normal, setNormal] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      setIsLoading(true);
      const res = await axios.get(URL, config);
      if (res.data) {
        const resData = res.data.pop();
        const { url } = resData;
        setNormal(url);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setCount(count + 1);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="background"></div>
      <h1>My first Vite + React App</h1>
      <div>
        <h3>Random Cat display</h3>
        <div className="container">
          <div className="logo-box">
            {isLoading && <img src={logo} id="loadingLogo" />}
          </div>
          <img id="image" src={normal ?? sample} alt="" className="cat-image" />
        </div>
        <p>Cat count : {count}</p>
        <button onClick={handleBtn}>Get Random Cat</button>
      </div>
    </div>
  );
};

export default App;
