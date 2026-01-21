import React, { useState } from 'react';
import SEOHead from '../../components/seo/SEOHead';
import { pagesSEO } from '../../lib/seo';

const images = [
  '/gallery/hero1.jpg',
  '/gallery/hero2.jpg',
  '/gallery/hero3.jpg',
  '/gallery/hero4.jpg',
  '/gallery/hero5.jpg',
  '/gallery/hero6.jpg',
  '/gallery/image1.jpg',
];

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    large: 4
  };

  const getItemsPerView = () => {
    if (typeof window === 'undefined') return itemsPerPage.desktop;
    const width = window.innerWidth;
    if (width < 640) return itemsPerPage.mobile;
    if (width < 768) return itemsPerPage.tablet;
    if (width < 1280) return itemsPerPage.desktop;
    return itemsPerPage.large;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, images.length - itemsPerView);

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleImageClick = (src) => {
    setSelected(src);
  };

  return (
    <>
      <SEOHead
        title="Gallery | TVET Events & Community Highlights"
        description="View the gallery of TVET events, workshops, and community highlights from Elolo Agbleke's work in Ghana."
        canonical="https://eloloagbleke.com/resources/gallery"
        openGraph={{
          title: "Gallery | TVET Events & Community Highlights",
          description: "View the gallery of TVET events, workshops, and community highlights from Elolo Agbleke's work in Ghana.",
          url: "https://eloloagbleke.com/resources/gallery"
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'gallery, TVET, events, workshops, Elolo Agbleke, Ghana, community, highlights, photos, images'
        }]}
      />
      <div className="min-h-screen w-full bg-white">
      <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 md:py-16 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-[#df8125] text-center">
          Gallery
        </h1>
        
        <div className="relative w-full">
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#df8125] rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg hover:bg-[#df8125] hover:text-white transition-colors flex items-center justify-center font-bold text-2xl -ml-5"
              aria-label="Previous"
            >
              ‹
            </button>
          )}
          
          {currentIndex < maxIndex && (
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#df8125] rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg hover:bg-[#df8125] hover:text-white transition-colors flex items-center justify-center font-bold text-2xl -mr-5"
              aria-label="Next"
            >
              ›
            </button>
          )}

          {/* Gallery Container */}
          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-3 sm:gap-4 md:gap-5 lg:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 cursor-pointer"
                  style={{
                    width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * (itemsPerView === 1 ? 12 : itemsPerView === 2 ? 16 : itemsPerView === 3 ? 20 : 24) / itemsPerView}px)`
                  }}
                  onClick={() => handleImageClick(src)}
                >
                  <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <img
                      src={src}
                      alt={`Gallery image ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-[#df8125] w-6 sm:w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-3 sm:p-6"
          onClick={() => setSelected(null)}
        >
          <div 
            className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected}
              alt="Selected gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white text-[#df8125] rounded-full w-10 h-10 sm:w-12 sm:h-12 font-bold shadow-lg hover:bg-[#df8125] hover:text-white transition-colors duration-200 flex items-center justify-center text-2xl"
              onClick={() => setSelected(null)}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}