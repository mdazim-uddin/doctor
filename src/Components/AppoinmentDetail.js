import React from 'react';
import './AppoinmentDetail.css'
const AppoinmentDetail = (props) => {
const {title,time,paragrap}=props.ap
    return (
        
            <div className="col-md-4">
               <div className="appoinment-text">
               <h3>{title}</h3>
            <p>{time}</p>
            <span>{paragrap}</span>
              
               <div className="footer-btn">
              <button className="btn-primary">Book Appoinment</button>
             </div>
             </div>
        </div>
        // </div>
    );
};

export default AppoinmentDetail;