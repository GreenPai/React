import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { ParnetComponent } from "./ParnetComponent";
import { Child1Component } from "./Child1Component";
import { Child2Component } from "./Child2Component";

export const RouterOutletComponent = () => {
  return (
    <div className="RouterOutletComponent">
      <h4>중첩 라우팅</h4>
      <p>
        <Link to={"/parent"}>parent</Link>&nbsp;
        <Link to={"/parent/child1"}>child1</Link>&nbsp;
        <Link to={"/parent/child2"}>child2</Link>&nbsp;
      </p>
      <Routes>
        <Route path="/parent" element={<ParnetComponent />}>
          <Route path="/parent/child1" element={<Child1Component />}></Route>
          <Route path="/parent/child2" element={<Child2Component />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
