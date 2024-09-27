import React, { useState } from 'react';
import { X } from 'lucide-react';
import { TextField } from '@mui/material';

const RestaurantBookingForm = ({ restaurant, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-[600px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-center text-3xl sm:text-4xl text-[#FEA116] font-[Pacifico] mb-4 sm:mb-6">Welcome to ShopUrFood {restaurant.name}</h1>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
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
            id="phone"
            name="phone"
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
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
            id="date"
            name="date"
            label="Date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
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
            id="time"
            name="time"
            label="Time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
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
            id="guests"
            name="guests"
            label="Number of Guests"
            type="number"
            value={formData.guests}
            onChange={handleChange}
            fullWidth
            required
            inputProps={{ min: 1 }}
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
              className="bg-[#FEA116] text-white text-lg w-full sm:w-[550px] px-4 py-2 mt-4 sm:mt-8 rounded hover:bg-[#e89104] transition-colors duration-300"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantBookingForm;