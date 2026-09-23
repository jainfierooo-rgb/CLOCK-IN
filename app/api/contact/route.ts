import { NextResponse } from 'next/server';
import { addLead, getAllLeads } from '@/lib/excelManager';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Support both streamlined callback { contact, type, source } and legacy contact forms { email, name, ... }
    const contactValue = (body.contact || body.email || '').trim();

    if (!contactValue) {
      return NextResponse.json(
        { error: 'Contact detail (Work email or WhatsApp number) is required' },
        { status: 400 }
      );
    }

    const leadType = body.type || (body.message?.includes('Subscription') ? 'Newsletter Subscriber' : 'Engineering Callback');
    const leadSource = body.source || (body.industry ? `Industry Inquiry: ${body.industry}` : 'Fast Callback Form');
    const leadNotes = body.notes || body.message || (body.company ? `Company: ${body.company}` : 'Requested Clockin AI Engineering Callback');

    const lead = await addLead({
      contact: contactValue,
      type: leadType,
      source: leadSource,
      notes: leadNotes,
    });

    return NextResponse.json({
      success: true,
      lead,
      message: 'Inquiry registered. An enterprise architect will respond within 2 hours.',
    });
  } catch (error) {
    console.error('Failed to process contact lead:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const leads = getAllLeads();
  return NextResponse.json({
    total: leads.length,
    leads,
  });
}
