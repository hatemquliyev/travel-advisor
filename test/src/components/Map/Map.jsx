import 'bootstrap/dist/css/bootstrap.min.css'
import GoogleMapReact from 'google-map-react'
import React from 'react'
import './style.scss'
const Map = () => {
    const coordinates = { lat: 0, lng: 0}
    return(
        <div className='map-main'>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBnGzuHXM41_BDrEx4eGhyI4iJZ_SJfhrU'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                // options={''}
                // onChange={''}
                // onChildClick={''}
            >

                </GoogleMapReact>
        </div>
    )
}

export default Map