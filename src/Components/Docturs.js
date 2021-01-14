import React  from 'react';
import Doctor from './Doctor';

const Docturs = () => {
    const doctor = [
        {   id: '1',
            title: 'dental',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.Standard Single Rooms are designed in open -concept living area and have many facilities',
            img: 'https://i.imgur.com/E8aPe0J.png',
            name:'azim uddin'
        },
        {   id: '2',
            title: 'dental',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.Standard Single Rooms are designed in open -concept living area and have many facilities',
            img: 'https://i.imgur.com/eMdHbbC.png',
            name:'azim uddin'
        },
        {   id: '3',
            title: 'dental',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.Standard Single Rooms are designed in open -concept living area and have many facilities',
            img: 'https://i.imgur.com/noXss6S.png',
            name:'azim uddin'
        },
    ]
    return (
       <>

        <div className="container">
           <div className="doctor-text">
           <h2>whats our patients says</h2>
           </div>
            <div className="row">
                {
     doctor.map(dc=><Doctor id={dc.id} doctor={dc} ></Doctor>)   
                }
            </div>
        </div>

       </>
    )
};

export default Docturs;