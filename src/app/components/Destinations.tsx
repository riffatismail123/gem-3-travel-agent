'use client';

import { MapPin, Calendar, Star, ChevronRight } from 'lucide-react';
import { Destination } from '../types';

const destinations: Destination[] = [
  {
    id: 1,
    name: "Hunza Valley",
    description: "Majestic mountains, turquoise lakes, and ancient forts in the Karakoram range.",
    image: "/hunza-val.jpg",
    province: "Gilgit-Baltistan",
    bestTime: "April - October"
  },
  {
    id: 2,
    name: "Swat Valley",
    description: "The 'Switzerland of the East' with lush green valleys and flowing rivers.",
    image: "/swat-val.jpg",
    province: "Khyber Pakhtunkhwa",
    bestTime: "March - November"
  },
  {
    id: 3,
    name: "Lahore Fort",
    description: "Historical Mughal architecture and cultural heritage in Pakistan's heart.",
    image: "/lahr-fort.jpg",
    province: "Punjab",
    bestTime: "October - March"
  },
  {
    id: 4,
    name: "Karachi Coast",
    description: "Vibrant city life meets Arabian Sea beaches and diverse cuisine.",
    image: "/karach-coast.jpg",
    province: "Sindh",
    bestTime: "November - February"
  },
  {
    id: 5,
    name: "Fairy Meadows",
    description: "Breathtaking views of Nanga Parbat, the world's ninth highest mountain.",
    image: "/fairy-mead.jpg",
    province: "Gilgit-Baltistan",
    bestTime: "May - September"
  },
  {
    id: 6,
    name: "Quetta",
    description: "Fruit orchards, mountainous landscapes, and unique Balochi culture.",
    image: "/quetta-1.jpg",
    province: "Balochistan",
    bestTime: "March - October"
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="section-padding bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Explore <span className="text-blue-600">Pakistan&apos;s</span> Wonders
          </h2>
          <p className="section-subtitle">
            From the mighty Karakoram to the Arabian Sea, discover destinations 
            curated by our intelligent travel system
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-gray-900">4.8</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                  <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {destination.province}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{destination.province}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{destination.bestTime}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-semibold">
                    <span>Explore</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All 50+ Destinations
          </button>
        </div>
      </div>
    </section>
  );
}