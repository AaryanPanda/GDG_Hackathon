import { Leaf, Package, Trash2 } from 'lucide-react';
import PointsDisplay from './PointsDisplay';

const Dashboard = () => {
  const userData = {
    points: 3750,
    level: 'Silver',
    weeklyGoal: 1000,
    weeklyProgress: 750,
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Your Impact</h2>
        <p className="text-gray-600 mt-2">
          Track your recycling progress and environmental impact
        </p>
      </div>

      <PointsDisplay {...userData} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Items Recycled</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">147</p>
            </div>
            <Package className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">CO₂ Saved</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">52kg</p>
            </div>
            <Leaf className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Waste Diverted</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">85%</p>
            </div>
            <Trash2 className="h-8 w-8 text-green-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { type: 'Plastic', date: '2024-03-15', points: 50, status: 'Recycled' },
              { type: 'Paper', date: '2024-03-14', points: 30, status: 'Recycled' },
              { type: 'Glass', date: '2024-03-13', points: 40, status: 'Recycled' },
              { type: 'Electronic', date: '2024-03-12', points: 100, status: 'Processed' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-800">{item.type}</p>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    +{item.points} pts
                  </span>
                  <p className="text-sm text-gray-600 mt-1">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-800 mb-4">Available Rewards</h3>
          <div className="space-y-4">
            {[
              {
                name: 'Plant a Tree',
                points: 2000,
                description: 'We\'ll plant a tree in your name',
              }
            ].map((reward, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-800">{reward.name}</p>
                  <p className="text-sm text-gray-600">{reward.description}</p>
                </div>
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  Redeem {reward.points} pts
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;