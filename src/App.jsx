import { NavHashLink } from 'react-router-hash-link';
import './App.css';
// import Button from './components/Button';
import Header from './components/Header';
import Banner from './page/Banner';
import Contact from './page/Contact';
import Lab from './page/Lab';
import Offer from './page/Offer';
import Price from './page/Price';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{paddingTop:'64px'}}>
        <Banner />
        <Lab />
        <Offer />
        <Price />
        <Contact />
      </div>
      <div className='footer'>
        <NavHashLink to='/Landing#contact' className='blackBtn'>Get a Free Demo</NavHashLink>
        <a href='tel:+18008917834' className='whiteBtn'>Call Us</a>
      </div>
    </div>
  );
}

export default App;
