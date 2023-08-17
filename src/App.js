import './App.css';
import Footer from './components/footer';
import Welcome from './pages/welcome';

function App() {
  return (
    <div className="App">
      <section className="header">
        <Welcome />
      </section>
      <section className='body'>
        <p className="App-notlink">
         work in progress
        </p>
        <a href='https://psancthus.com/' className="App-link">
          old portfolio
        </a>
      </section>
      <section className='footer'>
        <Footer />
      </section>
    </div>
  );
}

export default App;