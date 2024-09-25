import React from 'react';
import { Facebook } from 'lucide-react';
import signupImage from '../../../assets/signup.jpg';

const SignupPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto bg-white p-8 rounded-lg shadow-md flex">
        <div className="w-1/2 pr-8">
          <img
            src={signupImage}
            alt="Food presentation"
            className="rounded-lg object-cover h-full w-full"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-6">Welcome to ShopUrFood</h1>
          <h2 className="text-xl font-semibold mb-4 text-orange-500">SIGN UP</h2>
          <form>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-500">OR</p>
            <div className="flex justify-center mt-4 space-x-4">
              <button className="p-2 bg-blue-600 text-white rounded-full">
                <Facebook size={24} />
              </button>
              <button className="p-2 bg-red-600 text-white rounded-full">
                G+
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="/login" className="text-orange-500 hover:underline">
              Already have an account? Login here!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
