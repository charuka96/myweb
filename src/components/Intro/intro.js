import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';




const Intro = () => {
  return (

  <section id = "intro">


<div className='introcontent'>

<span className='hellow'>Hellow,</span>
<span className='introText'>I'm < span className='introName'>thisaru </span><br/>website Designer</span>
<p className='introPara'> I am a skill Designer MERN stack </p>
<Link><button className='btn' ><img src={btnImg} alt='hireme' className='btnImg' />Hire Me</button></Link>
</div>



<img src={bg} alt="bg" className='bg'/>

  </section>
  )
}

export default Intro;
