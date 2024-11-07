import { Recycle, Leaf, AlertTriangle } from 'lucide-react';

const WasteInfo = () => {
  const wasteTypes = [
    {
      type: 'Plastic',
      icon: <Recycle className="h-6 w-6 text-blue-500" />,
      description: 'Clean and dry plastic containers, bottles, and packaging.',
      tips: ['Remove caps and labels', 'Rinse containers', 'Check recycling numbers'],
    },
    {
      type: 'Paper',
      icon: <Leaf className="h-6 w-6 text-green-500" />,
      description: 'Newspapers, magazines, cardboard, and office paper.',
      tips: ['Remove tape and staples', 'Keep dry', 'Flatten boxes'],
    },
    {
      type: 'Electronic',
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      description: 'Computers, phones, batteries, and other electronic devices.',
      tips: ['Remove batteries', 'Protect personal data', 'Find certified recyclers'],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Recycling Guide</h2>
        <p className="text-gray-600 mt-2">
          Learn how to properly recycle different types of waste
        </p>
      </div>

      <div className="grid gap-6">
        {wasteTypes.map((waste, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm space-y-4"
          >
            <div className="flex items-center space-x-3">
              {waste.icon}
              <h3 className="text-lg font-semibold text-gray-800">
                {waste.type}
              </h3>
            </div>
            <p className="text-gray-600">{waste.description}</p>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Recycling Tips:</h4>
              <ul className="list-disc list-inside space-y-1">
                {waste.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="text-gray-600">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">
          Why Recycling Matters
        </h3>
        <p className="text-gray-600">
          Proper recycling helps reduce landfill waste, conserve natural resources,
          and decrease pollution. Every item recycled makes a difference in
          protecting our environment for future generations.
        </p>
      </div>
    </div>
  );
};

export default WasteInfo;