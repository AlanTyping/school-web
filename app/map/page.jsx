'use client'

// import { useState } from "react";
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";

// export default function Intro() {
//   const position = { lat: 53.54, lng: 10 };
//   const [open, setOpen] = useState(false);

//   return (
//     <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
//       <div style={{ height: "50vh", width: "100%" }}>
//         <Map zoom={9} center={position} mapId="8f11c79321a0bcd9">
//           <AdvancedMarker position={position} onClick={() => setOpen(true)}>
//             <Pin
//               background={"white"}
//               borderColor={"blue"}
//               glyphColor={"yellow"}
//             />
//           </AdvancedMarker>

//           {open && (
//             <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
//               <p>I'm in Hamburg</p>
//             </InfoWindow>
//           )}
//         </Map>
//       </div>
//     </APIProvider>
//   );
// }




import { memo, useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1000px',
  height: '300px',
};

const center = {
  lat: -34.60370299457231,
  lng: -58.381568683748775
};

function Page() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY
  })

  if (!isLoaded) return <></>

  return (
    <div className="flex-center min-h-[100vh] w bg-red-400">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={{
          gestureHandling: "none",
          zoomControl: false,
          disableDefaultUI: true,
          // styles: [
          //   {
          //     featureType: 'road',
          //     elementType: 'geomety',
          //     stylers: [{
          //       color: "#dddddd",
          //       lightness: 50
          //     }]
          //   },
          //   {
          //     featureType: 'water',
          //     elementType: 'geomety',
          //     stylers: [{
          //       color: "#0040c0",
          //       lightness: 50
          //     }]
          //   },
          //   {
          //     featureType: 'landscape',
          //     elementType: 'geomety',
          //     stylers: [{
          //       color: "#aaaaaa",
          //       lightness: 50
          //     }]
          //   },
          // ]
        }}

      >
        <Marker style={{ backgroundColor: '#fff' }} animation="BOUNCE" position={center} />
      </GoogleMap>
    </div>

  )
};



export default memo(Page)
