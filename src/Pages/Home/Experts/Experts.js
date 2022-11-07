import React from 'react';
import expert1 from '../../../images/experts/expert- 1.jpg';
import expert2 from '../../../images/experts/expert- 3.jpg';
import expert3 from '../../../images/experts/expert- 2.jpg';
import expert4 from '../../../images/experts/expert- 4.jpg';
import expert5 from '../../../images/experts/expert- 5.jpg';
import expert6 from '../../../images/experts/expert- 6.jpg';

import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { name: 'Abraham', id: '01', description: 'nturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ', img: expert1 },
        { name: 'Dhoni', id: '02', description: 'nturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ', img: expert2 },
        { name: 'Krishor ROy', id: '03', description: 'nturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ', img: expert3 },
        { name: 'Kadir ushra', id: '04', description: 'nturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ', img: expert4 },
        { name: 'filladi', id: '05', description: 'nturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ', img: expert5 },
        { name: 'NIlkos juss', id: '06', description: 'nturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ', img: expert6 }
    ]
    return (
        <div id='experts' className="container">

            <h2 className="text-center text-primary">Our Experts</h2>
            <div className="row justify-content-center">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>

        </div>
    );
};

export default Experts;