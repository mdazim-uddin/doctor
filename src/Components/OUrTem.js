import React from 'react';
import './OueTem.css'
export default function OUrTem ({tem}) {
// const {name,img,phon}=props.tem
    return (
        <div className="col-md-4">
           <div  className="OurDoctor-area">
              <div className="tem-area">
            <div className="tem-member">
            <img src={tem.img} className="img-fluid"/>
            <div className="teem-overlay">
             {/* <ul>
             <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
            </ul> */}
        </div>
        </div>
        <div class="teem-member-info">
          <h3>{tem.name}</h3>
          <span>{tem.phone}</span>
 					</div>
        
        </div>
        </div>
        </div>
    );
};

// export default OUrTem;