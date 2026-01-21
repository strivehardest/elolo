import React from 'react';
import Link from 'next/link';
import { Home, Search, ArrowLeft, Mail } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';

export default function Custom404() {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found"
        description="The page you are looking for could not be found. Return to homepage or explore other sections."
        canonical="/404"
      />

      <div className="min-h-screen bg-gradient-to-br from-[#fefefd] to-[#f5f5f4] flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-extrabold text-[#df8125] opacity-20 leading-none">
              404
            </h1>
            <div className="relative -mt-20 md:-mt-24">
              <div className="inline-block bg-white rounded-2xl shadow-xl px-8 py-6 border-2 border-[#df8125]">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Page Not Found
                </h2>
                <p className="text-lg text-gray-600">
                  Oops! The page you're looking for doesn't exist.
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-12 max-w-md mx-auto">
            The page you are trying to reach may have been moved, deleted, or never existed. 
            Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-lg mx-auto">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-[#df8125] text-white rounded-xl font-semibold hover:bg-[#c67320] transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#df8125] border-2 border-[#df8125] rounded-xl font-semibold hover:bg-[#df8125] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
              <Search className="w-5 h-5 text-[#df8125]" />
              Explore Our Site
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#df8125] font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-[#df8125] font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/events"
                className="text-gray-700 hover:text-[#df8125] font-medium transition-colors"
              >
                Events
              </Link>
              <Link
                href="/resources"
                className="text-gray-700 hover:text-[#df8125] font-medium transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/resources/gallery"
                className="text-gray-700 hover:text-[#df8125] font-medium transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/resources/faqs"
                className="text-gray-700 hover:text-[#df8125] font-medium transition-colors"
              >
                FAQs
              </Link>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="mt-8 inline-flex items-center gap-2 text-gray-600 hover:text-[#df8125] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back to previous page
          </button>
        </div>
      </div>
    </>
  );
}
