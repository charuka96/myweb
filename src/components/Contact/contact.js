import React, { useRef } from 'react';
import './contact.css';
import Walmart  from '../../assets/walmart.png'
import Adobe  from '../../assets/adobe.png'
import Microsoft  from '../../assets/microsoft.png'
import Facebook  from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagrameIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qau89vd', 'template_4k2e0wl', form.current, 'StSat4VFK1RYG-ZsJGmew')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactPage'>
        <div id='clients' >
            <h1 className='contactPageTitle' >My Clients  
            </h1>

            <p className='clientDesc' >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            
              <div className='clientImgs' >

                <img  src= {Walmart} alt='' className='clientImg'/>
                <img  src= {Adobe} alt='' className='clientImg' />
                <img  src= {Microsoft} alt='' className='clientImg'/>
                <img  src= {Facebook} alt='' className='clientImg'/>

              </div>
             
        </div>

        <div id='contact' >
            <h1  className='contactPageTitle' >Contact Me</h1>
            <span className='contactDsc' >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}  >
                <input type='text' className='name' placeholder='Your name ' name='your_name' />
                <input type='email' className='email' placeholder='Your email' name='your_email' />
                <textarea name='massage'  rows="5"  placeholder='your massage'  className='msg'  ></textarea>
                <button  type='submit' className='submitBtn' value='send'  >Submit</button>

                </form>
                <dvi className = "links" >

                    <img src={FacebookIcon} alt='Facebook' className='link'/>
                    <img src={TwitterIcon} alt='twitter' className='link'/>
                    <img src={YoutubeIcon} alt='youtube' className='link'/>
                    <img src={InstagrameIcon} alt='Instragrame' className='link'/>

                </dvi>
           
        </div>

    </section>
  )
}

export default Contact
