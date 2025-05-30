import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UseRefComponent } from "./components/UseRefComponent";
import { UseStateComponent } from "./components/UseStateComponent";
import { UseReducerComponent } from "./components/UseReducerComponent";
import { UseEffectComponent } from "./components/UseEffectComponent";
import { UseMemoComponent } from "./components/UseMemoComponent";
import { UseCallbackComponent } from "./components/UseCallbackComponent";
import { UseCustomComponent } from "./components/UseCustomComponent";

/*
  날짜 : 2025/05.13
  이름 : 우상호
  내용 : ch04. 리액트 훅
*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h4>4장 리엑트 훅</h4>

      {/* useRef hook */}
      <UseRefComponent />
      <UseRefComponent />

      <UseStateComponent />
      {/* useState hook */}

      {/* useReducer hook */}
      <UseReducerComponent />

      {/* useEffect hook */}
      <UseEffectComponent />

      {/* useMeme hook */}
      <UseMemoComponent />

      {/* useCallback hook */}
      <UseCallbackComponent />

      {/* useCustom hook */}
    </>
  );
}

export default App;
