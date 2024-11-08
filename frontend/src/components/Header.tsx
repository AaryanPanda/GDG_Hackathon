import { Recycle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {nameatom} from "../store/atom"
import {tokenatom} from "../store/atom"

const Header = () => {
  const name = useRecoilValue(nameatom)
  const setToken = useSetRecoilState(tokenatom)
  const navigate = useNavigate();

  const handleLogout = ()=>{
    setToken("");
    navigate('/sign-in')
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">RecycLab</h1>
          </div>
          <div className="flex items-center space-x-4">
            {
              !name ? (<>
            <Link to="/sign-in" className="text-sm text-gray-600 hover:text-green-600">
              Sign In
            </Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
              Get Started
            </button>
              </>) : (
                <>
                <p className='text-sm text-gray-600 hover:text-green-600'>{name}</p>
                <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors">
              Logout
            </button>
                </>
              )
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;