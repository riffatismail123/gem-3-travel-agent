'use client';

import { Plane, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Services', href: '#services' },
    { label: 'Itinerary Planner', href: '#itinerary' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'AI Travel Planning',
    'Custom Itineraries',
    'Group Travel',
    'Adventure Tours',
    'Cultural Experiences',
    'Business Travel',
  ];

  const contactInfo = [
    { icon: Phone, text: '+92 300 123 4567', href: 'tel:+923001234567' },
    { icon: Mail, text: 'info@intellitravelpk.com', href: 'mailto:info@intellitravelpk.com' },
    { icon: MapPin, text: 'Islamabad, Pakistan', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Follow us on Facebook' },
    { icon: Twitter, href: '#', label: 'Follow us on Twitter' },
    { icon: Instagram, href: '#', label: 'Follow us on Instagram' },
    { icon: Youtube, href: '#', label: 'Subscribe to our YouTube channel' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Plane className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">IntelliTravel PK</h2>
                <p className="text-sm text-gray-400">Intelligent Travel Agent</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered travel planning for Pakistan&apos;s most memorable experiences. 
              We combine technology with local expertise for seamless adventures.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 mb-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{info.text}</span>
                  </a>
                );
              })}
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold mb-3">AI Travel Insights</h4>
              <p className="text-sm text-gray-400 mb-4">
                Get personalized travel recommendations
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  aria-label="Email address for newsletter subscription"
                />
                <button 
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg font-semibold transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IntelliTravel PK. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              AI Ethics
            </a>
          </div>
        </div>

        {/* AI Certification */}
        <div className="mt-8 bg-gray-800/50 rounded-lg p-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600/20 to-emerald-600/20 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              AI-Powered Travel Agent • Certified by Pakistan Tourism Development Corporation
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}