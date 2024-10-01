import React from 'react';
import { Clock, Phone, MapPin } from 'lucide-react';

export default function RestaurantPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">La Bella Cucina</h1>
        <p className="text-xl text-gray-600">Authentic Italian Cuisine</p>
      </header>

      {/* Hero Section */}
      <div className="relative h-96 mb-12">
        <div className="absolute inset-0 bg-gray-400 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Restaurant</h2>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
              Make a Reservation
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex items-center">
          <Clock className="w-6 h-6 text-red-600 mr-2" />
          <div>
            <h3 className="font-semibold">Hours</h3>
            <p className="text-gray-600">Mon-Sun: 11am-10pm</p>
          </div>
        </div>
        <div className="flex items-center">
          <Phone className="w-6 h-6 text-red-600 mr-2" />
          <div>
            <h3 className="font-semibold">Contact</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
        </div>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 text-red-600 mr-2" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-600">123 Main St, Cityville</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-600">
        <p>&copy; 2024 La Bella Cucina. All rights reserved.</p>
      </footer>
    </div>
  );
}