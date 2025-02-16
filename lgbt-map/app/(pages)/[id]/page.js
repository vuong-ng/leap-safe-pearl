'use client'
import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'
import { useEffect, useState } from 'react';


const RequestPage = () => {
    const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });
    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            (error) => {
              console.error("Error getting location: ", error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      }, []);
    const containerStyle = {
        width: '100vw',
        height: '90vh',
    }
    const options = {
        mapId: "5a440add84dc74cd",
        mapTypeControl:false,
    }
      
    //   const center = {
    //     lat: -3.745,
    //     lng: -38.523,
    //   }
    const { isLoaded } = useJsApiLoader({
        id: '5a440add84dc74cd',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        fullscreenControl: false,
    });
    const pinIcon = {
        url: "../../public/location.png",
        scaledSize:{width:70, height:70},
    }

    function MarkerClicked(event) {
        console.log(event.l);
    }
    
      return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
              zoom={14}
              options={options}
          >
              <MarkerF
                  position={center}
                  //   icon={pinIcon}
                  visible
                  cursor="pointer"
                  label={{
                      text: "This is text label",
                      className:"text-3x1 test text-center text-black bg-yellow-500-"
                  }}
                  onClick={MarkerClicked}
              >
                  
              </MarkerF>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : (
        <></>
      )
}

export default RequestPage
