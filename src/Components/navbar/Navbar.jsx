 import React from 'react'
 import "./Navbar.css"
 import logo from "../../assets/BHSLogoFinal.jpg"
 import {Link} from "react-router-dom"
 
 
 const Navbar = () => {
   return ( 
    <div className='navbar'>      
        <div className='navbar1'>
            <img src={logo}/>
              &nbsp; &nbsp;&nbsp;  
              <p>&nbsp;Bari Gov't <br></br>High School</p>
        </div> 
        <div className='navbar2'>
            <ul>
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/gallery">Gallery</Link></li> 
              <li>< Link to="/academics">Academics</Link></li>
              <li>< Link to="/admission">Admission</Link></li>
              <li>< Link to="/contact">Contact</Link></li> 
            </ul>
        </div>
        <div className='navbar3'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className='navbar4'>   
          <i className="fa-solid fa-right-to-bracket"></i>
          <span className='navbar5' style={{ marginLeft: "4px" }}>Login</span>     
        </div>
       
     </div>

   )
 }
 
 export default Navbar
 