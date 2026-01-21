import React from "react";
import SEOHead from '../components/seo/SEOHead';
import { pagesSEO } from '../lib/seo';
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  Phone,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  User,
  CheckCircle,
} from "lucide-react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xnjjprob");

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/233243623269?text=Hello%20Elolo%2C%20I%20would%20like%20to%20connect', '_blank');
  };

  const contactReasons = [
    { value: "general", label: "General Inquiry" },
    { value: "coaching", label: "Leadership Coaching" },
    { value: "events", label: "Event Information" },
    { value: "speaking", label: "Speaking Engagement" },
    { value: "consultation", label: "TVET Consultation" },
    { value: "partnership", label: "Partnership Opportunity" },
  ];

  return (
    <>
      <SEOHead
        title={pagesSEO.contact.title}
        description={pagesSEO.contact.description}
        canonical={pagesSEO.contact.canonical}
        openGraph={pagesSEO.contact.openGraph}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'Elolo Agbleke, contact, TVET, leadership, Ghana, professional development, community, inquiry, event planning, services'
        }]}
      />
      <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <div className="w-32 h-1 mx-auto mb-8 bg-yellow-600"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'd love to hear from you! Whether you have questions, want to discuss leadership coaching, 
            or are interested in collaboration opportunities, don't hesitate to reach out.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div
              className="rounded-3xl p-8 text-white mb-8 shadow-lg relative overflow-hidden"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-yellow-900 bg-opacity-70 pointer-events-none" aria-hidden="true"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@eloloagbleke.com" className="hover:underline break-all">
                        info@eloloagbleke.com
                      </a>
                      <p className="text-sm text-yellow-100 mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+233243623269" className="hover:underline block">
                        +233 24 362 3269
                      </a>
                      <a href="tel:+233507403888" className="hover:underline block mt-1">
                        +233 50 740 3888
                      </a>
                      <p className="text-sm text-yellow-100 mt-1">
                        Mon - Fri, 9AM - 5PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <button 
                        onClick={handleWhatsAppClick}
                        className="hover:underline text-left"
                      >
                        +233 24 362 3269
                      </button>
                      <p className="text-sm text-yellow-100 mt-1">
                        Quick chat available
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p>Within 24 hours</p>
                      <p className="text-sm text-yellow-100 mt-1">
                        Monday - Friday, 9AM - 5PM
                      </p>
                    </div>
                  </div>
                </div>
                {/* Social Media Links */}
                <div className="mt-8 pt-8 border-t border-yellow-500">
                  <h3 className="font-semibold mb-4">Connect on Social Media</h3>
                  <div className="grid grid-cols-5 gap-3">
                    <a
                      href="https://web.facebook.com/EldChapEl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      title="Facebook"
                    >
                      <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://t.me/EldChapEl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      title="Telegram"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                        alt="Telegram"
                        className="h-5 w-5 object-contain"
                      />
                    </a>
                    <a
                      href="https://linkedin.com/in/eloloagbleke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      title="LinkedIn"
                    >
                      <svg className="h-5 w-5" fill="#0A66C2" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href="https://x.com/elolo2000?s=11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      title="Twitter/X"
                    >
                      <svg className="h-5 w-5" fill="#000000" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a
                      href="https://youtube.com/@eloloagbleke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      title="YouTube"
                    >
                      <svg className="h-5 w-5" fill="#FF0000" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick Links */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <a
                  href="/about"
                  className="w-full p-3 rounded-lg hover:bg-yellow-50 transition-colors flex items-center text-gray-900"
                >
                  <User className="h-5 w-5 mr-3 text-yellow-600" />
                  <span>About Elolo</span>
                </a>
                <a
                  href="/events"
                  className="w-full p-3 rounded-lg hover:bg-yellow-50 transition-colors flex items-center text-gray-900"
                >
                  <Calendar className="h-5 w-5 mr-3 text-yellow-600" />
                  <span>View Events</span>
                </a>
                <a
                  href="/services"
                  className="w-full p-3 rounded-lg hover:bg-yellow-50 transition-colors flex items-center text-gray-900"
                >
                  <MessageSquare className="h-5 w-5 mr-3 text-yellow-600" />
                  <span>Learn About Services</span>
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Message Sent!
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Send Me a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-gray-900"
                          placeholder="Enter your full name"
                        />
                        <ValidationError 
                          prefix="Name" 
                          field="name"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-gray-900"
                          placeholder="Enter your email address"
                        />
                        <ValidationError 
                          prefix="Email" 
                          field="email"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        What can I help you with? *
                      </label>
                      <select
                        name="contactReason"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-gray-900"
                      >
                        {contactReasons.map((reason) => (
                          <option key={reason.value} value={reason.value}>
                            {reason.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-gray-900"
                        placeholder="Brief subject of your message"
                      />
                      <ValidationError 
                        prefix="Subject" 
                        field="subject"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent resize-vertical text-gray-900"
                        placeholder="Tell me more about your inquiry..."
                      />
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-yellow-600 text-white font-bold text-lg py-4 rounded-lg shadow-md hover:bg-yellow-700 transition-all transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {state.submitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div
          className="mt-16 rounded-3xl p-12 text-center text-white shadow-lg relative overflow-hidden flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '340px',
          }}
        >
          <div className="absolute inset-0 bg-yellow-700 bg-opacity-70 pointer-events-none" aria-hidden="true"></div>
          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our community on WhatsApp for updates, insights, and opportunities 
              for growth and collaboration.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg transform hover:scale-105 inline-flex items-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="h-6 w-6 mr-2"
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
              />
              Join the Community
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ContactPage;