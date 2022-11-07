import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} =useParams();
    console.log(serviceId)
    return (
        <div>
            <h2>welcome to service detail</h2>
            <p>id is </p>
        </div>
    );
};

export default ServiceDetail;