import React, { useState, useRef } from 'react';
import { Upload, Camera, Loader2, Award } from 'lucide-react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs-backend-webgl';
import * as tf from '@tensorflow/tfjs';
import { useSetRecoilState } from 'recoil';
import sectionatom from '../store/atom';

const ImageUpload = () => {
  const setactiveTab = useSetRecoilState(sectionatom);
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [wasteType, setWasteType] = useState(null);
  const imageRef = useRef(null);

  // Mock detection function - replace this with your actual detection service
  const detectObject = async () => {
    await tf.setBackend('webgl');  // Choose WebGL as the backend
    await tf.ready();              // Wait until the backend is ready
    
    const model = await cocoSsd.load();
    const predictions = await model.detect(imageRef.current);
    return predictions;
  }

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setIsAnalyzing(true);
      setPredictions([]);
      setWasteType(null);

      try {
        // Call mock detection - replace with your actual detection service
        const detectedObjects = await detectObject(imageUrl);
        setPredictions(detectedObjects);

        // Set waste type based on first prediction
        if (detectedObjects.length > 0) {
          setWasteType(mapObjectToWasteType(detectedObjects[0].class));
        }
      } catch (error) {
        console.error('Error during object detection:', error);
      } finally {
        setIsAnalyzing(false);
      }
    }
  };

  const mapObjectToWasteType = (objectClass) => {
    const wasteMap = {
      'bottle': 'Plastic',
      'cup': 'Plastic',
      'paper': 'Paper',
      'book': 'Paper',
      'phone': 'Electronic',
      'laptop': 'Electronic',
      'banana': 'Organic',
      'apple': 'Organic',
      'can': 'Metal'
    };

    // Check if any key from wasteMap is included in the objectClass string
    const matchedType = Object.entries(wasteMap).find(([key]) =>
      objectClass.toLowerCase().includes(key.toLowerCase())
    );

    return matchedType ? matchedType[1] : 'General Waste';
  };

  const handleactiveTab = ()=>{
    setactiveTab("map")
  }

  const getPointsForWasteType = (type) => {
    const pointsMap = {
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
              ref={imageRef}
              src={selectedImage}
              alt="Uploaded waste"
              className="w-full h-64 object-contain rounded-lg"
            />
            {isAnalyzing && (
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
              <div className="mt-4">
                <h4 className="font-medium text-gray-700 mb-2">Detected Objects:</h4>
                <ul className="space-y-1">
                  {predictions.map((prediction, index) => (
                    <li key={index} className="text-gray-600">
                      {prediction.class} - {Math.round(prediction.score * 100)}% confidence
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 space-y-2">
                <button onClick={handleactiveTab} className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
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