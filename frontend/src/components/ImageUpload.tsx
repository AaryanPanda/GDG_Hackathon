import React, { useState } from 'react';
import { Upload, Camera, Loader2, Award, ChevronDown } from 'lucide-react';

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
  const options = [
    { value: 'plastic', label: 'Plastic' },
    { value: 'paper', label: 'Paper' },
    { value: 'glass', label: 'Glass' },
    { value: 'metal', label: 'Metal' },
    { value: 'organic', label: 'Organic' }
  ];

  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const placeholder = 'Select material type';

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Identify Your Waste</h2>
      </div>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm text-gray-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 hover:border-gray-400 transition-colors"
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default ImageUpload;