import React from "react";
import "./MainPage.css";
import Navigation from "./navigation/Navigation";
import HTMLHowTo from "./components/HTMLHowTo";
import CSSHowTo from "./components/CSSHowTo";
import GitHubHowTo from "./components/GitHubHowTo";
import JavaScriptHowTo from "./components/JavaScriptHowTo";
import ReactHowTo from "./components/ReactHowTo";

function MainPage() {
  return (
    <div className="mainpage">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="explanation">
        <HTMLHowTo />
        <CSSHowTo />
        <GitHubHowTo />
        <JavaScriptHowTo />
        <ReactHowTo />
        Hello
      </div>
    </div>
  );
}

export default MainPage;
