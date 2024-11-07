import React from 'react';
import { Trophy, Star, Award, Target } from 'lucide-react';

interface PointsDisplayProps {
  points: number;
  level: string;
  weeklyGoal: number;
  weeklyProgress: number;
}

const PointsDisplay: React.FC<PointsDisplayProps> = ({
  points,
  level,
  weeklyGoal,
  weeklyProgress,
}) => {
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'bronze': return 'text-amber-700';
      case 'silver': return 'text-gray-400';
      case 'gold': return 'text-yellow-500';
      case 'platinum': return 'text-blue-400';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Trophy className="h-8 w-8 text-green-600" />
          <div>
            <p className="text-sm text-gray-600">Total Points</p>
            <p className="text-2xl font-bold text-gray-800">{points.toLocaleString()}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Star className={`h-6 w-6 ${getLevelColor(level)}`} />
          <span className={`font-semibold ${getLevelColor(level)}`}>{level}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Weekly Goal Progress</span>
          <span className="text-sm font-medium text-gray-800">
            {weeklyProgress}/{weeklyGoal} points
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-600 h-2.5 rounded-full"
            style={{ width: `${(weeklyProgress / weeklyGoal) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2">
        <div className="flex items-center space-x-2">
          <Award className="h-5 w-5 text-purple-500" />
          <span className="text-sm text-gray-600">Next Reward at 5000 pts</span>
        </div>
        <div className="flex items-center space-x-2">
          <Target className="h-5 w-5 text-blue-500" />
          <span className="text-sm text-gray-600">Daily Streak: 7 days</span>
        </div>
      </div>
    </div>
  );
};

export default PointsDisplay;