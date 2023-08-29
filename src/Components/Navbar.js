import React,{useState} from 'react';
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <header >
     <nav>
        <h4 className='title'>TAMILNADU TOURISM</h4>
        <ul>
         <li>
           <Link to='/' className='link'>Home</Link>
          </li>
         <li>
           <Link to='/places' className='link'>Places to Visit</Link>
          </li>
         <li>
           <Link to='/Time' className='link'>Best Time to Visit</Link>
         </li>
         <li>Packages</li>
         <li>Destination</li>
         <li>Food</li>
        </ul>
      </nav>
    </header>
    
  )
}

export default Navbar