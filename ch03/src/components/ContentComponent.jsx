import React from "react";

export const ContentComponent = ({ children }) => {
  return (
    <div className="ContentComponent">
      <h4>ContentComponent</h4>
      <h5>{children}</h5>
    </div>
  );
};
