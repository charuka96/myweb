import React from 'react';
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'


const Works = () => {
  return (
  <section id='works'>
  
  <h2 className='workstitle' >My Portfolio</h2>
  <span className='worksDesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </span>
  <div className='workImgs' >
    <img src= {portfolio1} alt=''className='worksImg'  />
    <img src= {portfolio2} alt=''className='worksImg'  />
    <img src= {portfolio3} alt=''className='worksImg'  />
    <img src= {portfolio4} alt=''className='worksImg'  />
    <img src= {portfolio5} alt=''className='worksImg'  />
    <img src= {portfolio6} alt=''className='worksImg'  />
  </div>
  <button className='workbtn' >See More</button>

  </section>

  )
}

export default Works;
