import classes from "./contact.module.css";
import facPic from "../img/fac.jpg";
import inst from "../img/insta.png";
import twit from "../img/twit.png";
import gith from "../img/github.png";
import pic from "../img/f037.png";
import "./transition.css"
import { motion } from "framer-motion";
import { useState } from "react";
import EmailCopyPopup from "../utility/email-copy-popup";

function Contact(props) {

    return (
        <>
            <motion.div animate={{ x: props.contactSlidePr ? "90%" : 0, opacity: props.contactSlidePr ? 1 : 0 }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} exit={{ x: "90%" }}>
                <div className={classes.contactMain}>
                    <div className={classes.contactUnvisibleblock1}>
                        <h1>You can write me on my email address!</h1>
                        <div className={classes.contactFormButton}>
                            <button onClick={props.emailButtonHandler}>psancthus@gmail.com</button>
                        </div>
                    </div>
                    {/* <div className={classes.contactUnvisibleblock1}>
                    <form method="get" encType="text/plain">
                        <div className={classes.contactUnvisibleblock1_1}>
                            <div className={classes.contactUnvisibleblock1_1__containers}>
                                <label className={classes.contactFormNameLabel} htmlFor="name">
                                    Name:
                                    <input type="text" name="name" />
                                </label>
                            </div>
                            <div className={classes.contactUnvisibleblock1_1__containers}>
                                <label className={classes.contactFormEmailLabel} htmlFor="email">
                                    Email:
                                    <input type="text" name="email" />
                                </label>
                            </div>
                        </div>
                        <div className={classes.contactUnvisibleblock1_1__containers}>
                            <label className={classes.contactMessageNamLabel}>Message:</label>
                            <textarea
                                className={classes.formContactMessageTextarea}
                                name="comments"
                                rows="12"
                                cols="30"
                                defaultValue={
                                    "This is a work in progress, as I am mainly a front-end developer, and I am still just training in back-end. But my email is psancthus@gmail.com - which you can copy easily at any time by clicking the link on the bottom of the page. Thank you for your understanding."
                                }
                            ></textarea>
                        </div>
                        <div className={classes.contactFormButtons}>
                            <button onClick={props.contactButtonHandlerPr}>Send</button>
                        </div>
                    </form>
                    </div> */}
                    <div className={classes.contactUnvisibleblock2}>
                        <div className={classes.picPlus__wrap}>
                            <img src={pic} alt="" className={classes.picPlus}></img>
                        </div>
                        <div className={classes.contactUnvisibleblock2__icons}>
                            <div className={classes.contactUnvisibleblock2__icons__h1}>
                                <h1 >You can find me on: </h1>
                            </div>
                            <div className={classes.contactUnvisibleblock2__icon_iconsSry}>
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
                    </div>
                </div>
            </motion.div>
            {/* </CSSTransition> */}
        </>
    );
}

export default Contact;
