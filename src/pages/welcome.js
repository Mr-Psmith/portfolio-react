import CSSTransition from "react-transition-group/CSSTransition";
import classes from "./welcome.module.css";
//import Transition from "react-transition-group/Transition";
import { motion } from "framer-motion";

function Welcome(props) {
    return (
        <>
            {/* <div className={classes.wrapper}> */}
            {/* <CSSTransition in={props.welcomeSlidePr} timeout={700} mountOnEnter unmountOnExit classNames="slides"> */}
            <motion.div animate={{ x: props.welcomeSlidePr ? "-90%" : 0, opacity: props.welcomeSlidePr ? 1 : 0 }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} exit={{ x: "90%" }}>
                {/* {state => ( */}
                <div className={classes.main} /* style={{ transition: "all 1s ease-out" ,opacity: state === "exited" ? 0 : 1}} */>
                    <h1>Hi, I am Paul.</h1>
                    <h3>I am a web developer - designer, writer, and builder</h3>
                    <p>I like to make beautiful Custom websites with React, - Javascript, Css, for making them simple, fast, yet elegant</p>
                    <h4>Let's work together, help each-other growing!</h4>
                    <div className={classes.button} onClick={props.contactButtonHandlerPr}>
                        {/* <div onClick={props.contactButtonHandlerPr} className={classes.rect}>Contact Me!</div> */}
                        <button className={classes.button__descr}>Contact Me!</button>
                        <motion.div initial={{x: "-70vw"}} animate={{ x: props.contactButtonHandlerPr ? "0vw" : 0, opacity: props.contactButtonHandlerPr ? 1 : 0 }} transition={{ delay:0.2, duration: 0.3, type: "spring", bounce: 0.2 }} exit={{ x: "-70vw" }} className={classes.triangl1}></motion.div>
                        
                        <motion.div initial={{x: "70vw"}} animate={{ x: props.welcomeSlidePr ? "0vw" : 0, opacity: props.contactButtonHandlerPr ? 1 : 0 }} transition={{ delay:0.2, duration: 0.3, type: "spring", bounce: 0.2 }} exit={{ x: "70vw" }} className={classes.triangl2}></motion.div>
                    </div>
                </div>
            </motion.div>
            {/* </div> */}
            {/* </CSSTransition> */}
        </>
    );
}

export default Welcome;
