import React from 'react';
import OUrTem from './OUrTem';

const OurDoctor = () => {

    const OurDoctor = [
        {   id: '1',
            title: 'dental',
            phone:'01881502157',
            img: 'https://i.imgur.com/A3NuwwZ.png',
            name:'azim uddin'
        },
        {   id: '2',
        title: 'dental',
        phone:'01881502157',
        img: 'https://i.imgur.com/A3NuwwZ.png',
        name:'azim uddin'
        },
        {   id: '3',
        title: 'dental',
        phone:'01881502157',
        img: 'https://i.imgur.com/A3NuwwZ.png',
        name:'azim uddin'
        },
    ]

    return (
        <div className="container">
            <div className="row">
                {
                 OurDoctor.map(tm=> <OUrTem  tem={tm}></OUrTem>)
                }
            </div>
        </div>
    );
};

export default OurDoctor;