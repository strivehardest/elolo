import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">

      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#df8125]/60 to-transparent" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Logo & About */}
          <div className="lg:col-span-4">
            <div className="flex justify-center lg:justify-start mb-6">
              <Link href="https://eloloagbleke.com">
                <div className="relative h-12 w-32 sm:h-14 sm:w-40">
                  <Image
                    src="/logo1.png"
                    alt="Elolo Agbleke Logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            <h3 className="text-xl font-bold text-[#df8125] mb-3 text-center lg:text-left">
              TVET Innovation, Digital Transformation & Capacity Building
            </h3>

            <p className="text-gray-300 leading-relaxed text-base max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
              Empowering individuals and organizations through training, innovation,
              and technology-driven solutions.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              {[
                {
                  href: "https://web.facebook.com/EldChapEl",
                  icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
                  label: "Facebook"
                },
                {
                  href: "https://x.com/elolo2000?s=11",
                  icon: "https://cdn.simpleicons.org/x/FFFFFF",
                  label: "X"
                },
                {
                  href: "https://www.youtube.com/@eloloagbleke746",
                  icon: "https://cdn.simpleicons.org/youtube/ff0000",
                  label: "YouTube"
                },
                {
                  href: "https://gh.linkedin.com/in/elolo-kwabla-magnus-agbleke-69693b2b",
                  icon: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
                  label: "LinkedIn"
                },
                {
                  href: "https://wa.me/233243623269",
                  icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                  label: "WhatsApp"
                },
                {
                  href: "https://t.me/EldChapEl",
                  icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
                  label: "Telegram"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 bg-white/10 backdrop-blur border border-white/15 rounded-xl
                             flex items-center justify-center
                             hover:bg-[#df8125] hover:border-[#df8125]
                             hover:shadow-lg hover:shadow-[#df8125]/30
                             transition-all duration-300 group"
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* Column */}
            {[
              {
                title: "Main",
                links: [
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" }
                ]
              },
              {
                title: "Groups",
                links: [
                  { href: "/groups/tvet-foundation", label: "TVET Foundation" },
                  { href: "/groups/asset-initiative", label: "ASSET Initiative" },
                  { href: "/groups/chaplains-association", label: "Chaplains in Education" },
                  { href: "/groups/workforce-development", label: "Workforce Development" }
                ]
              },
              {
                title: "Events",
                links: [
                  { href: "/events", label: "All Events" },
                  { href: "/events/upcoming", label: "Upcoming" },
                  { href: "/events/past", label: "Past Events" },
                  { href: "/events/conferences", label: "Conferences" },
                  { href: "/events/workshops", label: "Workshops" }
                ]
              },
              {
                title: "Resources",
                links: [
                  { href: "/resources/download", label: "Downloads" },
                  { href: "/resources/testimonials", label: "Testimonials" },
                  { href: "/resources/links", label: "Useful Links" },
                  { href: "/resources/gallery", label: "Gallery" },
                  { href: "/resources/faqs", label: "FAQs" }
                ]
              }
            ].map((section, index) => (
              <div key={index}>
                <h2 className="text-sm font-semibold text-[#df8125] tracking-widest uppercase mb-6 relative">
                  {section.title}
                  <span className="absolute left-0 -bottom-2 h-[2px] w-10 bg-[#df8125]/60 rounded-full" />
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-[#df8125] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col items-center justify-center gap-2 text-sm md:text-base text-gray-400 text-center">
            <div>
              <span className="font-medium text-white">© 2026 Elolo Agbleke</span>
              <span className="mx-2">•</span>
              <span>All Rights Reserved</span>
            </div>
            <div>
              <span className="font-semibold text-gray-300">Designed & Developed by </span>
              <Link
                href="https://www.celestialwebsolutions.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#df8125] font-extrabold tracking-wide hover:underline hover:text-[#ff9b3d] transition-colors duration-200"
                style={{ fontFamily: 'Bricolage Grotesque, Arial, sans-serif' }}
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
