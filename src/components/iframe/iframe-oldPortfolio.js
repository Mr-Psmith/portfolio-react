//import classes from "./iframe.module.css"; className={classes.main}props.iframeOPPr
import "./iframe.css";
import CSSTransition from "react-transition-group/CSSTransition";

function IframeOP(props) {
  /* const cssClass = {props.iframeOPPr ? "open" : "close"}; */
  const animationTiming = { enter: 400, exit: 1000 };
  return (
    <>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.iframeOPPr}
        timeout={animationTiming}
        classNames={{
          enter: "",
          enterActive: "open",
          exit: "",
          exitActive: "closed",
        }}
      >
        <iframe src="https://psancthus.com/" title="oldPortf" className="main-old-portf"></iframe>
      </CSSTransition>
    </>
  );
}

export default IframeOP;
