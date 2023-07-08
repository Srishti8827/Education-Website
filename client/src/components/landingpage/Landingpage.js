import React from 'react'
import './landingpage.css'
import AOS from 'aos'
const Landingpage = () => {
  AOS.init({
    duration: 800,
    offset:150,
});
  return (
    <>
      <div className="landingcontainer"  data-aos="zoom-in">
      <h1 className='landingheading'>Cources -</h1>
      </div>
      <div className="landcardcontainer">
        <div className="landcard" data-aos="zoom-in">
            <div className="landcardimgs">
                <img src={require("./his.jpg")} alt="" />
            </div>
            <div className="landcardtitle">
                <h2>History</h2>
            </div>
            <div className="landcarddetail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati, praesentium debitis impedit adipisci totam harum magni .</p>
                <a href="#">Apply here</a>
            </div>
        </div>


        <div className="landcard"data-aos="zoom-in">
            <div className="landcardimgs">
                <img src={require("./cp.jpg")} alt="" />
            </div>
            <div className="landcardtitle">
                <h2>Computer</h2>
            </div>
            <div className="landcarddetail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati, praesentium debitis impedit adipisci totam harum magni .
                </p> <a href="#">Apply here</a>
              
            </div>
        </div>


        <div className="landcard"data-aos="zoom-in">
            <div className="landcardimgs">
                <img src={require("./upsc.jpg")} alt="" />
            </div>
            <div className="landcardtitle">
                <h2>UPSC</h2>
            </div>
            <div className="landcarddetail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati, praesentium debitis impedit adipisci totam harum magni </p>
                <a href="#">Apply here</a>
            </div>
        </div>


        <div className="landcard"data-aos="zoom-in">
            <div className="landcardimgs">
                <img src={require("./dr.jpg")} alt="" />
            </div>
            <div className="landcardtitle">
                <h2>Biology</h2>
            </div>
            <div className="landcarddetail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati, praesentium debitis </p>
                <a href="#">Apply here</a>
            </div>
        </div>


        <div className="landcard"data-aos="zoom-in">
            <div className="landcardimgs">
                <img src={require("./maths.jpg")} alt="" />
            </div>
            <div className="landcardtitle">
                <h2>Maths course</h2>
            </div>
            <div className="landcarddetail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati, praesentium debitis impedit adipisci totam harum magni </
                p>  <a href="#">Apply here</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Landingpage