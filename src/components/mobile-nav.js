import classes from "./mobileNav.module.css";

import { motion } from "framer-motion";

import facPic from "../img/fac.jpg";
import gith from "../img/github.png";
import inst from "../img/insta.png";
import twit from "../img/twit.png";

function MobileNavi(props) {

    return (
        <>
            <motion.div className={classes.mainContainerMobileNav} initial={{x: "100vw"}} animate={{x: props.mobileNavOpenPr ? "0vw" : 0, opacity: props.mobileNavOpenPr ? 1 : 0}} transition={{ duration: 0.35, type: "spring", bounce: 0.2 }} exit={{x: "100vw"}}>
                <ul className={classes.ul}>
                    <li className={classes.li} onClick={props.welcomeHandlerPr}> 
                        Welcome
                    </li>
                    <li className={classes.li} onClick={props.worksHandlerPr}>
                        Works
                    </li>
                    <li className={classes.li} onClick={props.aboutHandlerPr}>
                        About
                    </li>
                    <li className={classes.li} onClick={props.connectHandlerPr}>
                        Contact
                    </li>
                </ul>
                <div className={classes.socalPicsMobileNav}>
                            <a href="https://www.facebook.com/messages/t/100000633126813" target="_blank"  rel="noreferrer">
                                <img src={facPic} alt="Face" className={classes.fac}></img>
                            </a>
                            <a href="https://github.com/Mr-Psmith" target="_blank"  rel="noreferrer">
                                <img src={gith} alt="Gith" className={classes.github}></img>
                            </a>
                            <a href="https://instagram.com/..." target="_blank"  rel="noreferrer">
                                <img src={inst} alt="Inst" className={classes.inst}></img>
                            </a>

                            <a href="https://twitter.com/messages/1581314633595494400-1581314633595494400?text=" target="_blank"  rel="noreferrer">
                                <img src={twit} alt="Twit" className={classes.twitter}></img>
                            </a>
                    </div>
            </motion.div>
        </>
    );
}

export default MobileNavi;
