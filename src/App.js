import {useState} from "react";

import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Navi from './components/right-navi';
import About from './pages/about';
import Connect from './pages/connect';
import Welcome from './pages/welcome';
import Works from './pages/works';

function App() {
  let welcomeScreen = <Welcome />;

  const [switchCards, setSwitchCards] = useState(welcomeScreen);

  function welcomeHandler() {
    setSwitchCards(welcomeScreen);
  };
  function worksHandler() {
    setSwitchCards(<Works />);
  };
  function aboutHandler() {
    setSwitchCards(<About />);
  };
  function connectHandler() {
    setSwitchCards(<Connect />);
  };
  return (
      <div className="App">
        <section className="header">
          <Header />
          <Navi welcomeHandlerPr={welcomeHandler} worksHandlerPr={worksHandler} aboutHandlerPr={aboutHandler} connectHandlerPr={connectHandler} />
        </section>
        <section className='body'>
          {switchCards}
          
        </section>
        <section className='footer'>
          <Footer />
        </section>
      </div>
  );
}

export default App;