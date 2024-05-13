import "./MainPage.css";
import HTMLHowTo from "./components/HTMLHowTo";
import CSSHowTo from "./components/CSSHowTo";
import GitHubHowTo from "./components/GitHubHowTo";
import JavaScriptHowTo from "./components/JavaScriptHowTo";
import ReactHowTo from "./components/ReactHowTo";
import { useRef } from "react";
import Navigation from "./navigation/Navigation";

function MainPage() {
  const HTMLSection = useRef<null | HTMLDivElement>(null);
  const CSSSection = useRef<null | HTMLDivElement>(null);
  const GitHubSection = useRef<null | HTMLDivElement>(null);
  const JavaScriptSection = useRef<null | HTMLDivElement>(null);
  const ReactSection = useRef<null | HTMLDivElement>(null);

  return (
    <div className="mainpage">
      <div className="navigation">
        <Navigation
          HTMLSection={HTMLSection}
          CSSSection={CSSSection}
          GitHubSection={GitHubSection}
          JavaScriptSection={JavaScriptSection}
          ReactSection={ReactSection}
        />
      </div>
      <div className="explanation">
        <div ref={HTMLSection}>
          <HTMLHowTo />
        </div>
        {/* <div ref={CSSSection}>
          <CSSHowTo />
        </div> */}
        <div ref={GitHubSection}>
          <GitHubHowTo />
        </div>
        {/* <div ref={JavaScriptSection}>
          <JavaScriptHowTo />
        </div>
        <div ref={ReactSection}>
          <ReactHowTo />
        </div> */}
      </div>
    </div>
  );
}

export default MainPage;
