import React from 'react'
import './HeroHomeSection.css'
const HeroHomeSection = () => {
  return (
  
    <div className='box'> 
       <div className='first'>
           <div className='OpenBook'>
            <i className="fa-solid fa-book-open"></i>        
                 &nbsp;
              <p> Enroll, Explore & Evolve.</p>
           </div>

                  <br></br>

             <h1 className='h1'>UnLock Your <span className="highlight"> Potential </span>Through Knowledge.</h1>
              <br></br>
              <p className='lastp'>Wishing you a bright start and an even brighter future ahead. Here's to a fresh start with full of learning, laughter, and growth.  Welcome to <span className="highlight2">Bari High School!</span></p>
              &nbsp;&nbsp;
              <div className='btns'>
                   <button>ABOUT MORE<i className="fa-sharp fa-solid fa-arrow-right"></i></button>
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   <button>LEARN MORE<i className="fa-sharp fa-solid fa-arrow-right"></i></button>
              </div>
             { /*<div><button className="btn btn-success">Click Me</button></div>*/}
        </div>

         <div className='second'></div>
         </div>
    
  )
}

export default HeroHomeSection
