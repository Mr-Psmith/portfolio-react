//import CSSTransition from "react-transition-group/CSSTransition";
import classes from "./about.module.css";
import "./transition.css"
import { motion } from "framer-motion";

function About(props) {
    return (
        <>
            <motion.div animate={{x: props.aboutSlidePr ? "-90%" : 0, opacity: props.aboutSlidePr ? 1 : 0}} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} exit={{x: "90%"}}>
                <div className={classes.aboutMain}>
                    <div className={classes.aboutBlock1}>
                        <h1>About Me:</h1>

                        <p>I was interested in the tech-world from my youth, first I built computers, than after some longer self-searching I found programming which got a hold on me.</p>

                        <p>I mastered Css, Javascript, and React, finished my portfolio, and I am currently learning NodeJs while I am working freelance.</p>

                        <p>Of course I have great experience in Web-hosting, and in the connecting fields too.</p>

                        <p>Right now I am interested in opportunities in the above mentioned areas, as well as in connecting ones.</p>

                        <button onClick={props.contactButtonHandlerPr}>Get In Tuch</button>
                    </div>

                    <div className={classes.aboutBlock2}>
                        <h1>Main Skills</h1>
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <ul>
                                <li>CSS-Modules</li>
                                <li>Redux</li>
                                <li>React-router</li>
                                <li>Framer-Motion</li>
                            </ul>
                            <li>Typescript</li>
                            {/* <li>Next.js</li> */}
                            <li>CSS/Html</li>
                            <li>Tailwind CSS</li>
                            <li>Git</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>
                </motion.div>
        </>
    );
}

export default About;
