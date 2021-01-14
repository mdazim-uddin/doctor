import React, { useState } from 'react';
import Title from './Title'
import {FaHiking,FaShuttleVan,FaBeer,FaCocktail } from 'react-icons/fa';
import './Services.css'
const Service = () => {
const [service,serService] =useState(
    [
        {
icon: <FaHiking/>,
title:'endless Hiking',
info: 'lorem ipsum dolor sit ametLormrem  rem ipsum dolor sit ametLor dolor sit ametLo'
},
{
icon: <FaShuttleVan/>,
title:'free Shuttle',
info: 'lorem ipsum dolor sit ametLormrem  rem ipsum dolor sit ametLor dolor sit ametLo'
  },
{
icon: <FaBeer/>,
title:'Strongets Beer',
info: 'lorem ipsum dolor sit ametLormrem  rem ipsum dolor sit ametLor dolor sit ametLo'
},
{
icon: <FaCocktail></FaCocktail>,
title:'free coctails',
info: 'lorem ipsum dolor sit ametLormrem  rem ipsum dolor sit ametLor dolor sit ametLo'
          }
    ]
)
    return (
        <section className="services">
                <Title title="our servicess"/>
                <div className="services-center">
                    {
                    service.map((pd ,index )=> {
                   return (
                    <article key={index} className="services">
                    <span>{pd.icon}</span>
                     <h6>{pd.title}</h6>
                     <p>{pd.info}</p>
                 </article>
                   );
                    })}
                </div>
            </section>
    );
};

export default Service;
