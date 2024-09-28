import React, { useState } from 'react';
import signupImage from '../../../assets/signup.jpg';
import Bg from '../../../assets/google.png';
import { TextField, Button } from '@mui/material';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    if (name && phoneNumber) {
      setMessage("Signup successful!");
    } else {
      setMessage("Please fill all fields and ensure @gmail.com.");
    }
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log("Google Sign-In clicked");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="m-auto bg-white p-4 sm:p-8 flex flex-col lg:flex-row rounded-lg shadow-lg w-full max-w-4xl">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <img
            src={signupImage}
            alt="Food presentation"
            className="rounded-lg object-cover w-full h-auto max-h-[50vh] lg:h-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-center text-3xl sm:text-4xl text-[#FEA116] font-[Pacifico] mb-4 sm:mb-6">Welcome to ShopUrFood</h1>
          <h2 className="text-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Sign Up</h2>
          <form onSubmit={handleSignup} className="space-y-4">
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mb-4 [&_.MuiInputLabel-root.Mui-focused]:text-black"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#FEA116',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FEA116',
                    borderWidth: '2px',
                  },
                },
              }}
            />
          <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="mb-4 [&_.MuiInputLabel-root.Mui-focused]:text-black"
            

              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#FEA116',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FEA116',
                    borderWidth: '2px',
                  },
                },
              }}
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#FEA116] text-white text-lg w-full sm:w-[200px] px-4 py-2 mt-2 sm:mt-6 rounded hover:bg-[#e89104] transition-colors duration-300"
              >
                Create Account
              </button>
            </div>
          </form>
          {message && (
            <p className={`mt-4 text-center ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-center -mt-2">OR</p>
            <div className="flex justify-center items-center mt-4">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full py-3 px-4 h-14 text-gray-500 rounded-[3px] border border-gray-400 transition duration-300 text-sm font-medium flex items-center justify-center focus:outline-none focus:border-[#FEA116] focus:border-2 hover:border-[#FEA116]"
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
            <a href="/login" className="text-[#FEA116] hover:underline">
              Already have an account? Login here!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;