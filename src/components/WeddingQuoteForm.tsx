'use client';

import React, { useState, useTransition } from 'react';
import { submitWeddingQuote } from '../app/actions/contact';

export default function WeddingQuoteForm() {
  const [formData, setFormData] = useState({
    occasion: 'Wedding Reception',
    name: '',
    email: '',
    phone: '',
    date: '',
    guestCount: '',
    diningStyle: 'Seated Multi-Course Dinner',
    dietaryDetails: '',
    eventDetails: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      await submitWeddingQuote(formData);
      setSubmitted(true);
    });
  };

  if (submitted) {
    return (
      <div className="p-10 bg-white border border-stone-200 shadow-md text-center rounded-2xl">
        <span className="text-3xl mb-3 block">🥂</span>
        <h3 className="text-2xl sm:text-3xl font-serif mb-3 text-stone-900">Event Inquiry Received</h3>
        <p className="text-stone-600 max-w-lg mx-auto text-sm leading-relaxed mb-6">
          Thank you, <strong>{formData.name}</strong>. Ben and Judy will review your inquiry for your <strong>{formData.occasion}</strong> ({formData.guestCount ? `${formData.guestCount} guests` : 'approx. date'} on {formData.date || 'your preferred date'}). We will be in touch via {formData.email || formData.phone}.
        </p>
        <p className="text-xs text-stone-500 mb-6">
          Prefer to talk through event ideas directly? You can reach Judy &amp; Ben at <a href="mailto:bon@netc.net.au" className="underline font-semibold text-stone-900">bon@netc.net.au</a> or phone <a href="tel:0357273461" className="underline font-semibold text-stone-900">(03) 5727 3461</a>.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 border border-stone-400 text-stone-800 text-xs uppercase tracking-widest font-semibold hover:bg-stone-100 rounded-full transition-colors"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-12 bg-white border border-stone-200/80 shadow-md rounded-2xl">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold block mb-2">
          Bespoke Celebrations
        </span>
        <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-3">
          Weddings &amp; Private Celebrations
        </h3>
        <p className="text-stone-600 font-light text-sm">
          From rustic heritage country weddings to milestone birthdays, corporate gatherings, and Rail Trail cycling tour dinners. Request a tailored quote below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Occasion Type *
            </label>
            <select
              name="occasion"
              required
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="Wedding Reception">Wedding Reception</option>
              <option value="Milestone Birthday">Milestone Birthday Celebration</option>
              <option value="Anniversary Dinner">Anniversary Celebration</option>
              <option value="Rail Trail Cycling Banquet">Murray to Mountains Cycling Tour Banquet</option>
              <option value="Corporate Retreat / Luncheon">Corporate Retreat or Luncheon</option>
              <option value="Other Private Event">Other Private Function</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Dining &amp; Event Style
            </label>
            <select
              name="diningStyle"
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.diningStyle}
              onChange={handleChange}
            >
              <option value="Seated Multi-Course Dinner">Seated Multi-Course Dinner</option>
              <option value="Veranda Canapés & Cocktail Service">Veranda Canapés &amp; Cocktail Service</option>
              <option value="Rustic Shared Feasting Tables">Rustic Shared Feasting Tables</option>
              <option value="Custom Tailored Package">Custom Tailored Package</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Sarah & Michael"
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="e.g. contact@example.com"
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Contact Phone *
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="e.g. 0400 000 000"
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Estimated / Preferred Date
            </label>
            <input
              type="date"
              name="date"
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Approximate Guest Count
            </label>
            <input
              type="number"
              name="guestCount"
              placeholder="e.g. 45"
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.guestCount}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
            Dietary Requirements &amp; Special Requests
          </label>
          <input
            type="text"
            name="dietaryDetails"
            placeholder="e.g. Vegetarian options, gluten-free lemon tart, BYO wine arrangements..."
            className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
            value={formData.dietaryDetails}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
            Event Vision &amp; Notes
          </label>
          <textarea
            name="eventDetails"
            rows={3}
            className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm resize-none"
            placeholder="Tell us about your timing, preferred spaces (log fire dining room vs. covered veranda), or wine preferences..."
            value={formData.eventDetails}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            Direct questions: email <a href="mailto:bon@netc.net.au" className="font-semibold underline text-stone-800">bon@netc.net.au</a>
          </p>
          <button
            type="submit"
            disabled={isPending}
            className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 disabled:opacity-50 transition-all duration-300 rounded-full shadow hover:shadow-lg hover:-translate-y-0.5"
          >
            {isPending ? 'Sending Inquiry...' : 'Submit Event Quote Request'}
          </button>
        </div>
      </form>
    </div>
  );
}
