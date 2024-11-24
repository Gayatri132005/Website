import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  LoadScript,
} from "@react-google-maps/api";

const markers = [
  {
    id: 1,
    name: "DroneBuddy Center - Location 1",
    position: { lat: 19.893683, lng: 75.354717 },
  },
  {
    id: 2,
    name: "DroneBuddy Center - Location 2",
    position: { lat: 20.0548146, lng: 78.94204239999999 },
  },
];
function DronebuddyCenters() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker: React.SetStateAction<null>) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map: {
    fitBounds: (arg0: google.maps.LatLngBounds) => void;
  }) => {
    const bounds = new google.maps.LatLngBounds(); // Ensure google object is available
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-around min-h-screen p-6">
      <div className="md:w-[50%] flex items-center justify-center">
        <h2 className="font-bold text-center">
          DroneBuddy Centers - Find Our Locations
        </h2>
      </div>
      <div className="md:w-[50%] w-[] items-center flex justify-center">
        {/* <iframe style={{ border: 0, marginTop: -100 }} src="https://www.google.com/maps/d/u/0/embed?mid=165FMC0w7evoO8jPofSZxsQpQ-MMa7XU&ehbc=2E312F&noprof=1" width="100%" height="500" frameBorder='0'></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.7285018071602!2d75.35213771154433!3d19.89368298140945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba355e9d6b639%3A0x3e7043dc842aa942!2sMama%20Drones!5e0!3m2!1sen!2sin!4v1732448051711!5m2!1sen!2sin"
          width="500"
          height="500"
          style={{ border: 0 }}
          className="md:w-[500px] md:h-[500px] w-[300px] h-[300px] "
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <LoadScript googleMapsApiKey={process.env.GCP_API_KEY??""}>
                    <GoogleMap
                        onLoad={handleOnLoad}
                        onClick={() => setActiveMarker(null)}
                        mapContainerStyle={{ width: "100%", height: "500px" }} // Adjust size as necessary
                    >
                        {markers.map(({ id, name, position }) => (
                            <Marker
                                key={id}
                                position={position}
                                onClick={() => handleActiveMarker(id)}
                            >
                                {activeMarker === id ? (
                                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                        <div>{name}</div>
                                    </InfoWindow>
                                ) : null}
                            </Marker>
                        ))}
                    </GoogleMap>
                </LoadScript> */}
      </div>
    </div>
  );
}

export default DronebuddyCenters;
