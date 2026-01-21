import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & About - Spans 4 columns on large screens */}
          <div className="lg:col-span-4">
            <div className="flex justify-center lg:justify-start">
              <Link href="https://eloloagbleke.com" passHref legacyBehavior>
                <a className="block">
                  <div className="relative h-12 w-32 sm:h-14 sm:w-40 mb-6 mx-auto lg:mx-0">
                    <Image
                      src="/logo.png"
                      alt="Elolo Agbleke Logo"
                      fill
                      sizes="(max-width: 640px) 128px, 160px"
                      style={{ objectFit: "contain" }}
                      priority
                    />
                  </div>
                </a>
              </Link>
            </div>
            <h3 className="text-xl font-bold text-[#df8125] mb-3 text-center lg:text-left">
              TVET Innovation, Digital Transformation & Capacity Building
            </h3>
            <p className="text-gray-300 leading-relaxed text-base mb-6 max-w-sm text-center lg:text-left">
              Empowering individuals and organizations through training, innovation, and technology-driven solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6 justify-center">
              <a 
                href="https://web.facebook.com/EldChapEl" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="w-11 h-11 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-[#df8125] hover:border-[#df8125] transition-all duration-300 group"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                  alt="Facebook" 
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" 
                />
              </a>
              <a 
                href="https://x.com/elolo2000?s=11" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X" 
                className="w-11 h-11 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-[#df8125] hover:border-[#df8125] transition-all duration-300 group"
              >
                <img 
                  src="https://cdn.simpleicons.org/x/FFFFFF" 
                  alt="X" 
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" 
                />
              </a>
              <a 
                href="https://www.youtube.com/@eloloagbleke746" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube" 
                className="w-11 h-11 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-[#df8125] hover:border-[#df8125] transition-all duration-300 group"
              >
                <img 
                  src="https://cdn.simpleicons.org/youtube/FF0000" 
                  alt="YouTube" 
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" 
                />
              </a>
              <a 
                href="https://gh.linkedin.com/in/elolo-kwabla-magnus-agbleke-69693b2b" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="w-11 h-11 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-[#df8125] hover:border-[#df8125] transition-all duration-300 group"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" 
                  alt="LinkedIn" 
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" 
                />
              </a>
              <a 
                href="https://wa.me/233243623269" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp" 
                className="w-11 h-11 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-[#df8125] hover:border-[#df8125] transition-all duration-300 group"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" 
                />
              </a>
              <a 
                href="https://t.me/EldChapEl" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Telegram" 
                className="w-11 h-11 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-[#df8125] hover:border-[#df8125] transition-all duration-300 group"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" 
                  alt="Telegram" 
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" 
                />
              </a>
            </div>
          </div>

          {/* Navigation Links - Spans 8 columns on large screens */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6">
            {/* Main */}
            <div>
              <h2 className="text-sm font-bold text-[#df8125] tracking-wider uppercase mb-5 border-b border-[#df8125]/30 pb-2">
                Main
              </h2>
              <ul className="space-y-3 text-base">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Groups */}
            <div>
              <h2 className="text-sm font-bold text-[#df8125] tracking-wider uppercase mb-5 border-b border-[#df8125]/30 pb-2">
                Groups
              </h2>
              <ul className="space-y-3 text-base">
                <li>
                  <Link href="/groups/tvet-foundation" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    TVET Foundation
                  </Link>
                </li>
                <li>
                  <Link href="/groups/asset-initiative" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    ASSET Initiative
                  </Link>
                </li>
                <li>
                  <Link href="/groups/chaplains-association" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Chaplains in Education
                  </Link>
                </li>
                <li>
                  <Link href="/groups/workforce-development" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Workforce Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Events */}
            <div>
              <h2 className="text-sm font-bold text-[#df8125] tracking-wider uppercase mb-5 border-b border-[#df8125]/30 pb-2">
                Events
              </h2>
              <ul className="space-y-3 text-base">
                <li>
                  <Link href="/events" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    All Events
                  </Link>
                </li>
                <li>
                  <Link href="/events/upcoming" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Upcoming
                  </Link>
                </li>
                <li>
                  <Link href="/events/past" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Past Events
                  </Link>
                </li>
                <li>
                  <Link href="/events/conferences" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Conferences
                  </Link>
                </li>
                <li>
                  <Link href="/events/workshops" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Workshops
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-sm font-bold text-[#df8125] tracking-wider uppercase mb-5 border-b border-[#df8125]/30 pb-2">
                Resources
              </h2>
              <ul className="space-y-3 text-base">
                <li>
                  <Link href="/resources/documents" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Documents
                  </Link>
                </li>
                <li>
                  <Link href="/resources/testimonials" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/resources/links" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Useful Links
                  </Link>
                </li>
                <li>
                  <Link href="/resources/gallery" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/resources/faqs" className="text-gray-300 hover:text-[#df8125] transition-colors duration-200 inline-block">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center justify-center gap-1 text-sm text-gray-300">
            <div className="text-center w-full">
              <span className="font-medium text-white">
                © 2026 Elolo Agbleke
              </span>
              <span className="mx-1">•</span>
              <span>All Rights Reserved</span>
            </div>
            <div className="text-center w-full mt-1">
              <span className="font-semibold">Developed and Designed by </span>
              <Link
                href="https://www.celestialwebsolutions.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#df8125] font-bold hover:underline transition-all"
              >
                Celestial Web Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}