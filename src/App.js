import { useState } from "react";

import classes from "./App.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Navi from "./components/right-navi";
import About from "./pages/about";
import Connect from "./pages/connect";
import Welcome from "./pages/welcome";
import Works from "./pages/works";

function App() {
  let welcomeScreen = <Welcome />;

  const [switchCards, setSwitchCards] = useState(welcomeScreen);

  function welcomeHandler() {
    setSwitchCards(welcomeScreen);
  }
  function worksHandler() {
    setSwitchCards(<Works tanPrHandler={tanHandler} />);
  }
  function aboutHandler() {
    setSwitchCards(<About />);
  }
  function connectHandler() {
    setSwitchCards(<Connect />);
  }

  function tanHandler() {
    console.log("TAN");
  }

  return (
    <div className={classes.App}>
      <section className={classes.app90}>
        <section className={classes.header}>
          <Header />
        </section>
        <section className={classes.body}>
          {switchCards}
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
