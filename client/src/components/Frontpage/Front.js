import React from 'react'
import './Front.css'
import AOS from 'aos'

const Front = () => {
  AOS.init({
    duration: 800,
    offset:150,
});
  return (
    <>
    <div className='frontbody'>
      <h1 className='frontheading'data-aos="zoom-in" >SHINE WITH<p> UP2MARK...</p></h1>
      <h2 className="subhead" data-aos="zoom-in" data-aos-delay="300">Course</h2>
      <h2 className="subhead"data-aos="zoom-in" data-aos-delay="400">Knowledge</h2>
      <h2 className="subhead"data-aos="zoom-in" data-aos-delay="500">Leaders</h2>
      <h2 className="subhead"data-aos="zoom-in" data-aos-delay="600">And Many more...</h2>
    </div>
    
    </>
  )
}

export default Front
