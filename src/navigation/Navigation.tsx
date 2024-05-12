import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigationButtons">
        <button className="navigationButton">HTML</button>
        <button className="navigationButton">CSS</button>
        <button className="navigationButton">GitHub</button>
        <button className="navigationButton">JavaScript</button>
        <button className="navigationButton">React</button>
      </div>
    </div>
  );
}

export default Navigation;
