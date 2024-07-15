import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl text-teal-300 text-center mb-6">CollTrad.in</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-teal-300">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-teal-300 rounded bg-gray-800 text-white"
            />
          </div>
          <div>
            <label className="block text-teal-300">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border border-teal-300 rounded bg-gray-800 text-white"
            />
          </div>
          <div>
            <label className="block text-teal-300">E-mail</label>
            <input
              type="email"
              className="w-full p-2 border border-teal-300 rounded bg-gray-800 text-white"
            />
          </div>
          <div>
            <label className="block text-teal-300">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-teal-300 rounded bg-gray-800 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 p-2 rounded text-white hover:bg-teal-600"
          >
            Submit
          </button>
        </form>
        <div className="mt-6 text-center text-teal-300">or</div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-blue-600 p-2 rounded-full">
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" className="w-6 h-6"/>
          </button>
          <button className="bg-red-600 p-2 rounded-full">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-6 h-6"/>
          </button>
        </div>
      </div>
    </div>
  );
};
