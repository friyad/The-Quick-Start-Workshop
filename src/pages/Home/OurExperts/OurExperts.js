import React from 'react';
import useExperts from '../../../Hooks/useExperts';
import Expert from './Expert/Expert';
import { Row } from 'react-bootstrap';

const OurExperts = () => {
    const { experts } = useExperts()


    return (
        <div className="container mt-5">
            <h1 className="text-start fw-bolder" id="OurExperts">Our Experts</h1>

            <Row xs={1} md={2} lg={4} className="g-1 mt-4">
                {experts &&
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    />)
                }
            </Row>

        </div>
    );
};

export default OurExperts;