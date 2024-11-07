import { Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">RecycLab</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/sign-in" className="text-sm text-gray-600 hover:text-green-600">
              Sign In
            </Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;