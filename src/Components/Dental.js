import React from 'react';
import dental from '../images/Mask Group 3.png'
import './Dental.css'
const Dental = () => {
    return (
        <div className="dental-area">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="dental-img">
                    <img src={dental} alt=""  className="img-fluid"  />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="header-text">
                        <h3>exceptional dental care , on our terms</h3>
                        <p>lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet, consectetur
                        </p>
                        <div className="dental-btn">
                        <button className="btn-primary">learn more</button>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        </div>
    );
};

export default Dental;