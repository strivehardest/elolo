import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// Add this to your _app.js or _document.js:
// import '@fontsource/montserrat/400.css';
// import '@fontsource/montserrat/500.css';
// import '@fontsource/montserrat/600.css';
// import '@fontsource/montserrat/700.css';

const Navigation = ({ currentPage = '', onPageChange = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '' },
    { name: 'About', href: 'about' },
    {
      name: 'Groups',
      href: 'groups',
      hasDropdown: true,
      dropdownItems: [
        { name: 'TVET Foundation Ghana', href: 'groups/tvet-foundation' },
        { name: 'The ASSET Initiative', href: 'groups/asset-initiative' },
        { name: 'Association of Chaplains in Education', href: 'groups/chaplains-association' },
        { name: 'Workforce Development Institute', href: 'groups/workforce-development' }
      ]
    },
    {
      name: 'Events',
      href: 'events',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Events', href: 'events' },
        { name: 'Upcoming Events', href: 'events/upcoming' },
        { name: 'Workshops', href: 'events/workshops' },
        { name: 'Conferences', href: 'events/conferences' },
        { name: 'Networking Events', href: 'events/networking' },
        { name: 'Past Events', href: 'events/past' }
      ]
    },
    { name: 'Services', href: 'services' },
    {
      name: 'Resources',
      href: 'resources',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Documents', href: 'resources/documents' },
        { name: 'Testimonials', href: 'resources/testimonials' },
        { name: 'Useful Links', href: 'resources/links' },
        { name: 'Gallery', href: 'resources/gallery' },
        { name: 'FAQs', href: 'resources/faqs' }
      ]
    },
    { name: 'Contact', href: 'contact' }
  ];

  const handleClick = (page) => {
    onPageChange(page);
    router.push(`/${page}`);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <React.Fragment>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-montserrat ${
          scrolled ? 'bg-white shadow-sm' : 'bg-white'
        }`}
        style={{ fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
      >
        {/* Social, Contact (Top Bar) */}
        <div className="w-full bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-2 text-xs text-gray-700">
            <div className="flex items-center gap-3">
              <a href="tel:+233243623269" className="flex items-center gap-1 hover:text-orange-600 font-medium transition-colors" title="Call">
                <Phone className="w-4 h-4" /> +233 24 362 3269
              </a>
              <a href="mailto:info@eloloagbleke.com" className="flex items-center gap-1 hover:text-orange-600 font-medium transition-colors" title="Email">
                <Mail className="w-4 h-4" /> info@eloloagbleke.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://web.facebook.com/EldChapEl" target="_blank" rel="noopener noreferrer" title="Facebook" className="hover:scale-110 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ width: 20, height: 20 }} />
              </a>
              <a href="https://x.com/elolo2000?s=11" target="_blank" rel="noopener noreferrer" title="X" className="hover:scale-110 transition-transform">
                <img src="https://cdn.simpleicons.org/x/000000" alt="X" style={{ width: 14, height: 14 }} />
              </a>
              <a href="https://www.youtube.com/@eloloagbleke746" target="_blank" rel="noopener noreferrer" title="YouTube" className="hover:scale-110 transition-transform">
                <img src="https://cdn.simpleicons.org/youtube/ff0000" alt="YouTube" style={{ width: 20, height: 20 }} />
              </a>
              <a href="https://gh.linkedin.com/in/elolo-kwabla-magnus-agbleke-69693b2b" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:scale-110 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" style={{ width: 14, height: 14 }} />
              </a>
              <a href="https://wa.me/233243623269" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="hover:scale-110 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: 20, height: 20 }} />
              </a>
              <a href="https://t.me/EldChapEl" target="_blank" rel="noopener noreferrer" title="Telegram" className="hover:scale-110 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" style={{ width: 14, height: 14 }} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button
              onClick={() => handleClick('')}
              className="focus:outline-none"
              aria-label="Go to home"
            >
              <div className="relative h-10 w-40">
                <Image
                  src="/logo.png"
                  alt="Elolo Agbleke logo"
                  fill
                  sizes="160px"
                  style={{ objectFit: 'contain' }}
                  priority={true}
                />
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => {
                const isActive = currentPage === item.href;
                if (item.name === 'Contact') {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleClick(item.href)}
                      className="px-6 py-2.5 bg-[#df8125] text-white rounded-xl font-bold text-base shadow-lg transition-colors hover:bg-white hover:text-[#df8125]"
                    >
                      {item.name}
                    </button>
                  );
                }
                return (
                  <div
                    key={item.name}
                    className="relative nav-dropdown-parent"
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-orange-600'
                          : 'text-gray-700 hover:text-orange-600'
                      }`}
                      onClick={e => {
                        if (item.hasDropdown) {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === item.name ? null : item.name);
                        } else {
                          handleClick(item.href);
                        }
                      }}
                      aria-haspopup={item.hasDropdown ? 'menu' : undefined}
                      aria-expanded={item.hasDropdown && activeDropdown === item.name}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                    {/* Dropdown */}
                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 nav-dropdown-menu ${
                          activeDropdown === item.name
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                        }`}
                        tabIndex={-1}
                        onClick={e => e.stopPropagation()}
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <button
                            key={dropdownItem.name}
                            onClick={() => handleClick(dropdownItem.href)}
                            className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* ...existing code... */}
        <div
          className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-6 py-4 space-y-1">
            {menuItems.map((item) => {
              const isActive = currentPage === item.href;

              if (item.name === 'Contact') {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleClick(item.href)}
                    className="w-full mt-4 px-6 py-3 bg-[#df8125] text-white rounded-xl font-bold text-base shadow-lg transition-colors hover:bg-white hover:text-[#df8125]"
                  >
                    {item.name}
                  </button>
                );
              }

              return (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => !item.hasDropdown && handleClick(item.href)}
                      className={`flex-1 text-left py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-orange-600'
                          : 'text-gray-700 hover:text-orange-600'
                      }`}
                    >
                      {item.name}
                    </button>
                    {item.hasDropdown && (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="p-3 text-gray-700 hover:text-orange-600"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <button
                          key={dropdownItem.name}
                          onClick={() => handleClick(dropdownItem.href)}
                          className="block w-full text-left py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-20"></div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/233243623269"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: 32, height: 32 }}
        />
      </a>
    </React.Fragment>
  );
};

export default Navigation;