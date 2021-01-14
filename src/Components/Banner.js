import React from 'react';
import img from '../images/ductor.png'
import './Banner.css'
const Banner = () => {
    return (
      <div className="banner-area">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                   <div className="banner-img">
                   <img src={img} alt="ductor" className="img-fluid"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div className="banner-text">
                   <h2>APPOINTMENT</h2>
                    <h3>make on appointment today</h3>
                    <p>lorem ipsum dolor sit amet, consectetur
                    lorem ipsum dolor sit amet, consectetur
                    </p>
                   </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Banner;