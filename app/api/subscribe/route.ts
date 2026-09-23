import { NextResponse } from 'next/server';
import { addLead } from '@/lib/excelManager';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = (body.email || body.contact || '').trim();

    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    const lead = await addLead({
      contact: email,
      type: 'Executive Briefing Subscriber',
      source: 'Footer Briefing Dispatch Bar',
      notes: 'Subscribed to Quarterly Enterprise AI Architecture Briefings',
    });

    return NextResponse.json({
      success: true,
      lead,
      message: 'Subscribed. Technical briefings will be dispatched to your inbox.',
    });
  } catch (error) {
    console.error('Failed to process subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
