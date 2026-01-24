import React, { useState, useEffect } from 'react';
import SEOHead from '../../components/seo/SEOHead';
import { X, Filter } from 'lucide-react';

const albums = [
  {
    name: 'VR in TVET Training-of-Trainers Blended Learning Course - Phase I & II',
    images: Array.from({ length: 45 }, (_, i) => `/gallery/vr/vr1 (${i + 1}).jpeg`),
  },
  {
    name: 'Chaplaincy Ministration',
    images: [
      ...Array.from({ length: 31 }, (_, i) => `/gallery/chaplaincy/chaplain-1 (${i + 1}).JPG`),
      '/gallery/chaplaincy/chaplain-1 (38).jpg',
      ...Array.from({ length: 7 }, (_, i) => `/gallery/chaplaincy/chaplain-1 (${i + 39}).JPG`),
      '/gallery/chaplaincy/chaplain-1 (40).jpg',
      ...Array.from({ length: 14 }, (_, i) => `/gallery/chaplaincy/chaplain-1 (${i + 41}).JPG`)
    ],
  },
  {
    name: '2nd Accra Worship and Prayer Conference',
    images: ['/gallery/accra-worship1.jpg'],
  },
  {
    name: '1st Accra TVET Worship and Empowerment Conference',
    images: ['/gallery/accra-worship2.jpg'],
  },
  {
    name: "50th Anniversary Celebration of Biriwa Technical Institute",
    images: [
      '/gallery/50th/50th (1).JPG',
      '/gallery/50th/50th (2).JPG',
      '/gallery/50th/50th (3).JPG',
      '/gallery/50th/50th (4).JPG',
      '/gallery/50th/50th (5).JPG',
      '/gallery/50th/50th (6).JPG',
      '/gallery/50th/50th (7).JPG',
      '/gallery/50th/50th (8).JPG',
      '/gallery/50th/50th (9).JPG',
      '/gallery/50th/50th (10).jpg',
      '/gallery/50th/50th (11).jpg',
      '/gallery/50th/50th (12).jpg',
      '/gallery/50th/50th (13).JPG',
      '/gallery/50th/50th (14).JPG',
      '/gallery/50th/50th (15).JPG',
      '/gallery/50th/50th (16).JPG',
      '/gallery/50th/50th (17).JPG',
      '/gallery/50th/50th (18).JPG',
      '/gallery/50th/50th (19).JPG',
      '/gallery/50th/50th (20).JPG',
      '/gallery/50th/50th (21).JPG',
      '/gallery/50th/50th (22).JPG',
      '/gallery/50th/50th (23).JPG',
      '/gallery/50th/50th (24).JPG',
      '/gallery/50th/50th (25).jpg',
      '/gallery/50th/50th (26).JPG',
      '/gallery/50th/50th (27).JPG',
      '/gallery/50th/50th (28).JPG',
      '/gallery/50th/50th (29).JPG',
      '/gallery/50th/50th (30).JPG',
      '/gallery/50th/50th (31).JPG',
      '/gallery/50th/50th (32).jpg',
      '/gallery/50th/50th (33).JPG',
      '/gallery/50th/50th (34).jpg',
      '/gallery/50th/50th (35).jpg',
      '/gallery/50th/50th (36).jpg',
      '/gallery/50th/50th (37).JPG',
      '/gallery/50th/50th (38).jpg',
      '/gallery/50th/50th (39).JPG',
      '/gallery/50th/50th (40).JPG',
      '/gallery/50th/50th (41).JPG',
      '/gallery/50th/50th (42).JPG',
      '/gallery/50th/50th (43).jpg',
      '/gallery/50th/50th (44).JPG',
      '/gallery/50th/50th (45).JPG',
      '/gallery/50th/50th (46).JPG',
      '/gallery/50th/50th (47).JPG',
      '/gallery/50th/50th (48).JPG',
      '/gallery/50th/50th (49).JPG',
      '/gallery/50th/50th (50).JPG',
    ],
  },
  {
    name: "Visitation to Old Students' of Biriwa Technical Institute Studying at TTU and CCTU",
    images: ['/gallery/biriwa-visitation1.jpg'],
  },
  {
    name: 'Hogbetsotsoza Celebration',
    images: [],
  },
  {
    name: 'Emerging Technologies',
    images: [
      '/gallery/emerging-technologies/emerging (1).jpg',
      '/gallery/emerging-technologies/emerging (2).jpg',
      '/gallery/emerging-technologies/emerging (3).jpg',
      '/gallery/emerging-technologies/emerging (4).jpg',
      '/gallery/emerging-technologies/emerging (5).jpg',
      '/gallery/emerging-technologies/emerging (6).jpg',
      '/gallery/emerging-technologies/emerging (7).jpg',
      '/gallery/emerging-technologies/emerging (8).jpg',
      '/gallery/emerging-technologies/emerging (9).jpg',
      '/gallery/emerging-technologies/emerging (10).jpg',
      '/gallery/emerging-technologies/emerging (11).jpg',
      '/gallery/emerging-technologies/emerging (12).jpg',
      '/gallery/emerging-technologies/emerging (13).jpg',
      '/gallery/emerging-technologies/emerging (14).jpg',
      '/gallery/emerging-technologies/emerging (15).jpg',
      '/gallery/emerging-technologies/emerging (16).jpg',
      '/gallery/emerging-technologies/emerging (17).jpg',
      '/gallery/emerging-technologies/emerging (18).jpg',
      '/gallery/emerging-technologies/emerging (19).jpg',
      '/gallery/emerging-technologies/emerging (20).jpg',
      '/gallery/emerging-technologies/emerging (21).jpg',
      '/gallery/emerging-technologies/emerging (22).jpg',
      '/gallery/emerging-technologies/emerging (23).jpg',
      '/gallery/emerging-technologies/emerging (24).jpg',
      '/gallery/emerging-technologies/emerging (25).jpg',
      '/gallery/emerging-technologies/emerging (26).jpg',
      '/gallery/emerging-technologies/emerging (27).jpg',
      '/gallery/emerging-technologies/emerging (28).jpg',
      '/gallery/emerging-technologies/emerging (29).jpg',
      '/gallery/emerging-technologies/emerging (30).jpg',
      '/gallery/emerging-technologies/emerging (31).jpg',
      '/gallery/emerging-technologies/emerging (32).jpg',
      '/gallery/emerging-technologies/emerging (33).jpg',
      '/gallery/emerging-technologies/emerging (34).jpg',
      '/gallery/emerging-technologies/emerging (35).jpg',
      '/gallery/emerging-technologies/emerging (36).jpg',
      '/gallery/emerging-technologies/emerging (37).jpg',
      '/gallery/emerging-technologies/emerging (38).jpg',
      '/gallery/emerging-technologies/emerging (39).jpg',
      '/gallery/emerging-technologies/emerging (40).jpg',
    ],
  },
  {
    name: 'Digital Skills Training',
    images: [
      '/gallery/digital-skills-training/digital (1).jpg',
      '/gallery/digital-skills-training/digital (2).JPG',
      '/gallery/digital-skills-training/digital (3).JPG',
      '/gallery/digital-skills-training/digital (4).jpg',
      '/gallery/digital-skills-training/digital (5).jpg',
      '/gallery/digital-skills-training/digital (6).jpg',
      '/gallery/digital-skills-training/digital (7).jpg',
      '/gallery/digital-skills-training/digital (8).jpg',
      '/gallery/digital-skills-training/digital (9).jpg',
      '/gallery/digital-skills-training/digital (10).jpg',
      '/gallery/digital-skills-training/digital (11).jpg',
      '/gallery/digital-skills-training/digital (12).jpg',
      '/gallery/digital-skills-training/digital (13).jpg',
      '/gallery/digital-skills-training/digital (14).jpg',
      '/gallery/digital-skills-training/digital (15).jpg',
      '/gallery/digital-skills-training/digital (16).jpg',
      '/gallery/digital-skills-training/digital (17).jpg',
      '/gallery/digital-skills-training/digital (18).jpg',
      '/gallery/digital-skills-training/digital (19).jpg',
      '/gallery/digital-skills-training/digital (20).jpg',
      '/gallery/digital-skills-training/digital (21).jpg',
      '/gallery/digital-skills-training/digital (22).jpg',
      '/gallery/digital-skills-training/digital (23).jpg',
      '/gallery/digital-skills-training/digital (24).jpg',
      '/gallery/digital-skills-training/digital (25).jpg',
      '/gallery/digital-skills-training/digital (26).jpg',
      '/gallery/digital-skills-training/digital (27).jpg',
      '/gallery/digital-skills-training/digital (28).jpg',
      '/gallery/digital-skills-training/digital (29).jpg',
      '/gallery/digital-skills-training/digital (30).jpg',
      '/gallery/digital-skills-training/digital (31).jpg',
      '/gallery/digital-skills-training/digital (32).jpg',
      '/gallery/digital-skills-training/digital (33).jpg',
      '/gallery/digital-skills-training/digital (34).jpg',
      '/gallery/digital-skills-training/digital (35).jpg',
      '/gallery/digital-skills-training/digital (36).jpg',
      '/gallery/digital-skills-training/digital (37).jpg',
      '/gallery/digital-skills-training/digital (38).jpg',
      '/gallery/digital-skills-training/digital (39).jpg',
      '/gallery/digital-skills-training/digital (40).jpg',
    ],
  },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);
  const [activeAlbum, setActiveAlbum] = useState(0);
  const [imageStates, setImageStates] = useState({});
  const [displayCount, setDisplayCount] = useState(12);

  useEffect(() => {
    setImageStates({});
    setDisplayCount(12);
  }, [activeAlbum]);

  const images = albums[activeAlbum].images;
  const visibleImages = images.slice(0, displayCount);
  const hasMore = displayCount < images.length;

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 12, images.length));
  };

  const handleImageLoad = (src) => {
    setImageStates(prev => ({ ...prev, [src]: { loaded: true, error: false } }));
  };

  const handleImageError = (src) => {
    setImageStates(prev => ({ ...prev, [src]: { loaded: true, error: true } }));
  };

  return (
    <>
      <SEOHead
        title="Gallery | TVET Events & Community Highlights"
        description="View the gallery of TVET events, workshops, and community highlights from Elolo Agbleke's work in Ghana."
        canonical="https://eloloagbleke.com/resources/gallery"
      />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-[#df8125] text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Gallery</h1>
            <p className="text-white/90 text-base sm:text-lg">
              Explore moments from our TVET initiatives
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Filter Tabs */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-[#df8125]" />
              <h2 className="text-lg font-bold text-gray-900">Filter by Album</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {albums.map((album, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveAlbum(idx)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeAlbum === idx
                      ? 'bg-[#df8125] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {album.name}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
            {visibleImages.map((src, idx) => {
              const state = imageStates[src] || { loaded: false, error: false };
              
              return (
                <div
                  key={`${activeAlbum}-${idx}`}
                  className="break-inside-avoid cursor-pointer group relative"
                  onClick={() => !state.error && setSelected(src)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-100">
                    {/* Loading Skeleton */}
                    {!state.loaded && (
                      <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 animate-pulse" />
                    )}
                    
                    {/* Error State */}
                    {state.error && (
                      <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Image unavailable</span>
                      </div>
                    )}
                    
                    {/* Image */}
                    {!state.error && (
                      <img
                        src={src}
                        alt={`${albums[activeAlbum].name} - Image ${idx + 1}`}
                        className={`w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ${
                          state.loaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => handleImageLoad(src)}
                        onError={() => handleImageError(src)}
                        loading="lazy"
                      />
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-xs font-medium">Click to view</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More / Load Less Buttons */}
          {(hasMore || displayCount > 12) && (
            <div className="text-center mt-8 flex flex-col items-center gap-2">
              {hasMore && (
                <button
                  onClick={loadMore}
                  className="px-8 py-3 bg-[#df8125] text-white rounded-full font-semibold hover:bg-[#c87120] transition-colors shadow-md hover:shadow-lg"
                >
                  Load More Images
                </button>
              )}
              {displayCount > 12 && (
                <button
                  onClick={() => setDisplayCount(12)}
                  className="px-8 py-3 bg-gray-200 text-[#df8125] rounded-full font-semibold hover:bg-gray-300 transition-colors shadow-md hover:shadow-lg"
                >
                  Load Less
                </button>
              )}
              <p className="text-gray-600 text-sm mt-3">
                Showing {displayCount} of {images.length} images
              </p>
            </div>
          )}

          {/* All Loaded Message */}
          {!hasMore && images.length > 12 && (
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                All {images.length} images loaded
              </p>
            </div>
          )}
        </div>

        {/* Fullscreen Modal */}
        {selected && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div 
              className="relative max-w-6xl max-h-[95vh] w-full"
              onClick={e => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={selected}
                alt="Full size"
                className="max-w-full max-h-[95vh] w-auto h-auto mx-auto object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm text-[#df8125] rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-xl"
                aria-label="Close"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white rounded-lg p-3 sm:p-4">
                <p className="text-sm sm:text-base font-semibold">{albums[activeAlbum].name}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}