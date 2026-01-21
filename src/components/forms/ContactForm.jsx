import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { trackContactForm } from '../../lib/analytics';

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    contactReason: 'general'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Track form submission
    trackContactForm(formData.contactReason);
    
    // Submit to Formspree
    await handleSubmit(e);
    
    // Reset form if submission was successful
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        contactReason: 'general'
      });
    }
  };

  const contactReasons = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'groups', label: 'Join or Start a Group' },
    { value: 'events', label: 'Event Information' },
    { value: 'services', label: 'Service Consultation' },
    { value: 'resources', label: 'Resource Request' },
    { value: 'partnership', label: 'Partnership Opportunity' }
  ];

  // Success message
  if (state.succeeded) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for reaching out! We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Send Us a Message
      </h2>

      {/* Error message */}
      {state.errors && state.errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
            <p className="text-red-700 font-medium">
              There was an error sending your message. Please try again.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your full name"
              
              disabled={state.submitting}
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your email address"
              
              disabled={state.submitting}
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        {/* Contact Reason */}
        <div>
          <label htmlFor="contactReason" className="block text-sm font-semibold text-gray-700 mb-2">
            What can we help you with? *
          </label>
          <select
            id="contactReason"
            name="contactReason"
            required
            value={formData.contactReason}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            
            disabled={state.submitting}
          >
            {contactReasons.map((reason) => (
              <option key={reason.value} value={reason.value}>
                {reason.label}
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Brief subject of your message"
            
            disabled={state.submitting}
          />
          <ValidationError 
            prefix="Subject" 
            field="subject"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
            placeholder="Tell us more about your inquiry, questions, or how we can help you..."
            
            disabled={state.submitting}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Hidden fields for Formspree */}
        <input type="hidden" name="_subject" value={`New contact form submission: ${formData.subject}`} />
        <input type="hidden" name="_replyto" value={formData.email} />
        <input type="hidden" name="_next" value={`${process.env.NEXT_PUBLIC_SITE_URL}/contact?success=1`} />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className={`w-full px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg transform hover:scale-105 flex items-center justify-center ${
            state.submitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
          }`}
        >
          {state.submitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </>
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          * Required fields. We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;