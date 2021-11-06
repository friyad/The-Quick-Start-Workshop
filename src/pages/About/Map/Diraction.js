import React, { useState } from 'react';
import { DirectionsRenderer, GoogleMap, LoadScript, DirectionsService } from '@react-google-maps/api';

const location = {
    lat: 23.489275,
    lng: 451.003509,
};

const Diraction = ({ origin, destination }) => {
    const [response, setResponse] = useState(null)

    const directionsCallback = res => {
        if (res !== null) {
            setResponse(res)
        }
    }

    return (
        <div>
            <LoadScript
                googleMapsApiKey="YOUR_API_KEY"
            >
                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '400px',
                        width: '100%'
                    }}
                    // required
                    zoom={2}
                    // required
                    center={location}
                >
                    <DirectionsService
                        // required
                        options={{
                            destination: 'this.state.destination',
                            origin: 'this.state.origin',
                            travelMode: 'this.state.travelMode'
                        }}
                        // required
                        callback={directionsCallback}
                    />

                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}
                                // optional
                                onLoad={directionsRenderer => {
                                    console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                                }}
                                // optional
                                onUnmount={directionsRenderer => {
                                    console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                                }}
                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Diraction;