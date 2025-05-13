import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassTypeComponent from "./components/ClassTypeComponent";
import ParentComponent from "./components/ParentComponent";
import PropsComponent from "./components/PropsComponent";
import { ContentComponent } from "./components/ContentComponent";
import FunctionalComponent from "./components/FunctionalCompenent";
import StateComponent from "./components/StateComponent";
import LifeCycleComponent from "./components/LifeCycleComponent";

/*
  날짜 : 2025/05/13
  이름 : 우상호
  내용 : ch03. 리액트 컴포넌트
*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>3장 리액트 컴포넌트</h3>

      {/* 클래스형 컴포넌트  */}
      <ClassTypeComponent />

      {/* 함수형 컴포넌트  */}
      <FunctionalComponent />

      {/* 부모 컴포넌트 */}
      <ParentComponent />

      {/* Props 컴포넌트 */}
      <PropsComponent title="제목" message="메시지" />

      {/* 내용을 갖는 컴포넌트  */}
      <ContentComponent>
        <h5>내용제목입니다.</h5>
        <p>내용을 갖는 컴포넌트 입니다.</p>
      </ContentComponent>

      {/* State 컴포넌트  */}
      <StateComponent />

      {/* 컴포넌트 생명주기  */}
      <LifeCycleComponent />
      {/*  */}
    </>
  );
}

export default App;
