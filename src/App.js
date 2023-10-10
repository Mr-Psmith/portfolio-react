import { useState } from "react";

import classes from "./App.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Navi from "./components/right-navi";
import About from "./pages/about";
//import Connect from "./pages/connect";
import Welcome from "./pages/welcome";
import Works from "./pages/works";
import Modal from "./utility/modal";
import Backdrop from "./utility/backdrop";
import IframeOP from "./iframe/iframe-oldPortfolio";
import IframeTan from "./iframe/iframe-tan";
import Close from "./utility/close-x";
//import Transition from "react-transition-group/Transition";
import Contact from "./pages/contact";
import ModalFrame from "./utility/modal-frame";
import Terms from "./iframe/terms";
import Hamburger from "./components/mobile-nav-button";
import { AnimatePresence } from "framer-motion";
import MobileNavi from "./components/mobile-nav";

//Add a onClick to the div above all the li-s in the nav for all the booleans in the menus
//Az emailt meg másolósra?
function App() {

    /* const x =  */

    const [welcomeSlide, setWelcomeSlide] = useState(true);
    const [worksSlide, setWorksSlide] = useState(false);
    const [aboutSlide, setAboutSlide] = useState(false);
    const [contactSlide, setContactSlide] = useState(false);

    //const [contactBox, setContactBox] = useState(false); DELETE
    const [closeX, setCloseX] = useState(false);
    const [iframeOP, setIframeOP] = useState("");
    const [iframeTan, setIframeTan] = useState("");
    //const [iframeTerms, setIframeTerms] = useState("");
    const [modalFrame, setModalFrame] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    //const [switchCards, setSwitchCards] = useState(welcomeScreen); DELETE
    const [mobileNavOpen, setmobileNavOpen] = useState(false);
    
    function welcomeHandler() {
        //setSwitchCards(welcomeScreen); DELETE
        setWelcomeSlide(true);
        setWorksSlide(false);
        setAboutSlide(false);
        setContactSlide(false);
        setmobileNavOpen(false);
        setBackdrop(false);
    }
    function worksHandler() {
        //setSwitchCards(worksScreen); DELETE

        setWelcomeSlide(false);
        setWorksSlide(true);
        setAboutSlide(false);
        setContactSlide(false);
        setmobileNavOpen(false);
        setBackdrop(false);
    }
    function aboutHandler() {
        //setSwitchCards(aboutScreen); DELETE

        setWelcomeSlide(false);
        setWorksSlide(false);
        setAboutSlide(true);
        setContactSlide(false);
        setmobileNavOpen(false);
        setBackdrop(false);
    }
    function connectHandler() {
        //setSwitchCards(contactScreen); DELETE

        setWelcomeSlide(false);
        setWorksSlide(false);
        setAboutSlide(false);
        setContactSlide(true);
        setmobileNavOpen(false);
        setBackdrop(false);
    }

    function openOPHandler() {
        setModalFrame(true);
        setBackdrop(true);
        setIframeOP(true);
        setCloseX(true);
    }
    function tanHandler() {
        setModalFrame(true);
        setBackdrop(true);
        setIframeTan(true);
        setCloseX(true);
    }
    // function termsHandler() { 
    //     setModalFrame(true);
    //     setBackdrop(true);
    //     setIframeTerms(true);
    //     setCloseX(true);
    // };

    function closeAllHandler() {
        setBackdrop(false);
        setModalFrame(false);
        setIframeOP(false);
        setIframeTan(false);
        setCloseX(false);
    }
    function closeBackdrHandler() {
        setBackdrop(false);
        setModalFrame(false);
        setIframeOP(false);
        setIframeTan(false);
        setCloseX(false);
        setmobileNavOpen(false)
        //setContactBox(false);
    }
    function contactButtonHandler() {
        setWelcomeSlide(false);
        setAboutSlide(false);
        setContactSlide(true);
        //setContactBox(true); DELETE
        //setBackdrop(true); DELETE
        //setSwitchCards(contactScreen); DELETE
    }

    function hamburgerClickHandler() {
        setmobileNavOpen(true);
        setBackdrop(true);
    }


    const welcomeScreen = <Welcome contactButtonHandlerPr={contactButtonHandler} welcomeSlidePr={welcomeSlide} />;
    const worksScreen = <Works tanPrHandler={tanHandler} openOPHandlerPr={openOPHandler} worksHandlerppr={worksHandler} worksSlidePr={worksSlide} iframeOPPr={iframeOP} />;
    const aboutScreen = <About contactButtonHandlerPr={contactButtonHandler} aboutSlidePr={aboutSlide} />;
    const contactScreen = <Contact contactSlidePr={contactSlide} />;


    return (
        <div className={classes.App}>
            <section className={classes.appSection1}>
                <section className={classes.header}>
                    <Hamburger hamburgerClickHandlerPr={hamburgerClickHandler} />
                    <Header />
                    <AnimatePresence>
                    {mobileNavOpen ? <MobileNavi mobileNavOpenPr={mobileNavOpen} welcomeHandlerPr={welcomeHandler} worksHandlerPr={worksHandler} aboutHandlerPr={aboutHandler} connectHandlerPr={connectHandler}/> : ""}
                    </AnimatePresence>
                </section>
                <section className={classes.body}>
                    {/* <Modal switchCardsPr={switchCards} slidePr={slide}/> */}
                    {/* {switchCards} */}
                    <AnimatePresence>
                    {welcomeSlide ? welcomeScreen : ""}
                    </AnimatePresence>
                    <AnimatePresence>
                    {worksSlide ? worksScreen : ""}
                    </AnimatePresence>
                    <AnimatePresence>
                    {aboutSlide ? aboutScreen : ""}
                    </AnimatePresence>
                    <AnimatePresence>
                    {contactSlide ? contactScreen : ""}
                    </AnimatePresence>
                    {modalFrame ? <ModalFrame /> : ""}
                    {backdrop ? <Backdrop closeBackdrHandlerPr={closeBackdrHandler} /> : ""}
                    {iframeOP ? <IframeOP iframeOPPr={iframeOP} /> : ""}
                    {iframeTan ? <IframeTan /> : ""}
                    {/* {iframeTerms ? <Terms /> : ""} */}
                    <AnimatePresence>
                    {closeX ? <Close closeXPr={closeX} closeAllHandlerPr={closeAllHandler} /> : ""}
                    </AnimatePresence>
                    {/* {contactBox ? <Contact /> : ""} */}
                </section>
                <section className={classes.footer}>
                    <Footer /* termsHandlerPr={termsHandler} */ />
                </section>
            </section>
            <section>
                <Navi welcomeHandlerPr={welcomeHandler} worksHandlerPr={worksHandler} aboutHandlerPr={aboutHandler} connectHandlerPr={connectHandler} />
            </section>
        </div>
    );
}

export default App;
