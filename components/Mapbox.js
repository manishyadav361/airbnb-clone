import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { LocationMarkerIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
function Mapbox({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState();
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });

  return (
    //  map embedding

    <ReactMapGL
      mapboxApiAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/manish361/cks2reaio2s7017mvsl43q3c0"
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {/* map marker  */}

      {searchResults?.map((result) => (
        <div key={result.lat}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <LocationMarkerIcon
              onClick={() => {
                setSelectedLocation(result);
              }}
              className="h-8 text-red-400 cursor-pointer animate-bounce z-10"
              aria-label="push-pin"
              role="img"
            />
          </Marker>
          {selectedLocation?.long == result.long && (
            <Popup
              className="bg-transparent"
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              <div className=" p-2 z-50 flex">
                <div className="relative w-24 h-20">
                  <Image
                    src={result.img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded mr-2"
                  />
                </div>
                <div className="flex items-center mb-auto">
                  <h3 className="text-gray-400 mr-2 ml-2 w-70 flex-grow">
                    {result.title}
                  </h3>
                  <StarIcon className="h-4 text-red-400" />
                  <p className="font-semibold">{result.star}</p>
                </div>
              </div>
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Mapbox;
