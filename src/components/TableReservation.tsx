'use client';

import React, { useState } from 'react';

export default function TableReservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    service: 'Lunch (12:00 PM – 2:30 PM)',
    guests: '2',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-10 border border-stone-300 bg-white shadow-lg text-center rounded-2xl">
        <span className="text-3xl mb-3 block">🍷</span>
        <h3 className="text-2xl sm:text-3xl font-serif mb-3 text-stone-900">
          Reservation Request Received
        </h3>
        <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
          Thank you, <strong>{formData.name}</strong>. We have noted your request for <strong>{formData.guests} guests</strong> on <strong>{formData.date}</strong> ({formData.service}). Ben, Judy, or our front-of-house team will call or email to confirm your table.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs uppercase tracking-widest">
          <a
            href="tel:0357273461"
            className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-full transition-colors"
          >
            📞 Call (03) 5727 3461
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 border border-stone-300 hover:border-stone-800 text-stone-800 rounded-full transition-colors"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-12 border border-stone-300 bg-white shadow-lg rounded-2xl">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold block mb-2">
          Hospitality In Oxley
        </span>
        <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-3">
          Reserve Your Table
        </h3>
        <p className="text-stone-600 font-light text-sm">
          Join us inside near the log fire or under the shaded veranda overlooking the garden. For same-day tables, please phone directly on <a href="tel:0357273461" className="font-semibold text-stone-900 underline">(03) 5727 3461</a>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Guest Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Eleanor Vance"
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Contact Phone *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. 0400 123 456"
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="e.g. eleanor@example.com"
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              required
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
            <span className="text-[11px] text-stone-500 mt-1 block">Note: Closed Tuesdays</span>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Service Sitting *
            </label>
            <select
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="Morning Tea (from 10:00 AM)">Morning Tea &amp; Coffee (10:00 AM onwards)</option>
              <option value="Lunch (12:00 PM – 2:30 PM)">Lunch Sitting (12:00 PM – 2:30 PM)</option>
              <option value="Dinner (from 5:30 PM)">Dinner Sitting (5:30 PM onwards, Wed–Sun)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
              Number of Guests *
            </label>
            <select
              className="w-full border-b border-stone-300 py-2.5 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "12+", "Large Group / Tour"].map((num) => (
                <option key={String(num)} value={String(num)}>
                  {typeof num === "number" ? `${num} ${num === 1 ? "Guest" : "Guests"}` : num}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-stone-600 mb-2">
            Dietary Requirements &amp; Table Notes
          </label>
          <textarea
            rows={2}
            className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-sm resize-none"
            placeholder="e.g. Veranda seating preferred for bikes, 1 coeliac/gluten-free, celebrating an anniversary..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          />
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500 font-light">
            Need immediate table confirmation? Phone <a href="tel:0357273461" className="font-semibold text-stone-900 underline">(03) 5727 3461</a>
          </p>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 transition-colors rounded-full shadow"
          >
            Submit Table Request
          </button>
        </div>
      </form>
    </div>
  );
}
