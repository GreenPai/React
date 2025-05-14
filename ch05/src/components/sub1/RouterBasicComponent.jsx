import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { HelloComponent } from "./HelloComponent";
import { WelcomeComponent } from "./WelcomeComponent";
import { GreetingComponent } from "./GreetingComponent";

export const RouterBasicComponent = () => {
  return (
    <div className="RouterBasicComponent">
      <h4>RouterBasicComponent</h4>
      <p>
        <Link to={"/hello"}>hello </Link>
        <Link to={"/welcome"}>welcome </Link>
        <Link to={"/greeting"}>greeting </Link>
      </p>

      <Routes>
        <Route path="/greeting" element={<GreetingComponent />}></Route>
        <Route path="/hello" element={<HelloComponent />}></Route>
        <Route path="/welcome" element={<WelcomeComponent />}></Route>
      </Routes>
    </div>
  );
};
