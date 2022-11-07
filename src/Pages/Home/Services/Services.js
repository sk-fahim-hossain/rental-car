import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => {setServices(data)})
    },[])
    return (
        <div className="container">
            <h3 className="text-primary text-center">Our services</h3>
            
            <div className="row">
            {
                services.map(service => <Service
                key={service.service_id}
                service = {service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;