import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navigation from '../layout/Navigation'; 
import Footer from '../layout/Footer'; 

export default function Layout({ children }) {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />

      {/* Page Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Move to Top Arrow */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed left-6 bottom-8 z-50 bg-[#df8125] text-white p-3 rounded-full shadow-lg hover:bg-[#b96a1a] transition-colors flex items-center justify-center"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
