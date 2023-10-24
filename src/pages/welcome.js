import classes from "./welcome.module.css";
import { motion } from "framer-motion";

function Welcome(props) {
    return (
        <>
            <motion.div animate={{ x: props.welcomeSlidePr ? "-90%" : 0, opacity: props.welcomeSlidePr ? 1 : 0 }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} exit={{ x: "90%" }}>
                <div className={classes.main} >
                    <h1>Hi, I am Paul.</h1>
                    <h3>I am a web developer - designer, writer, and builder</h3>
                    <p>I like to make beautiful Custom websites with React, Javascript, Css</p>
                    <h3>My websites are responsive, fast, elegant, and are always on the point</h3>
                    <h4>Let's work together, help each-other growing!</h4>
                    <div className={classes.button} onClick={props.contactButtonHandlerPr}>
                        <button className={classes.button__descr}>Contact Me!</button>
                        <motion.div initial={{x: "-70vw"}} animate={{ x: props.contactButtonHandlerPr ? "0vw" : 0, opacity: props.contactButtonHandlerPr ? 1 : 0 }} transition={{ delay:0.2, duration: 0.3, type: "spring", bounce: 0.2 }} exit={{ x: "-70vw" }} className={classes.triangl1}></motion.div>
                        <motion.div initial={{x: "70vw"}} animate={{ x: props.welcomeSlidePr ? "0vw" : 0, opacity: props.contactButtonHandlerPr ? 1 : 0 }} transition={{ delay:0.2, duration: 0.3, type: "spring", bounce: 0.2 }} exit={{ x: "70vw" }} className={classes.triangl2}></motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Welcome;
