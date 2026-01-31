'use client';

import { Brain, Shield, Clock, Map, Users, Smartphone } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "AI Itinerary Generator",
    description: "Our intelligent system creates personalized travel plans based on your preferences, budget, and timeframe.",
    icon: "Brain",
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 2,
    title: "Safety Intelligence",
    description: "Real-time safety updates, weather alerts, and secure route planning across Pakistan.",
    icon: "Shield",
    color: "bg-green-100 text-green-600"
  },
  {
    id: 3,
    title: "Real-time Assistance",
    description: "24/7 support with local guides, emergency contacts, and on-ground assistance.",
    icon: "Clock",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 4,
    title: "Smart Route Planning",
    description: "Optimized travel routes considering traffic, road conditions, and scenic value.",
    icon: "Map",
    color: "bg-orange-100 text-orange-600"
  },
  {
    id: 5,
    title: "Group Travel Coordination",
    description: "Seamless planning for family trips, corporate tours, and adventure groups.",
    icon: "Users",
    color: "bg-pink-100 text-pink-600"
  },
  {
    id: 6,
    title: "Mobile Experience",
    description: "Companion app with offline maps, translation tools, and cultural guides.",
    icon: "Smartphone",
    color: "bg-indigo-100 text-indigo-600"
  }
];

const iconComponents = {
  Brain, Shield, Clock, Map, Users, Smartphone
};

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Intelligent <span className="text-blue-600">Travel Services</span>
          </h2>
          <p className="section-subtitle">
            Powered by artificial intelligence and local expertise for a seamless Pakistani travel experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
            
            return (
              <div
                key={service.id}
                className="bg-white p-6 rounded-2xl shadow-lg card-hover border border-gray-100"
              >
                <div className={`${service.color.split(' ')[0]} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="h-7 w-7" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500">
                    AI-Powered
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* AI Features Showcase */}
        <div className="mt-20 bg-linear-to-r from-blue-600 to-emerald-600 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                How Our AI Travel Agent Works
              </h3>
              <ul className="space-y-4">
                {[
                  "Analyzes your travel preferences and constraints",
                  "Cross-references real-time weather and safety data",
                  "Generates optimized itineraries with local insights",
                  "Continuously learns from traveler feedback",
                  "Provides dynamic adjustments during your trip"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">{index + 1}</span>
                    </div>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 p-8 md:p-12 flex items-center justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Travel AI</div>
                    <div className="text-sm text-gray-600">Processing your request...</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    "✓ Analyzing preferred destinations",
                    "✓ Checking weather forecasts",
                    "✓ Optimizing travel routes",
                    "✓ Booking accommodations",
                    "✓ Adding local experiences"
                  ].map((text, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Itinerary Progress</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-linear-to-r from-blue-500 to-emerald-500 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}