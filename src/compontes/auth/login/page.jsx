import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import loginImage from '../../../assets/login.jpg';
import Bg from '../../../assets/google.png'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (email && password.length >= 6) {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid email or password.");
    }
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log("Google Sign-In clicked");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="m-auto bg-white p-4 sm:p-8 flex flex-col lg:flex-row rounded-lg shadow-lg w-full max-w-4xl">
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <img
            src={loginImage}
            alt="Food being served"
            className="rounded-lg object-cover w-full h-auto max-h-[50vh] lg:h-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-center text-3xl sm:text-4xl text-[#FEA116] font-[Pacifico] mb-4 sm:mb-6">Welcome to ShopUrFood</h1>
          <h2 className="text-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">LOGIN</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <TextField
              type="tel"
              placeholder="Phone Number"
              fullWidth
              variant="outlined"
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
            <p className="text-gray-500 text-center">OR</p>

            <div className="flex justify-center items-center">
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

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#FEA116] text-white text-lg w-full sm:w-[200px] px-4 py-2 mt-4 sm:mt-8 rounded hover:bg-[#e89104] transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <a href="/signup" className="text-[#FEA116] hover:underline">
              Create your ShopUrFood Account!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;