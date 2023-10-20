import classes from "./about.module.css";
import "./transition.css"
import { motion } from "framer-motion";

function About(props) {
    return (
        <>
            <motion.div animate={{ x: props.aboutSlidePr ? "-90%" : 0, opacity: props.aboutSlidePr ? 1 : 0 }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} exit={{ x: "90%" }}>
                <div className={classes.aboutMain}>
                    <div className={classes.aboutBlock1}>
                        <div>
                            <h1>About Me:</h1>
                        </div>
                        <div className={classes.aboutBlock1_desc}>
                            <p className={classes.aboutBlock1_descP}>I was interested in the tech-world from my youth, first I built computers, than after some longer self-searching I found programming which got a hold on me.</p>

                            <p className={classes.aboutBlock1_descP}>I mastered Css, Javascript, and React, finished my portfolio, and other works and I am currently learning NodeJs while I am working freelance.</p>

                            <p className={classes.aboutBlock1_descP}>Of course I have great experience in Web-hosting, and in the connecting fields too.</p>

                            <p className={classes.aboutBlock1_descP}>Right now I am interested in opportunities in the above mentioned areas, as well as in connecting ones.</p>

                            <div className={classes.buttonAbout} onClick={props.contactButtonHandlerPr}>


                                <motion.div initial={{ x: "-70vw" }} animate={{ x: props.contactButtonHandlerPr ? "0vw" : 0, opacity: props.contactButtonHandlerPr ? 1 : 0 }} transition={{ delay: 0.2, duration: 0.3, type: "spring", bounce: 0.2 }} exit={{ x: "-70vw" }} className={classes.triangl1About}></motion.div>
                                <p className={classes.button__descrAbout}>Get in Tuch!</p>
                                <motion.div initial={{ x: "70vw" }} animate={{ x: props.welcomeSlidePr ? "0vw" : 0, opacity: props.contactButtonHandlerPr ? 1 : 0 }} transition={{ delay: 0.2, duration: 0.3, type: "spring", bounce: 0.2 }} exit={{ x: "70vw" }} className={classes.triangl2About}></motion.div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.aboutBlock2}>
                        <h1>Main Skills</h1>
                        <ul className={classes.skils}>
                            <li>Javascript</li>
                            <li>React</li>
                            <ul className={classes.react_parts}>
                                <li>Redux</li>
                                <li>React-router</li>
                                <li>Framer-Motion</li>
                            </ul>
                            <li>Typescript</li>
                            {/* <li>Next.js</li> */}
                            <li>CSS/Html</li>
                            <li>CSS-Modules</li>
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
