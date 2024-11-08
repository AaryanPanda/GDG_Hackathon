import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import LocationInput from './LocationInput';
import NearbyPlaces from './NearbyPlaces';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

type Location = {
  lat: number;
  lng: number;
};

const RecyclingMap: React.FC = () => {
  const [location, setLocation] = useState<Location | null>(null);

  const handleLocationSelect = (selectedLocation: Location) => {
    setLocation(selectedLocation);
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, 
  });

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Recycling Centers</h2>
        <p className="text-gray-600 mt-2">Find recycling centers near you</p>
      </div>
      
      {/* Button to get the user's location */}
      <LocationInput onLocationSelect={handleLocationSelect} />
      
      {/* Display user's location */}
      <div className="bg-gray-200 h-96 rounded-lg">
        {location && isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{ lat: location.lat, lng: location.lng }}
            zoom={12}
          >
            <Marker position={{ lat: location.lat, lng: location.lng }} />
          </GoogleMap>
        ) : (
          <div className="flex items-center justify-center h-full text-center text-gray-600">
            <MapPin className="h-12 w-12 mx-auto mb-2" />
            <p>Click "Get Location" to find nearby recycling centers.</p>
          </div>
        )}
      </div>

      {/* Display nearby places when location is available */}
      <div className="grid grid-cols-1">
        {location ? (
          <NearbyPlaces location={location} />
        ) : (
          [1, 2, 3, 4].map((center) => (
            <div key={center} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800">Recycling Center {center}</h3>
              <p className="text-gray-600 text-sm mt-1">123 Green Street, Eco City</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm text-green-600">2.5 miles away</span>
                <button className="text-sm text-blue-600 hover:underline">Get Directions</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecyclingMap;
