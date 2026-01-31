'use client';

import { useState } from 'react';
import { Calendar, Users, MapPin, DollarSign, ChevronRight, Brain } from 'lucide-react';
import { ItineraryDay } from '../types';

const sampleItinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Islamabad Arrival & Cultural Immersion",
    activities: [
      "Arrival at Islamabad International Airport",
      "Check-in at recommended hotel",
      "Visit Faisal Mosque - World's 4th largest mosque",
      "Explore Pakistan Monument & Museum",
      "Traditional dinner at Monal Restaurant"
    ]
  },
  {
    day: 2,
    title: "Travel to Hunza Valley",
    activities: [
      "Scenic flight or road journey to Gilgit",
      "Transfer to Hunza Valley",
      "Visit Altit and Baltit Forts",
      "Sunset at Duikar viewpoint",
      "Local cuisine experience"
    ]
  },
  {
    day: 3,
    title: "Hunza Exploration",
    activities: [
      "Visit Attabad Lake - turquoise wonder",
      "Khunjerab Pass (China border)",
      "Local village cultural interaction",
      "Traditional music and dance evening",
      "Stargazing in clear mountain skies"
    ]
  },
  {
    day: 4,
    title: "Swat Valley Journey",
    activities: [
      "Travel to Swat Valley via plane",
      "Explore Mingora city and markets",
      "Visit Buddhist archaeological sites",
      "River walk along Swat River",
      "Stay at mountain resort"
    ]
  },
  {
    day: 5,
    title: "Departure & Souvenirs",
    activities: [
      "Last-minute shopping for local crafts",
      "Traditional breakfast experience",
      "Travel back to Islamabad",
      "Airport transfer for departure",
      "Personalized travel insights report"
    ]
  }
];

export default function ItineraryPlanner() {
  const [activeDay, setActiveDay] = useState(1);
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState(1500);
  const [duration, setDuration] = useState(7);

  const activeDayData = sampleItinerary.find(day => day.day === activeDay) || sampleItinerary[0];
  const isSelected = (day: number) => activeDay === day;

  return (
    <section id="itinerary" className="section-padding bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            AI-Generated <span className="text-blue-600">Travel Itinerary</span>
          </h2>
          <p className="section-subtitle">
            Customize your perfect Pakistan journey with intelligent planning
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Customization */}
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Customize Your Trip
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="travelers-range" className="flex items-center space-x-2 text-gray-700 font-medium">
                    <Users className="h-4 w-4" />
                    <span>Travelers</span>
                  </label>
                  <span className="text-blue-600 font-bold">{travelers}</span>
                </div>
                <input
                  id="travelers-range"
                  type="range"
                  min={1}
                  max={10}
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-label={`Number of travelers: ${travelers}`}
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="budget-range" className="flex items-center space-x-2 text-gray-700 font-medium">
                    <DollarSign className="h-4 w-4" />
                    <span>Budget ($)</span>
                  </label>
                  <span className="text-blue-600 font-bold">${budget}</span>
                </div>
                <input
                  id="budget-range"
                  type="range"
                  min={500}
                  max={5000}
                  step={100}
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-label={`Budget: $${budget}`}
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="duration-range" className="flex items-center space-x-2 text-gray-700 font-medium">
                    <Calendar className="h-4 w-4" />
                    <span>Duration (Days)</span>
                  </label>
                  <span className="text-blue-600 font-bold">{duration}</span>
                </div>
                <input
                  id="duration-range"
                  type="range"
                  min={3}
                  max={21}
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-label={`Trip duration: ${duration} days`}
                />
              </div>
              
              <div>
                <label className="flex items-center space-x-2 text-gray-700 font-medium mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>Preferred Destinations</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Northern Areas", "Historical Sites", "Beaches", 
                    "Deserts", "Cultural Cities", "Adventure"
                  ].map((type) => (
                    <button
                      key={type}
                      className="border border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-700 px-3 py-2 rounded-lg text-sm font-medium transition-all"
                      aria-label={`Select ${type} as preferred destination`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                className="w-full btn-secondary"
                aria-label="Generate AI itinerary based on selected preferences"
              >
                Generate AI Itinerary
              </button>
            </div>
          </div>
          
          {/* Right Panel - Itinerary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Your {duration}-Day Pakistan Adventure
                    </h3>
                    <p className="text-gray-600">
                      For {travelers} travelers • Budget: ${budget} • AI-Optimized
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">Day {activeDay}</div>
                    <div className="text-sm text-gray-500">of {duration}</div>
                  </div>
                </div>
              </div>
              
              {/* Day Navigation */}
              <div className="flex overflow-x-auto border-b border-gray-100" role="tablist" aria-label="Itinerary days navigation">
                {sampleItinerary.map((day) => (
                  <button
                    key={day.day}
                    role="tab"
                    aria-selected={isSelected(day.day)}
                    aria-controls={`day-${day.day}-panel`}
                    id={`day-${day.day}-tab`}
                    onClick={() => setActiveDay(day.day)}
                    className={`shrink-0 px-6 py-4 border-b-2 font-medium transition-all ${
                      isSelected(day.day)
                        ? 'border-blue-600 text-blue-600 bg-blue-50'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold">Day {day.day}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <div className="text-xs text-left mt-1 max-w-37.5">
                      {day.title.split(' ').slice(0, 3).join(' ')}...
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Day Details */}
              <div 
                id={`day-${activeDay}-panel`}
                role="tabpanel"
                aria-labelledby={`day-${activeDay}-tab`}
                className="p-6"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {activeDayData.title}
                </h4>
                
                <div className="space-y-4">
                  {activeDayData.activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{activity}</p>
                    </div>
                  ))}
                </div>
                
                {/* Additional Info */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Travel Time</div>
                    <div className="font-bold text-gray-900">4-6 hours</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Accommodation</div>
                    <div className="font-bold text-gray-900">4-star Hotel</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Meals Included</div>
                    <div className="font-bold text-gray-900">Breakfast, Dinner</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Difficulty</div>
                    <div className="font-bold text-gray-900">Moderate</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between">
                <button 
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                  aria-label="Download full itinerary as PDF document"
                >
                  Download Full Itinerary (PDF)
                </button>
                <button 
                  className="btn-primary"
                  aria-label="Book this journey and proceed to checkout"
                >
                  Book This Journey
                </button>
              </div>
            </div>
            
            {/* AI Recommendations */}
            <div className="mt-6 bg-linear-to-r from-blue-50 to-emerald-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Travel AI Recommendation</div>
                  <div className="text-sm text-gray-600">Based on similar travelers</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Based on your preferences, I recommend adding <strong>Skardu Valley</strong> 
                to your itinerary. 87% of travelers with similar preferences rated it 5 stars!
              </p>
              <button 
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                aria-label="View alternative travel routes"
              >
                View Alternative Routes →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}