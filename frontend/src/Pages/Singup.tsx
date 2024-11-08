import { Recycle, Mail, Lock, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;


const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
  const [formState, setFormState] = useState(initialState);
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    createUser()
  }

  const createUser = async ()=>{
    try{
      let res = await axios.post(`${backendUrl}user/signup`, {
        data: {name: formState.name, email: formState.email, password: formState.password}
      })
      console.log(res);
      navigate('/sign-in')
    }catch(err){
      console.log(err);
    }
  }
  
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex items-center justify-center space-x-2">
            <Recycle className="h-12 w-12 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-800">RecycLab</h2>
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            Create your account
          </h2>
        </div>
  
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full border border-gray-300 text.lg rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full border border-gray-300 text.lg rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full border border-gray-300 text.lg rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full border border-gray-300 text.lg rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
  
              <div>
                <button
                  onClick={handleSubmit}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Create account
                </button>
              </div>
            </form>
  
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Already have an account?
                  </span>
                </div>
              </div>
  
              <div className="mt-6">
                <Link 
                  to="/sign-in"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Sign in instead
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignUp ;