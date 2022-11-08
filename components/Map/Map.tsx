import React from "react";
import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }:any) => <a ><img src="https://bitesizeinc.com/static/img/map-pin.d2e6b9c.png" alt="" /></a>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 10,
  };
  
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDa1seuQ4dEGiP6c1FlihqQcLEZpBI2jc8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChildMouseUp={() => {
          console.log('hover')
        }}
        onChildMouseMove={() => {
          console.log('hover')
        }}
        options={{mapTypeControl: false,fullscreenControl:false,zoomControl:false}}
      >
        {/* <AnyReactComponent
          lat={11.195413}
          lng={77.01502627}

          text="My Marker"
        /> */}
        {/* <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-red-50">gello</div> */}
      </GoogleMapReact>
    </div>
  );
}