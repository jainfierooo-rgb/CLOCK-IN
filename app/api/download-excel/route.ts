import { NextResponse } from 'next/server';
import { getAllLeads, generateBeautifulExcel } from '@/lib/excelManager';

export const dynamic = 'force-dynamic';

export async function GET() {
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
