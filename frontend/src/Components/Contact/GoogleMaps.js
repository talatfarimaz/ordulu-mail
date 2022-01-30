import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const GoogleMaps = () => {

    const mapStyles = {
        height: "60vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 39.94876223257811, lng: 32.77376260120826
    }
    const onLoad = marker => {
        console.log('marker: ', marker)
    }

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyDMJyTDD-ovSmZeJva8HyxqDgXjadUOt2E'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={18}
                center={defaultCenter}
            >
                <Marker  position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    )
}

export default GoogleMaps;
