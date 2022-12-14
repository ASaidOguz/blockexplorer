import React from 'react'
import { Routes,Route,Link,NavLink } from 'react-router-dom';
import logo from './assets/birdy.png'
import etherlogo from './assets/ethereumlogo.png'
export default function Header() {
  return (
    <div className='App-header'>
      <div className='App'><img src={logo} alt='logo'/><img src={etherlogo} alt='etherlogo'/></div>
      <nav>
      
      <div ><Link to='/'><button src={logo}>Home</button></Link></div>
      <div ><Link to='/contact'><button src={logo}>Contact</button></Link></div>
    </nav>
    </div>
  )
}
