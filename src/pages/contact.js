import classes from "./contact.module.css";
import facPic from "../img/fac.jpg";
import inst from "../img/insta.png";
import twit from "../img/twit.png";
import gith from "../img/github.png";
import pic from "../img/f037.png";
import "./transition.css"
import { motion } from "framer-motion";

function Contact(props) {
    return (
        <>
            <motion.div animate={{x: props.contactSlidePr ? "-90%" : 0}} transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}>
                <div className={classes.contactMain}>
                    <div className={classes.contactUnvisibleblock1}>
                        <form method="get" encType="text/plain">
                            <div className={classes.contactUnvisibleblock1_1}>
                                <div>
                                    <label className={classes.contactFormNameLabel} htmlFor="name">
                                        Name:
                                        <input type="text" name="name" />
                                    </label>
                                </div>
                                <div>
                                    <label className={classes.contactFormEmailLabel} htmlFor="email">
                                        Email:
                                        <input type="text" name="email" />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className={classes.contactMessageNamLabel}>Message:</label>
                                <textarea
                                    className={classes.formContactMessageTextarea}
                                    name="comments"
                                    rows="12"
                                    cols="30"
                                    defaultValue={
                                        "This is a work in progress, as I am mainly a front-end developer, and I am still just training in back-end. But my email is psancthus@gmail.com. Thank you for your understanding."
                                    }
                                ></textarea>
                            </div>
                            <div className={classes.contactFormButtons}>
                                <button onClick={props.contactButtonHandlerPr}>Send</button>
                            </div>
                        </form>
                    </div>
                    <div className={classes.contactUnvisibleblock2}>
                        <img src={pic} alt="" className={classes.picPlus}></img>
                        <h1>Or you can find me on: </h1>
                        <a href="https://github.com/Mr-Psmith" target="_blank" rel="noreferrer">
                            <img src={gith} alt="Gith" className={classes.github}></img>
                        </a>
                        <a href="https://www.facebook.com/messages/t/100000633126813" target="_blank" rel="noreferrer">
                            <img src={facPic} alt="Face" className={classes.fac}></img>
                        </a>
                        <a href="https://instagram.com/..." target="_blank" rel="noreferrer">
                            <img src={inst} alt="Inst" className={classes.inst}></img>
                        </a>
                        <a href="https://twitter.com/messages/1581314633595494400-1581314633595494400?text=" target="_blank" rel="noreferrer">
                            <img src={twit} alt="Twit" className={classes.twitter}></img>
                        </a>
                    </div>
                </div>
                </motion.div>
            {/* </CSSTransition> */}
        </>
    );
}

export default Contact;
