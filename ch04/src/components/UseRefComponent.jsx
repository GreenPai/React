import React from "react";
import { useRef } from "react";

export const UseRefComponent = () => {
  // ref 선언 (자바스크립트의 id 값) : 컴포넌트 DOM 요소에 대한 참조값을 생성하고 참조하기 위한 Hook
  const refUid = useRef();
  const refName = useRef();

  // 핸들러
  const btn1Hanlder = () => {
    //const uid = document.getElementById("uid");
    const uid = refUid.current.value;

    alert(uid);
  };

  // 핸들러
  const btn2Hanlder = () => {
    //const uid = document.getElementById("uid");
    const name = refName.current.value;

    alert(name);
  };

  return (
    <div className="UseRefComponent">
      <h4>UseRefComponent</h4>
      <p>
        <input type="text" name="uid" ref={refUid} />
        <button onClick={btn1Hanlder}>확인</button>
      </p>
      <p>
        <input type="text" name="name" ref={refName} />
        <button onClick={btn2Hanlder}>확인</button>
      </p>
    </div>
  );
};
