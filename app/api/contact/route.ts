import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, industry, message } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // In production, sync to CRM, WhatsApp webhook, or database
    console.log('[CLOCKIN AI Contact Lead Captured]:', {
      name,
      email,
      company: company || 'N/A',
      industry: industry || 'General',
      message: message || '',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Consultation request received. A technical director will reach out within 2 hours.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
