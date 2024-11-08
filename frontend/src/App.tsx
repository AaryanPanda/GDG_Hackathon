import { useState } from 'react';
import { Upload, MapPin, BarChart3, Info } from 'lucide-react';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload.jsx';
import WasteInfo from './components/WasteInfo';
import RecyclingMap from './components/RecyclingMap';
import Dashboard from './components/Dashboard';
import { useRecoilState } from 'recoil';
import sectionatom from "./store/atom"

function App() {
  // const [activeTab, setActiveTab] = useState('upload');
  const [activeTab, setActiveTab] = useRecoilState(sectionatom);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [wasteType, setWasteType] = useState<string | null>(null);

  const handleImageUpload = (image: string) => {
    setSelectedImage(image);
    setTimeout(() => {
      setWasteType('Plastic');
    }, 1500);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'upload':
        return (
          <ImageUpload 
            onImageUpload={handleImageUpload}
            selectedImage={selectedImage}
            wasteType={wasteType}
          />
        );
      case 'map':
        return <RecyclingMap />;
      case 'dashboard':
        return <Dashboard />;
      case 'info':
        return <WasteInfo />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 pb-20 pt-6 max-w-6xl">
        {renderContent()}
      </main>

      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-4 py-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-around items-center">
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex flex-col items-center p-2 ${
                activeTab === 'upload' ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              <Upload size={24} />
              <span className="text-xs mt-1">Upload</span>
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`flex flex-col items-center p-2 ${
                activeTab === 'map' ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              <MapPin size={24} />
              <span className="text-xs mt-1">Centers</span>
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex flex-col items-center p-2 ${
                activeTab === 'dashboard' ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              <BarChart3 size={24} />
              <span className="text-xs mt-1">Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`flex flex-col items-center p-2 ${
                activeTab === 'info' ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              <Info size={24} />
              <span className="text-xs mt-1">Guide</span>
            </button>
          </div>
        </div>
      </nav> 
    </div>
  );
}

export default App;