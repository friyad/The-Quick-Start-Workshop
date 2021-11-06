import React, { useRef, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Form, Button } from 'react-bootstrap';
import Diraction from './Diraction';

const Map = () => {
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const originRef = useRef('')
    const destinationRef = useRef('')

    const handleMapForm = e => {
        e.prevetDefault()
        setOrigin(originRef.current.value)
        setDestination(destinationRef.current.value)
    }




    const containerStyle = {
        width: '100%',
        height: '500px'
    };

    const center = {
        lat: 23.489275,
        lng: 451.003509,
    };

    return (
        <div className="text-start container mx-auto">
            <h1>Our Location</h1>
            <div className="text-center">
                <Form onSubmit={handleMapForm} className="d-flex w-50 mx-auto">
                    <Form.Control className="me-3" ref={originRef} type="text" placeholder="Start from" />
                    <Form.Control className="me-3" ref={destinationRef} type="text" placeholder="Destination" />
                    <Button variant="primary" type="submit">Search</Button>
                </Form>
            </div>



            {/* <div className="mt-4">
                <LoadScript
                    googleMapsApiKey="YOUR_API_KEY"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        { /* Child components, such as markers, info windows, etc. */}
            {/* </GoogleMap>
                </LoadScript >
            </div > * /} */}


            <div className="mt-4">
                <Diraction destination={destination} origin={origin} />
            </div>
        </div >
    );
};

export default Map;