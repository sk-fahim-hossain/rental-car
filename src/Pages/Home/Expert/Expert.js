import React from 'react';

const Expert = ({ expert }) => {
    return (
     
            <div className="card  m-2 col-lg-4 col-md-6 col-sm-12" style={{ width: "20rem" }}>
                <img src={expert.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{expert.name}</h5>
                    <p className="card-text">{expert.description}</p>
                    <button className="btn btn-primary">Show more</button>
                </div>
            </div>
     
    );
};

export default Expert;