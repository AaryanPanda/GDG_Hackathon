import { MapPin } from 'lucide-react';

const RecyclingMap = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Recycling Centers</h2>
        <p className="text-gray-600 mt-2">
          Find recycling centers near you
        </p>
      </div>

      <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-600">
          <MapPin className="h-12 w-12 mx-auto mb-2" />
          <p>Map integration coming soon</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((center) => (
          <div key={center} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">
              Recycling Center {center}
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              123 Green Street, Eco City
            </p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm text-green-600">2.5 miles away</span>
              <button className="text-sm text-blue-600 hover:underline">
                Get Directions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecyclingMap;