import React, { useState, useEffect } from 'react';
import axios from 'axios';

// type Location = {
//   lat: number;
//   lng: number;
// };

// type NearbyPlacesProps = {
//   location: Location;
// };

// type Place = {
//   place_id: string;
//   name: string;
//   vicinity: string;
//   rating: number;
//   user_ratings_total: number;
// };

const NearbyPlaces = ({ location }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8998/api/nearby-places?lat=${location.lat}&lng=${location.lng}`
        );
        console.log(places)
        // <<<<<<< HEAD
        // setPlaces(response.data.results|| []);
        // =======
        setPlaces(response.data.results.slice(0, 4) || []);
        // >>>>>>> main
      } catch (error) {
        console.error("Error fetching nearby places:", error);
      }
    };

    if (location.lat && location.lng) {
      fetchPlaces();
    }
  }, [location]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {places.length > 0 ? (
        places.map((place) => (
          <div key={place.place_id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">{place.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{place.vicinity}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm text-green-600">
                Rating: {place.rating} ({place.user_ratings_total} reviews)
              </span>
              <button className="text-sm text-blue-600 hover:underline">Get Directions</button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-center">No nearby waste disposal plants found.</p>
      )}
    </div>
  );
};

export default NearbyPlaces;
