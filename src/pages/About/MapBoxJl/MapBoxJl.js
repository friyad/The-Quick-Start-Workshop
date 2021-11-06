import React, { useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'



const MapBoxJl = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicml5YWRob3NzYWluMjAwNCIsImEiOiJja3ZldDY2M3ExYjMyMnZxaXAwMmt6d3E3In0.IITYYzmOjDUxCaRJVEDdZw';

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [91.003486, 23.489285],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])


    return (
        <div>
            <h1>Our Location</h1>
            <div id="map" style={{ position: 'absolute', width: '100%', height: '400px' }}></div>

        </div>
    );
};

export default MapBoxJl;