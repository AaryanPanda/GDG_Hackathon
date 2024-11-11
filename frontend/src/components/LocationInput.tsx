import React from 'react';

type Location = {
  lat: number;
  lng: number;
};

type LocationInputProps = {
  onLocationSelect: (location: Location) => void;
};

const LocationInput: React.FC<LocationInputProps> = ({ onLocationSelect }) => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onLocationSelect({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error('Location error:', error)
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <button onClick={getLocation} className="text-sm text-blue-600 hover:underline mt-4">
      Get Current Location
    </button>
  );
};

export default LocationInput;