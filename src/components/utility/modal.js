import { useState } from "react";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Welcome from "../../pages/welcome";
import Works from "../../pages/works";
import classes from "./modal.module.css";
import CSSTransition from "react-transition-group/CSSTransition";
import "./transition.css";

function Modal(props) {
    /* const [welcomeSlide, setWelcomeSlide] = useState(true);
    const [worksSlide, setWorksSlide] = useState(true);
    const [aboutSlide, setAboutSlide] = useState(true);
    const [contactSlide, setContactSlide] = useState(true);

    //const cssClasses = ["main", props.show ? "BackdropOpen" : "BackdropClosed"];
    const [switchCards, setSwitchCards] = useState(welcomeScreen);

    const welcomeScreen = <Welcome contactButtonHandlerPr={contactButtonHandler} welcomeSlidePr={welcomeSlide} />;
    const worksScreen = <Works tanPrHandler={tanHandlerPPR} openOPHandlerPr={openOPHandlerPPr} worksHandlerppr={worksHandler} worksSlidePr={worksSlide} />;
    const aboutScreen = <About contactButtonHandlerPr={contactButtonHandler} aboutSlidePr={aboutSlide} />;
    const contactScreen = <Contact contactSlidePr={contactSlide} />;

    function contactButtonHandler() {

        setSwitchCards(contactScreen);
    }

    function welcomeHandlerProp() {
        setSwitchCards(welcomeScreen);
        setWelcomeSlide(true);
        setWorksSlide(false);
        setAboutSlide(false);
        setContactSlide(false);
    }
    function worksHandler() {
        setSwitchCards(worksScreen);
        setWelcomeSlide(false);
        setWorksSlide(true);
        setAboutSlide(false);
        setContactSlide(false);
    }
    function aboutHandler() {
        setSwitchCards(aboutScreen);
        setWelcomeSlide(false);
        setWorksSlide(false);
        setAboutSlide(true);
        setContactSlide(false);
    }
    function connectHandler() {
        setSwitchCards(contactScreen);
        setWelcomeSlide(false);
        setWorksSlide(false);
        setAboutSlide(false);
        setContactSlide(true);
    }
 */
    return (
        <>
            {/* <CSSTransition in={props.slide} timeout={700} mountOnEnter unmountOnExit classNames="slides"> */}
                <div className={classes.main}>{props.switchCardsPr}</div>
            {/* </CSSTransition> */}
        </>
    );
}

export default Modal;
