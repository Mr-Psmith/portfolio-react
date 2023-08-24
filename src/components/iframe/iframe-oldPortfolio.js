//import classes from "./iframe.module.css"; className={classes.main}
import "./iframe.css";
import CSSTransition from "react-transition-group/CSSTransition";

function IframeOP(props) {
  return (
    <>
      <CSSTransition in={props.iframeOPPr} timeout={300} classNames="CssTr" >
        <div  className="main">
          <iframe src="https://psancthus.com/" title="oldPortf"></iframe>
        </div>
      </CSSTransition>
    </>
  );
}

export default IframeOP;
