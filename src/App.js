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

function App() {
  const welcomeScreen = <Welcome contactButtonHandlerPr={contactButtonHandler} />;
  const worksScreen = <Works tanPrHandler={tanHandler} openOPHandlerPr={openOPHandler} />;
  const aboutScreen = <About contactButtonHandlerPr={contactButtonHandler}/>;
  const contactScreen = <Contact />;

  //const [contactBox, setContactBox] = useState(false);
  const [closeX, setCloseX] = useState(false);
  const [iframeOP, setIframeOP] = useState("");
  const [iframeTan, setIframeTan] = useState("");
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [switchCards, setSwitchCards] = useState(welcomeScreen);

  function welcomeHandler() {
    setSwitchCards(welcomeScreen);
  }
  function worksHandler() {
    setSwitchCards(worksScreen);
  }
  function aboutHandler() {
    setSwitchCards(aboutScreen);
  }
  function connectHandler() {
    setSwitchCards(contactScreen);
  }

  function openOPHandler() {
    setModal(true);
    setBackdrop(true);
    setIframeOP(true);
    setCloseX(true);
  }
  function tanHandler() {
    setModal(true);
    setBackdrop(true);
    setIframeTan(true);
    setCloseX(true);
  }

  function closeAllHandler() {
    setBackdrop(false);
    setModal(false);
    setIframeOP(false);
    setIframeTan(false);
    setCloseX(false);
  }
  function closeBackdrHandler() {
    setBackdrop(false);
    setModal(false);
    setIframeOP(false);
    setIframeTan(false);
    setCloseX(false);
    //setContactBox(false);
  }
  function contactButtonHandler() {
    /* setContactBox(true);
    setBackdrop(true); */
    setSwitchCards(contactScreen);
  };

  return (
    <div className={classes.App}>
      <section className={classes.app90}>
        <section className={classes.header}>
          <Header />
        </section>
        <section className={classes.body}>
          {switchCards}
          {modal ? <Modal /> : ""}
          {backdrop ? (
            <Backdrop closeBackdrHandlerPr={closeBackdrHandler} />
          ) : (
            ""
          )}
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
        <Navi
          welcomeHandlerPr={welcomeHandler}
          worksHandlerPr={worksHandler}
          aboutHandlerPr={aboutHandler}
          connectHandlerPr={connectHandler}
        />
      </section>
    </div>
  );
}

export default App;
