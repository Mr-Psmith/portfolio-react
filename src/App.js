import { useState } from "react";

import classes from "./App.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Navi from "./components/right-navi";
import About from "./pages/about";
//import Connect from "./pages/connect";
import Welcome from "./pages/welcome";
import Works from "./pages/works";
import Modal from "./components/utility/modal";
import Backdrop from "./components/utility/backdrop";
import IframeOP from "./components/iframe/iframe-oldPortfolio";
import IframeTan from "./components/iframe/iframe-tan";
import Close from "./components/utility/close-x";
//import Transition from "react-transition-group/Transition";
import Contact from "./pages/contact";
import ModalFrame from "./components/utility/modal-frame";

//Add a onClick to the div above all the li-s in the nav for all the booleans in the menus
//Az emailt meg másolósra?
function App() {
    const [welcomeSlide, setWelcomeSlide] = useState(true);
    const [worksSlide, setWorksSlide] = useState(true);
    const [aboutSlide, setAboutSlide] = useState(true);
    const [contactSlide, setContactSlide] = useState(true);
    /* const [slide, setSlide] = useState(false); */

    const welcomeScreen = <Welcome contactButtonHandlerPr={contactButtonHandler} welcomeSlidePr={welcomeSlide} />;
    const worksScreen = <Works tanPrHandler={tanHandler} openOPHandlerPr={openOPHandler} worksHandlerppr={worksHandler} worksSlidePr={worksSlide} />;
    const aboutScreen = <About contactButtonHandlerPr={contactButtonHandler} aboutSlidePr={aboutSlide} />;
    const contactScreen = <Contact contactSlidePr={contactSlide} />;

    //const [contactBox, setContactBox] = useState(false);
    const [closeX, setCloseX] = useState(false);
    const [iframeOP, setIframeOP] = useState("");
    const [iframeTan, setIframeTan] = useState("");
    const [modalFrame, setModalFrame] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const [switchCards, setSwitchCards] = useState(welcomeScreen);
    
    function welcomeHandler() {
        setSwitchCards(welcomeScreen);
       /*  setSlide(true); */

        setWelcomeSlide(true);
        setWorksSlide(false);
        setAboutSlide(true);
        setContactSlide(false);
    }
    function worksHandler() {
        setSwitchCards(worksScreen);
        /* setSlide(true); */

        setWelcomeSlide(false);
        setWorksSlide(true);
        setAboutSlide(true);
        setContactSlide(false);
    }
    function aboutHandler() {
        setSwitchCards(aboutScreen);
        /* setSlide(true); */

        setWelcomeSlide(false);
        setWorksSlide(false);
        setAboutSlide(false);
        setContactSlide(false);
    }
    function connectHandler() {
        setSwitchCards(contactScreen);
        /* setSlide(true); */

        setWelcomeSlide(false);
        setWorksSlide(false);
        setAboutSlide(true);
        setContactSlide(true);
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
        //setContactBox(false);
    }
    function contactButtonHandler() {
        /* setContactBox(true);
    setBackdrop(true); */
        setSwitchCards(contactScreen);
    }

    return (
        <div className={classes.App}>
            <section className={classes.app90}>
                <section className={classes.header}>
                    <Header />
                </section>
                <section className={classes.body}>
                    {/* <Modal switchCardsPr={switchCards} slidePr={slide}/> */}
                    {switchCards}
                    {modalFrame ? <ModalFrame /> : ""}
                    {backdrop ? <Backdrop closeBackdrHandlerPr={closeBackdrHandler} /> : ""}
                    {iframeOP ? <IframeOP iframeOPPr={iframeOP} /> : ""}
                    {iframeTan ? <IframeTan /> : ""}
                    {closeX ? <Close closeXPr={closeX} closeAllHandlerPr={closeAllHandler} /> : ""}
                    {/* <Transition in={closeX} timeout={300}>
            {(state) => (
              <Close closeAllHandlerPr={closeAllHandler} closepr={state} />
            )}
          </Transition> */}
                    {/* {contactBox ? <Contact /> : ""} */}
                </section>
                <section className={classes.footer}>
                    <Footer />
                </section>
            </section>
            <section>
                <Navi welcomeHandlerPr={welcomeHandler} worksHandlerPr={worksHandler} aboutHandlerPr={aboutHandler} connectHandlerPr={connectHandler} />
            </section>
        </div>
    );
}

export default App;
