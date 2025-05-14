// rafc
import React from "react";
import useCounter from "../hooks/useCounter";

export const UseCustomComponent = () => {
  {/* prettier-ignore */}
  const [state, increaseDispatch, decreaseDispatch, resetDispatch] =
    useCounter(0);

  return (
    <div className="UseCustomComponent">
      <p>UseCustomComponent</p>
      <button onClick={increaseDispatch}>증가</button>
      <button onClick={decreaseDispatch}>감소</button>
      <button onClick={resetDispatch}>초기화</button>
      <p>{state}</p>
    </div>
  );
};
