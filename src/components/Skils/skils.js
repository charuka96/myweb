import React from 'react'
import './skils.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skils = () => {
  return (

   <section id='skils'>

     <span className='skilTitle'>What I do </span>
     <span className='slkiDesc'> I am askiled and profetional and experience webdesigner </span>

    <div className='skilBars'>
        <div className='skilBar'>
            <img src={UIDesign} alt='UIDesign' className='skilBarImg'/>
            <div className='skilBarText'>
                <h2>UI/UX Design</h2>
                <p> This is a demo text,you can write your own content here </p>
            </div>
        </div>
        <div className='skilBar'>
            <img src={WebDesign} alt='WebDesig' className='skilBarImg'/>
            <div className='skilBarText'>
                <h2>Website Design</h2>
                <p>This is demo text can be canged while making prodution ready Website</p>
            </div>
        </div>
        <div className='skilBar'>
            <img src={AppDesign} alt='AppDesig' className='skilBarImg'/>
            <div className='skilBarText'>
                <h2>App Design</h2>
                <p>You can write text related to mobile app development</p>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Skils
