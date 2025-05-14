import React, { useMemo, useState } from "react";

const hardCalc = (num) => {
  console.log("hardCalc...");
  for (let i = 0; i < 1000000000; i++) {}
  return num + 1000;
};

const easyCalc = (num) => {
  console.log("easyCalc...");
  return num + 1000;
};

/*
    캐싱
*/
export const UseMemoComponent = () => {
  const [hardNum, setHardNum] = useState(1);
  const [easyNum, setEasyNum] = useState(1);

  const hardResult = useMemo(() => {
    return hardCalc(hardNum);
  }, [hardNum]);

  // const hardResult = hardCalc(hardNum);
  const easyResult = easyCalc(easyNum);

  return (
    <div className="UseMomoComponent">
      <h4>UseMemoComponent</h4>
      <p>
        hardNum :{" "}
        <input
          type="number"
          value={hardNum}
          onChange={(e) => {
            setHardNum(parseInt(e.target.value));
          }}
        />
        <span>hardResult : {hardResult}</span>
      </p>

      <p>
        easyNum :{" "}
        <input
          type="number"
          value={easyNum}
          onChange={(e) => {
            setEasyNum(parseInt(e.target.value));
          }}
        />
        <span>easyResult : {easyResult}</span>
      </p>
    </div>
  );
};
