import React from 'react';
import { Clock, ChevronDown, Sliders } from 'lucide-react';
import Bg from '../assets/fud-1.avif'
import Bb from '../assets/fud-2.avif'
import Bn from '../assets/fud-3.avif'
import Bm from '../assets/fud-5.avif'

import { Search } from 'lucide-react';

const FoodOffersPage = () => {
  const restaurants = [
    {
      id: 1,
      name: "MM Kanjikada",
      image: Bg,
      rating: 3.9,
      deliveryTime: "25-30 mins",
      cuisines: ["South Indian", "Kerala", "Beverages", "Snacks"],
      location: "Sulthanpet Junction",
      offer: "₹125 OFF ABOVE ₹249"
    },
    {
      id: 2,
      name: "The Magik Oven",
      image: Bb,
      rating: 4.4,
      deliveryTime: "35-40 mins",
      cuisines: ["Bakery", "Beverages", "Desserts", "Sweets", "Ice Cream"],
      location: "Stadium bypass road",
      offer: "50% OFF UPTO ₹100"
    },
    {
      id: 3,
      name: "Kapilavasthu Hotel",
      image: Bn,
      rating: 4.5,
      deliveryTime: "20-25 mins",
      cuisines: ["South Indian", "North Indian", "Indian", "Kerala"],
      location: "Nurani",
      offer: "15% OFF UPTO ₹45"
    },
    {
      id: 4,
      name: "Oh My Hunger",
      image: Bm,
      rating: 4.2,
      deliveryTime: "35-40 mins",
      cuisines: ["Arabian", "Burgers", "Chinese", "Beverages"],
      location: "Palakkad Town",
      offer: "10% OFF UPTO ₹40"
    }
  ];

  const filters = [
    { id: 1, name: 'Filter', icon: <Sliders className="w-4 h-4" />, hasCount: true },
    { id: 2, name: 'Sort By', icon: <ChevronDown className="w-4 h-4" /> },
    { id: 3, name: 'Offers' },
    { id: 4, name: 'Fast Delivery' },
    { id: 5, name: 'Ratings 4.0+' },
    { id: 6, name: 'Pure Veg' },
    { id: 7, name: 'Rs. 300-Rs. 600' },
    { id: 8, name: 'Less than Rs. 300' },
  ];

  const SearchInput = () => {
    return (
      <div className="flex justify-end items-center w-full">
        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Search for food"
            className="w-full py-4 px-4 pr-10 border border-[#FEA116] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FEA116] focus:border-[#FEA116]"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mb-8">
        <SearchInput />
      </div>

      {/* Border added here */}
      <div className="border-b border-gray-300 mb-4"></div>

      {/* Breadcrumb */}
      <nav className="mb-4">
        <ol className="flex items-center text-1xl">
          <li><a href="/" className="text-[#FEA116] hover:text-[#FEA116]">Restoran</a></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li><span className="text-gray-400">Offers</span></li>
        </ol>
      </nav>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Restaurants With Great Offers Near Me</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className="flex items-center px-3 py-1.5 rounded-full border border-gray-300 text-sm hover:bg-gray-50"
          >
            {filter.hasCount && <span className="w-5 h-5 bg-[#FEA116] text-white rounded-full flex items-center justify-center text-xs mr-1">1</span>}
            {filter.name}
            {filter.icon && <span className="ml-1">{filter.icon}</span>}
          </button>
        ))}
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="relative rounded-lg overflow-hidden cursor-pointer">
            <img 
              src={restaurant.image} 
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/70 to-transparent">
              <div className="text-white font-bold text-lg">{restaurant.offer}</div>
            </div>
            <div className="p-3 bg-white">
              <div className="flex justify-between items-start">
                <h2 className="font-bold text-lg text-gray-800">{restaurant.name}</h2>
                <div className="flex items-center bg-[#FEA116] text-white px-1 rounded text-sm">
                  <span className="mr-1">★</span>
                  {restaurant.rating}
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <Clock className="w-4 h-4 mr-1" />
                {restaurant.deliveryTime}
              </div>
              <div className="text-gray-500 text-sm mt-1">
                {restaurant.cuisines.join(', ')}
              </div>
              <div className="text-gray-500 text-sm mt-1">
                {restaurant.location}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 mx-auto block px-4 py-2 bg-[#FEA116] rounded-md text-white hover:bg-[#FFA500]">
        Show more
      </button>
    </div>
  );
};

export default FoodOffersPage;