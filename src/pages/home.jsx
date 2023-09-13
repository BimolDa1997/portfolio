import react from 'react'
import './../css/Body.css'
import Header from './Header'
import Footer from './Footer'

function Home(){
    return(
        <div className='Home'>
            
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <h1>Alex Smith</h1>
      <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
  </section>
        </div>
    )
}

export default Home