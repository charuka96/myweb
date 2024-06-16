import React, { useState } from 'react';
import "./navbar.css";
import  logo  from "../../assets/logo.png";
import { Link } from 'react-scroll';
import contacImg from "../../assets/contact.png";
import menu from '../../assets/menu.png';


function Navbar() {
  const [showMenu, setShowMenu ]= useState(false);
  return (

<nav className='navbar'>
<img src={logo} alt='logo' className='logo'/>
<div className='destopMenu'>

   <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuItemList' >Home</Link>
   <Link activeClass='active' to='skils' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuItemList' >About</Link>
   <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuItemList' >portfolio</Link>
   <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuItemList' >Clients</Link>

</div>

<button className='desktopMenuBtn' onClick={()=>{
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});

}}  >

 <img src={contacImg} alt='logo' className='destopMenuImg'/>
Contact Me

<img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
<div className='naveMenu'  style={{display:showMenu? 'flex':'none'}} >

   <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ItemList' onClick={()=>showMenu(false)} >Home</Link>
   <Link activeClass='active' to='skils' spy={true} smooth={true} offset={-100} duration={500} className='ItemList' onClick={()=>showMenu(false)} >About</Link>
   <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className= 'ItemList' onClick={()=>showMenu(false)} >Clients</Link>
   <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ItemList' onClick={()=>showMenu(false)} >Contact</Link>

</div>
</button>

</nav>

  )
}

export default Navbar
