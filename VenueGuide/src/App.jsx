import './App.css'
import Navbar from './Componets/Navbar.jsx';
import Card from './Componets/Card.jsx';
import Card2 from './Componets/Card2.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import UnCarousel from './Componets/CarouselUncontrolled.jsx'
import Footer from './Componets/Footer.jsx';


function App() {
  return(
    <div>
      <Navbar />
      <UnCarousel />
      <h1 id='title' className='styleText'>Meeting and Event Venue Guide</h1>
      <section className="Meeting-Section">
        <section className="venue-grid styleText">
          <Card2 className='styleText'/>
          <Card2 className='styleText'/>
          <Card2 className='styleText'/>
          <Card2 className='styleText'/>
          <Card2 className='styleText'/>
          <Card2 className='styleText'/>
          <Card2 className='styleText'/>
          <Card2 className='styleText'/>
          <Card2 className='styleText'/>
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default App
