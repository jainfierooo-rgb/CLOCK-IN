import { NextResponse } from 'next/server';
import { getAllLeads, generateBeautifulExcel } from '@/lib/excelManager';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');
  const adminSecret = process.env.ADMIN_SECRET_KEY || 'clockin2026';

  if (key !== adminSecret) {
    return new NextResponse('Unauthorized: Admin key required to access this file.', { status: 401 });
  }

  try {
    const leads = getAllLeads();
    const workbook = await generateBeautifulExcel(leads);

    const buffer = await workbook.xlsx.writeBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="Clockin_AI_Subscribers_and_Leads.xlsx"',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error('Error generating Excel export:', error);
    return NextResponse.json(
      { error: 'Failed to generate Excel file' },
      { status: 500 }
    );
  }
}
