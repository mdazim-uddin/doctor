import React, { useState } from 'react';
import AppoinmentDetail from '../AppoinmentDetail';

const Appoinment = () => {
    const [appoinment,setAppoinment] =useState(
        [
       {
        id :'1',
        title :"teeth orthodontics",
        time:'8:00 AM - 9:00 AM',
        paragrap:'10 space available'
       },
       {
        id :'2',
        title :"teeth orthodontics",
        time:'8:00 AM - 9:00 AM',
        paragrap:'10 space available'
       },
       {
        id :'3',
        title :"teeth orthodontics",
        time:'8:00 AM - 9:00 AM',
        paragrap:'10 space available'
       },
       {
        id :'4',
        title :"teeth orthodontics",
        time:'8:00 AM - 9:00 AM',
        paragrap:'10 space available'
       },
       {
        id :'5',
        title :"teeth orthodontics",
        time:'8:00 AM - 9:00 AM',
        paragrap:'10 space available'
       },
       {
        id :'6',
        title :"teeth orthodontics",
        time:'8:00 AM - 9:00 AM',
        paragrap:'10 space available'
       }
        ]
    )

    return (
        <div className="container">
             <div className="appointment-area">
                 <div className="appoinment-top-text">
         <p>available appointment on february , 2020</p>
                 </div>
            <div className="row">
                {
     appoinment.map(appoinment=> <AppoinmentDetail ap={appoinment}></AppoinmentDetail>)
                }
            </div>
        </div>
        </div>
    );
};

export default Appoinment;