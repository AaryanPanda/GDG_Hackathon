import React from 'react';
import { Upload, Camera, Loader2, Award } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (image: string) => void;
  selectedImage: string | null;
  wasteType: string | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload,
  selectedImage,
  wasteType,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getPointsForWasteType = (type: string): number => {
    const pointsMap: { [key: string]: number } = {
      'Plastic': 50,
      'Paper': 30,
      'Glass': 40,
      'Metal': 45,
      'Electronic': 100,
      'Organic': 20,
    };
    return pointsMap[type] || 25;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Identify Your Waste</h2>
        <p className="text-gray-600 mt-2">
          Upload or take a photo of your waste item for AI-powered identification
        </p>
      </div>

      {!selectedImage ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors">
            <Upload className="h-12 w-12 text-gray-400" />
            <span className="mt-2 text-sm text-gray-500">Upload Image</span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>

          <button className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
            <Camera className="h-12 w-12 text-gray-400" />
            <span className="mt-2 text-sm text-gray-500">Take Photo</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Uploaded waste"
              className="w-full h-64 object-cover rounded-lg"
            />
            {!wasteType && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                <div className="text-center text-white">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto" />
                  <p className="mt-2">Analyzing image...</p>
                </div>
              </div>
            )}
          </div>

          {wasteType && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Identified as: {wasteType}
                </h3>
                <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                  <Award className="h-4 w-4 text-green-600" />
                  <span className="text-green-600 font-medium">
                    +{getPointsForWasteType(wasteType)} points
                  </span>
                </div>
              </div>
              <p className="text-gray-600">
                This item can be recycled at your local recycling center.
              </p>
              <div className="mt-4 space-y-2">
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Find Nearest Recycling Center
                </button>
                <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                  View Recycling Guidelines
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;