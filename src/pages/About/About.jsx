import React from 'react';
import "./About.css";
import aboutImg from "../../components/images/imageno1.jpg"

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="imagee" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi suscipit sit, ipsa possimus, consequatur quod praesentium hic accusamus est vero officiis, ex ratione perferendis repellendus ipsum tenetur dolorum molestias! Cum, hic incidunt? Ex, ratione dolorem architecto, quo dolor pariatur animi voluptas accusantium facilis suscipit sed.</p>
            <p className='fs-17'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda illum fugiat soluta vitae vero ipsa, ab reiciendis sint, alias aut ipsum est sit in dolore consectetur voluptate, sapiente dolorem maiores.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About;
