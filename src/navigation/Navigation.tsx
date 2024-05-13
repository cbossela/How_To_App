import "./Navigation.css";
import React, { useRef } from "react";

function Navigation({
  HTMLSection,
  CSSSection,
  GitHubSection,
  JavaScriptSection,
  ReactSection,
}) {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navigation">
      <div className="navigationButtons">
        <button
          className="navigationButton"
          onClick={() => scrollToSection(HTMLSection)}
        >
          HTML
        </button>
        <button
          className="navigationButton"
          onClick={() => scrollToSection(CSSSection)}
        >
          CSS
        </button>
        <button
          className="navigationButton"
          onClick={() => scrollToSection(GitHubSection)}
        >
          GitHub
        </button>
        <button
          className="navigationButton"
          onClick={() => scrollToSection(JavaScriptSection)}
        >
          JavaScript
        </button>
        <button
          className="navigationButton"
          onClick={() => scrollToSection(ReactSection)}
        >
          React
        </button>
      </div>
    </div>
  );
}

export default Navigation;
