'use client';

import { useState } from 'react';

export default function ContactFormWidget() {
  const MAX_CHARS = 300;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
    setStatus('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    const key = process.env.NEXT_PUBLIC_X_API_KEY;

    if (!webhookUrl) {
      console.error('Webhook URL is not configured');
      setStatus('error');
      return;
    }

    // Ensure key is available before sending, though the env fix should solve this
    if (!key) {
      console.error('Authentication key is missing');
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': key // Key is used directly
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        // Clear the form on successful submission
        handleFormReset(); 
        setTimeout(() => setStatus(''), 5000); // Clear success message after 5 seconds
      } else {
        console.error('Webhook returned status:', response.status);
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="pointer-events-auto space-y-4">
      <h3 className="text-sm font-medium">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        {/* Email Field */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Company Email"
          required
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        
        {/* Message Area */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          rows={3}
          maxLength={MAX_CHARS}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        
        {/* Character Counter and Buttons (Inline) */}
        <div className="flex items-center justify-between pt-1">
          {/* Dynamic Character Count */}
          <p className="text-xs text-gray-500">
            <span className={formData.message.length === MAX_CHARS ? 'font-bold text-red-500' : 'font-semibold'}>
              {formData.message.length}
            </span>{' '}
            of {MAX_CHARS} max characters
          </p>

          {/* Buttons */}
          <div className="flex space-x-2">
            <button 
              type="button" // Important: prevents form submission
              onClick={handleFormReset} 
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <p className="text-sm text-green-600">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600">Failed to send message. Please check your network and try again.</p>
        )}
      </form>
    </div>
  );
}