import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} =useParams();
    console.log(serviceId)
    return (
        <div>
            <h2>welcome to service detail</h2>
            <p>id is </p>
            <div className="text-center">
                <Link to="/checkout"><button className="btn btn-primary">Proceed Checkout</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;