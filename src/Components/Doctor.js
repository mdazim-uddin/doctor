import React from 'react';
import './Doctors.css'
export default function Doctor ({doctor}) {
    return (
        <div className="col-md-4">
           <div className="paragrap">
           <p>{doctor.description}</p>
           <div className="row">
            <div className="col-md-6">
                <img src={doctor.img}></img>
            </div>
            <div className="col-md-6">
               <h3> {doctor.title}</h3>
                <h5>{doctor.name}</h5>
            </div>
           </div>
           </div>
        </div>
    );
};
