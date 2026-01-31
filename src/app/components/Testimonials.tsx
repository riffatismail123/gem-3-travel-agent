'use client';

import { Star, Quote, MapPin, Calendar, Play } from 'lucide-react';
import { Testimonial } from '../types';
import { useState } from 'react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "London, UK",
    comment: "The AI itinerary was spot on! It suggested hidden gems in Hunza Valley that weren't in any guidebook. The safety alerts were particularly helpful during mountain treks.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Ahmed Raza",
    location: "Dubai, UAE",
    comment: "As a Pakistani expat, I wanted to show my family our heritage. The intelligent travel agent created a perfect cultural journey from Lahore to Swat. The real-time translation assistance was invaluable!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Maria Garcia",
    location: "Madrid, Spain",
    comment: "Traveling solo as a woman in Pakistan seemed daunting, but the safety intelligence system and 24/7 support gave me confidence. The AI matched me with local female guides - brilliant!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "David Chen",
    location: "Singapore",
    comment: "The route optimization saved us 8 hours of travel time! Weather-adjusted suggestions kept us comfortable throughout. Will definitely use the AI agent for our next adventure.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "Fatima Khan",
    location: "Karachi, Pakistan",
    comment: "Finally, a travel service that understands Pakistan's diversity! The AI suggested experiences I never knew existed in my own country. The cultural sensitivity algorithms are impressive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 6,
    name: "Robert Kim",
    location: "Seoul, South Korea",
    comment: "The mobile app with offline maps saved us multiple times in remote areas. The food recommendation engine matched our dietary preferences perfectly with local cuisine.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const stats = [
  { value: "98%", label: "Satisfaction Rate" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "5K+", label: "Happy Travelers" },
  { value: "50+", label: "Countries Served" }
];

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : activeFilter === '5star'
    ? testimonials.filter(t => t.rating === 5)
    : testimonials;

  return (
    <section id="testimonials" className="section-padding bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Travelers <span className="text-blue-600">Love Our Service</span>
          </h2>
          <p className="section-subtitle">
            See what our global community says about their AI-powered Pakistan adventures
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center card-hover">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Show all reviews"
          >
            All Reviews
          </button>
          <button
            onClick={() => setActiveFilter('5star')}
            className={`px-4 py-2 rounded-full font-medium transition-all flex items-center space-x-2 ${
              activeFilter === '5star'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Show only 5 star reviews"
          >
            <Star className="h-4 w-4 fill-current" />
            <span>5 Star Reviews</span>
          </button>
          <button
            onClick={() => setActiveFilter('international')}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeFilter === 'international'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Show international travelers reviews"
          >
            International Travelers
          </button>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-blue-100" />
                </div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Comment */}
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                
                {/* User Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trip Details */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>Dec 2023</span>
                    </div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                      {testimonial.rating === 5 ? 'Premium' : 'Standard'} Package
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs">
                    2 weeks ago
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Video Testimonials Section */}
        <div className="bg-linear-to-r from-blue-600 to-emerald-600 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Watch Their Journeys
              </h3>
              <p className="text-white/90 mb-6">
                See how our intelligent travel agent transformed their Pakistan adventures through real traveler videos.
              </p>
              
              <div className="space-y-4">
                {[
                  "AI-Powered Route Optimization in Action",
                  "Real-time Safety Alerts Experience",
                  "Cultural Immersion with Local Guides",
                  "Mobile App Walkthrough & Features"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              
              <button 
                className="mt-8 bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                aria-label="View all video testimonials"
              >
                View All Video Testimonials
              </button>
            </div>
            
            <div className="relative h-64 lg:h-auto">
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Traveler testimonials"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Play video testimonials"
                  title="Play video testimonials"
                >
                  <Play className="h-6 w-6 text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-12">
          <h4 className="text-center text-lg font-bold text-gray-900 mb-6">
            Trusted & Recognized By
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              "Pakistan Tourism Board",
              "World Travel Awards",
              "AI Travel Innovation",
              "Safe Travel Certified",
              "Google Travel Partner"
            ].map((badge, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="text-gray-800 font-semibold text-center">
                  {badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}