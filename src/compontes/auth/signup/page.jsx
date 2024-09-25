import React, { useState } from 'react';
import signupImage from '../../../assets/signup.jpg';
import Bg from '../../../assets/google.png';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    if (name && password.length >= 6) {
      setMessage("Signup successful!");
    } else {
      setMessage("Please fill all fields and ensure password is at least 6 characters.");
    }
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log("Google Sign-In clicked");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="m-auto bg-white p-4 sm:p-8 flex flex-col lg:flex-row rounded-lg shadow-lg w-full max-w-4xl">
        <div className="hidden lg:block w-1/2 pr-8">
          <img
            src={signupImage}
            alt="Food presentation"
            className="rounded-lg object-cover h-full w-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-center text-3xl sm:text-4xl text-[#FEA116] font-[Pacifico] mb-4 sm:mb-6">Welcome to ShopUrFood</h1>
          <h2 className="text-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Sign Up</h2>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
                minLength={6}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
            >
              Sign Up
            </button>
          </form>
          {message && (
            <p className={`mt-4 text-center ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
          <div className="mt-6 text-center">
            <p className="text-gray-500">OR</p>
            <div className="flex justify-center items-center mt-2">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full py-3 px-4 h-14 text-gray-500 rounded-md border border-gray-300 transition duration-300 text-sm font-medium flex items-center justify-center focus:outline-none focus:border-[#FEA116] focus:border-2 hover:border-[#FEA116]"
              >
                <img 
                  src={Bg} 
                  alt="Google logo" 
                  className="w-6 h-6 mr-2"
                />
                Continue with Google
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