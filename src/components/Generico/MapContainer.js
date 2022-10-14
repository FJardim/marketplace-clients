import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { useState } from "react";

const MapContainer = ({ google, height = 500, stores }) => {
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <Map
      google={google}
      zoom={12}
      containerStyle={{
        position: "relative",
        width: "100%",
        height: `${height}px`,
      }}
      initialCenter={{ lat: 10.195346019082624, lng: -67.92292000467333 }}
    >
      <Marker
        title={"asdf"}
        position={{ lat: 10.195346019082624, lng: -67.92292000467333 }}
        onClick={() => {}}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDkAJA-uOdmLgb0WSrMePZp4pvA4s6fT7w",
})(MapContainer);
