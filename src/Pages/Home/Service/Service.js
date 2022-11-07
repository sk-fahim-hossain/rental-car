import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
   const  {id,title} = service;

    const naviagte = useNavigate();

    const handleNavigate =(id)=>{
        naviagte(`/services/${id}`)
        console.log(id)
    }
    console.log(service._id)
    return (
        <div id="services" className="col-sm-12 col-md-6 col-lg-4 g-2 mr-3">
           <div style={{overflow: 'hidden'}}>
           <h2>{service.title}</h2>
            <img src={service.img} alt="" />
            <p><small>${service.price}</small></p>
            <button className="btn btn-primary" onClick={()=>handleNavigate(service._id)}>Details</button>
           </div>
        </div>
    );
};

export default Service;