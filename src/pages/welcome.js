import CSSTransition from "react-transition-group/CSSTransition";
import classes from "./welcome.module.css";
//import Transition from "react-transition-group/Transition";

function Welcome(props) {
    return (
        <>
            {/* <CSSTransition in={props.welcomeSlidePr} timeout={700} mountOnEnter unmountOnExit classNames="slides"> */}
                {/* {state => ( */}
                    <div className={classes.main} /* style={{ transition: "all 1s ease-out" ,opacity: state === "exited" ? 0 : 1}} */>
                    <h1>Hi, I am Paul.</h1>
                    <h3>I am a web developer - designer, writer, web-magazin-editor and builder</h3>
                    <p>I like to make beautiful Custom websites with React, - Javascript, Css, for making them simple, fast, yet elegant</p>
                    <h4>Let's work together, help each-other growing!</h4>
                    <button onClick={props.contactButtonHandlerPr}>Contact Me!</button>
                </div>
                
            {/* </CSSTransition> */}
        </>
    );
}

export default Welcome;
