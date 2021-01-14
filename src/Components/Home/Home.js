import React from 'react';
import {Link} from 'react-router-dom';
// import header from '../../images/Mask Group 2.png'
import img from '../../images/Mask Group 1.png'
import Banner from '../Banner';
import Dental from '../Dental';
import Docturs from '../Docturs';
import Footer from '../Footer';
import Service from '../Service';
import header from '../../images/Mask Group 3.png'
import Contuct from '../Contuct';
import './Home.css';
import OurDoctor from '../OurDoctor';
const Home = () => {
    return (
        <>
    <section 
 className="header-area">
            <div className="header-overlay">
            </div>
                {/* Container start */}
                <div className="container">
                     {/* row start */}
                    <div className="row">
                         {/* col md 6 start */}
                        <div className="col-md-6">
                            <div className="header-left-text">
                                <h3>your new smile start heare</h3>
                                <p>lorem ipsum dolor sit amet, consectetur
                                    orem ipsum dolor sit amet, consectetur
                                    orem ipsum dolor sit amet, consectetur
                                </p>
                                     <Link to='/calender'>
                                    <button className="btn-primary">GET APPOINTMENT</button>
                                    </Link>
                            </div>
                        </div>
                         {/* col md 6 ends */}

                        <div className="col-md-6">
                            <div className="header-left-img">
                                <img src={img} alt="img" className="img-fluid" />
                            </div>
                        </div>

                    </div>
                     {/* row ends */}
                     <div className="header-footer">
                     <div className="row">
                            <div className="col-md-4"> 
                                <div className="header-icon">
                                <div className="row">
                                    <div className="col-md-4">
                                    <div className="header-icon1">
                                    <i class="far fa-clock"></i>
                                </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="header-icon-text">
                                    <h5>opeaning Hourse</h5>
                                <p>lorem ipsum dolor sit amet, consectetur adip</p>
                                </div>
                                </div>
                                </div>
                                </div>
                         </div>
                         <div className="col-md-4"> 
                                <div className="header-icon">
                                <div className="row">
                                    <div className="col-md-4">
                                    <div className="header-icon1">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="header-icon-text">
                                    <h5>opeaning Hourse</h5>
                                <p>lorem ipsum dolor sit amet, consectetur adip</p>
                                </div>
                                </div>
                                </div>
                                </div>
                         </div>
                         <div className="col-md-4"> 
                                <div className="header-icon">
                                <div className="row">
                                    <div className="col-md-4">
                                    <div className="header-icon1">
                                    <i class="fas fa-phone-volume"></i>
                                </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="header-icon-text">
                                    <h5>opeaning Hourse</h5>
                                <p>lorem ipsum dolor sit amet, consectetur adip</p>
                                </div>
                                </div>
                                </div>
                                </div>
                         </div>
                         </div>
                </div>
                </div>
                 {/* Container ends */}
           
        </section>

        <section>
            <Service></Service>
        </section>
        <section>
        <Dental></Dental>
        <Banner></Banner>
        {/* <Docturs></Docturs> */}
        <Docturs></Docturs>
        <OurDoctor></OurDoctor>
        {/* <OurDoctor></OurDoctor> */}
        <Contuct></Contuct>
        
        </section>
        <Footer></Footer>
        </>

        
    );
};

export default Home;