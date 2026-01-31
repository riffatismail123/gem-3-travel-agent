'use client';

import { Play, Shield, Award, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const stats = [
    { icon: Globe, value: '50+', label: 'Destinations' },
    { icon: Shield, value: '100%', label: 'Safe Travel' },
    { icon: Award, value: '5K+', label: 'Happy Travelers' },
  ];

  return (
    <section id="home" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-emerald-600/10 -skew-y-6 transform origin-top-left"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-sm font-semibold">AI-travel by riffat ismail</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Discover the{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-emerald-600">
                Beauty of Pakistan
              </span>{' '}
              with Intelligent Guidance
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Our AI-powered travel agent creates personalized itineraries, 
              suggests hidden gems, and ensures a seamless travel experience 
              across Pakistan's majestic landscapes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary flex items-center justify-center">
                Start Planning Now
              </button>
              <button 
                className="flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                onClick={() => setVideoPlaying(true)}
              >
                <Play className="h-5 w-5" />
                <span>Watch Journey</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Image/Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl card-hover">
              <img
                src="hunza-1.jpg"
                alt="Northern Areas of Pakistan"
                className="w-full h-100 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Hunza Valley</h3>
                <p className="text-sm">The Mountain Kingdom</p>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg card-hover">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Best Season</div>
                  <div className="text-sm text-gray-600">Apr - Oct</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg card-hover">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Safety Score</div>
                  <div className="text-sm text-gray-600">9.5/10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Modal */}
        {videoPlaying && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute -top-10 right-0 text-white text-2xl"
                onClick={() => setVideoPlaying(false)}
              >
                Close
              </button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Pakistan Travel"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}