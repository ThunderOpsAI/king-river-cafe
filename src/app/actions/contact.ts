'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');

// Helper to determine if we are in mock mode
const isMock = !process.env.RESEND_API_KEY;

export async function submitReservation(data: any) {
  if (isMock) {
    console.log('[MOCK] Reservation submitted:', data);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true };
  }

  try {
    const { name, phone, email, date, service, guests, notes } = data;
    await resend.emails.send({
      from: 'King River Cafe <onboarding@resend.dev>',
      to: 'bon@netc.net.au', // Assuming this is the real email
      replyTo: email,
      subject: `New Table Reservation: ${name} on ${date}`,
      html: `
        <h2>New Table Reservation</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Notes:</strong> ${notes || 'None'}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send reservation email:', error);
    return { success: false, error: 'Failed to send' };
  }
}

export async function submitWeddingQuote(data: any) {
  if (isMock) {
    console.log('[MOCK] Wedding quote submitted:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true };
  }

  try {
    const { occasion, name, email, phone, date, guestCount, diningStyle, dietaryDetails, eventDetails } = data;
    await resend.emails.send({
      from: 'King River Cafe <onboarding@resend.dev>',
      to: 'bon@netc.net.au',
      replyTo: email,
      subject: `New Event Inquiry: ${occasion} for ${name}`,
      html: `
        <h2>New Event Inquiry</h2>
        <p><strong>Occasion:</strong> ${occasion}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date || 'TBD'}</p>
        <p><strong>Guests:</strong> ${guestCount}</p>
        <p><strong>Dining Style:</strong> ${diningStyle}</p>
        <p><strong>Dietary Details:</strong> ${dietaryDetails || 'None'}</p>
        <p><strong>Event Details:</strong> ${eventDetails || 'None'}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send event quote email:', error);
    return { success: false, error: 'Failed to send' };
  }
}
