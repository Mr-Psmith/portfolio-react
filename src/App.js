import { useState } from "react";
import classes from "./App.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Navi from "./components/right-navi";
import About from "./pages/about";
import Welcome from "./pages/welcome";
import Works from "./pages/works";
import Backdrop from "./utility/backdrop";
import IframeOP from "./iframe/iframe-oldPortfolio";
import IframeTan from "./iframe/iframe-tan";
import Close from "./utility/close-x";
import Contact from "./pages/contact";
import ModalFrame from "./utility/modal-frame";
import Hamburger from "./components/mobile-nav-button";
import { AnimatePresence } from "framer-motion";
import MobileNavi from "./components/mobile-nav";
import Loader from "./pages/loader";
import EmailCopyPopup from "./utility/email-copy-popup";

//Add a onClick to the div above all the li-s in the nav for all the booleans in the menus
//Az emailt meg másolósra?
function App() {
    const [welcomeSlide, setWelcomeSlide] = useState(true);
    const [worksSlide, setWorksSlide] = useState(false);
    const [aboutSlide, setAboutSlide] = useState(false);
    const [contactSlide, setContactSlide] = useState(false);

    const [loader, setLoader] = useState(true);
    const [closeX, setCloseX] = useState(false);
    const [iframeOP, setIframeOP] = useState("");
    const [iframeTan, setIframeTan] = useState("");
    const [modalFrame, setModalFrame] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const [mobileNavOpen, setmobileNavOpen] = useState(false);
    const [text] = useState('psancthus@gmail.com');
    const [emailCopyPopup, setEmailCopyPopup] = useState(false);

    function welcomeHandler() {
        setWelcomeSlide(true);
        setWorksSlide(false);
        setAboutSlide(false);
        setContactSlide(false);
        setmobileNavOpen(false);
        setBackdrop(false);
    }
    function worksHandler() {
        setWelcomeSlide(false);
        setWorksSlide(true);
        setAboutSlide(false);
        setContactSlide(false);
        setmobileNavOpen(false);
        setBackdrop(false);
    }
    function aboutHandler() {
        setWelcomeSlide(false);
        setWorksSlide(false);
        setAboutSlide(true);
        setContactSlide(false);
        setmobileNavOpen(false);
        setBackdrop(false);
    }
    function connectHandler() {
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
    }
    function contactButtonHandler() {
        setWelcomeSlide(false);
        setAboutSlide(false);
        setContactSlide(true);
    }

    function hamburgerClickHandler() {
        setmobileNavOpen(true);
        setBackdrop(true);
    }

    const emailCopyPopupHandler = async () => {
        setEmailCopyPopup(true);
        setTimeout(() => {
            setEmailCopyPopup(false);
        }, 2500);
        await navigator.clipboard.writeText(text);
    }


    //To unmount the loader after firing
    setTimeout(() => {
        setLoader(false);
    }, 3700);

    const welcomeScreen = <Welcome contactButtonHandlerPr={contactButtonHandler} welcomeSlidePr={welcomeSlide} />;
    const worksScreen = <Works tanPrHandler={tanHandler} openOPHandlerPr={openOPHandler} worksHandlerppr={worksHandler} worksSlidePr={worksSlide} iframeOPPr={iframeOP} />;
    const aboutScreen = <About contactButtonHandlerPr={contactButtonHandler} aboutSlidePr={aboutSlide} />;
    const contactScreen = <Contact contactSlidePr={contactSlide} emailButtonHandler={emailCopyPopupHandler} />;


    return (
        <div className={classes.App}>
            <section className={classes.appSection1}>
                <section className={classes.header}>
                    {!mobileNavOpen ? <Hamburger hamburgerClickHandlerPr={hamburgerClickHandler} /> : ""}
                    <Header />
                    <AnimatePresence>
                        {mobileNavOpen ? <MobileNavi mobileNavOpenPr={mobileNavOpen} welcomeHandlerPr={welcomeHandler} worksHandlerPr={worksHandler} aboutHandlerPr={aboutHandler} connectHandlerPr={connectHandler} /> : ""}
                    </AnimatePresence>
                </section>
                <section className={classes.body}>
                    {loader ? <Loader /> : ""}
                    {/*  With animatepresence there is a visual glich sadly */}
                    {/* <AnimatePresence>*/}
                    {welcomeSlide ? welcomeScreen : ""}
                    {/* </AnimatePresence> */}
                    {/* <AnimatePresence> */}
                    {worksSlide ? worksScreen : ""}
                    {/* </AnimatePresence>
                    <AnimatePresence> */}
                    {aboutSlide ? aboutScreen : ""}
                    {/* </AnimatePresence>
                    <AnimatePresence> */}
                    {contactSlide ? contactScreen : ""}
                    {/* </AnimatePresence> */}
                    {modalFrame ? <ModalFrame /> : ""}
                    {backdrop ? <Backdrop closeBackdrHandlerPr={closeBackdrHandler} /> : ""}
                    {iframeOP ? <IframeOP iframeOPPr={iframeOP} /> : ""}
                    {iframeTan ? <IframeTan /> : ""}
                    <AnimatePresence>
                        {closeX ? <Close closeXPr={closeX} closeAllHandlerPr={closeAllHandler} /> : ""}
                    </AnimatePresence>
                    {emailCopyPopup ? <EmailCopyPopup /> : ""}
                </section>
                <section className={classes.footer}>
                    <Footer /* termsHandlerPr={termsHandler} */ emailCopyHandler={emailCopyPopupHandler} />
                </section>
            </section>
            <section>
                <Navi welcomeHandlerPr={welcomeHandler} worksHandlerPr={worksHandler} aboutHandlerPr={aboutHandler} connectHandlerPr={connectHandler} />
            </section>
        </div>
    );
}

export default App;
