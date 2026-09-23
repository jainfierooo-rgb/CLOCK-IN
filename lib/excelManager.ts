import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

export interface LeadRecord {
  id: string;
  timestampUTC: string;
  timestampIST: string;
  contact: string;
  medium: 'Email' | 'WhatsApp / Phone' | 'Direct Contact';
  type: string;
  source: string;
  status: 'NEW LEAD' | 'CONTACTED' | 'DISPATCHED' | 'ACTIVE';
  notes: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_JSON_PATH = path.join(DATA_DIR, 'leads.json');
const EXCEL_OUTPUT_PATH = path.join(DATA_DIR, 'Clockin_AI_Subscribers_and_Leads.xlsx');
const PUBLIC_EXCEL_PATH = path.join(process.cwd(), 'public', 'Clockin_AI_Subscribers_and_Leads.xlsx');

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Read leads from JSON
export function getAllLeads(): LeadRecord[] {
  ensureDataDir();
  if (!fs.existsSync(LEADS_JSON_PATH)) {
    // Seed with a few realistic initial entries if totally empty
    const initialLeads: LeadRecord[] = [
      {
        id: 'CLK-2026-001',
        timestampUTC: '2026-09-22T08:30:00.000Z',
        timestampIST: '22 Sep 2026, 02:00 PM IST',
        contact: 'operations@keralaresorts.com',
        medium: 'Email',
        type: 'Engineering Callback',
        source: 'Final CTA Callback Form',
        status: 'NEW LEAD',
        notes: 'Requested Clockin AI 21-Day Blueprint Consultation',
      },
      {
        id: 'CLK-2026-002',
        timestampUTC: '2026-09-22T11:45:00.000Z',
        timestampIST: '22 Sep 2026, 05:15 PM IST',
        contact: '+91 98470 12345',
        medium: 'WhatsApp / Phone',
        type: 'Engineering Callback',
        source: 'Final CTA Callback Form',
        status: 'NEW LEAD',
        notes: 'Inquiry regarding clinical AI concierge setup',
      },
      {
        id: 'CLK-2026-003',
        timestampUTC: '2026-09-22T14:10:00.000Z',
        timestampIST: '22 Sep 2026, 07:40 PM IST',
        contact: 'cto@globalfintech.co',
        medium: 'Email',
        type: 'Newsletter Subscriber',
        source: 'Footer Architecture Briefing',
        status: 'ACTIVE',
        notes: 'Quarterly AI architecture briefings subscriber',
      },
    ];
    fs.writeFileSync(LEADS_JSON_PATH, JSON.stringify(initialLeads, null, 2), 'utf-8');
    return initialLeads;
  }

  try {
    const raw = fs.readFileSync(LEADS_JSON_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

// Detect contact medium
export function detectMedium(contact: string): 'Email' | 'WhatsApp / Phone' | 'Direct Contact' {
  if (contact.includes('@')) {
    return 'Email';
  }
  const digits = contact.replace(/\D/g, '');
  if (digits.length >= 7) {
    return 'WhatsApp / Phone';
  }
  return 'Direct Contact';
}

// Format IST Date
export function getISTDate(date = new Date()): string {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date) + ' IST';
}

// Generate beautiful Excel workbook
export async function generateBeautifulExcel(leads: LeadRecord[]): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Clockin AI Platform';
  workbook.lastModifiedBy = 'Clockin AI Dispatch Engine';
  workbook.created = new Date();
  workbook.modified = new Date();

  // Columns definition
  const columns = [
    { header: 'LEAD ID', key: 'id', width: 16 },
    { header: 'DATE & TIME (IST)', key: 'timestampIST', width: 24 },
    { header: 'WORK EMAIL / WHATSAPP NUMBER', key: 'contact', width: 36 },
    { header: 'CONTACT MEDIUM', key: 'medium', width: 22 },
    { header: 'INQUIRY TYPE', key: 'type', width: 26 },
    { header: 'SOURCE COMPONENT', key: 'source', width: 28 },
    { header: 'STATUS', key: 'status', width: 18 },
    { header: 'NOTES / ACTION TAKEN', key: 'notes', width: 44 },
  ];

  // Helper to style a worksheet
  const styleWorksheet = (sheet: ExcelJS.Worksheet, data: LeadRecord[], tabColor: string) => {
    sheet.columns = columns;
    sheet.properties.tabColor = { argb: tabColor };
    sheet.views = [{ state: 'frozen', ySplit: 1, showGridLines: true }];

    // Style Header Row
    const headerRow = sheet.getRow(1);
    headerRow.height = 32;
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF0F172A' }, // Slate-900 luxury dark
      };
      cell.font = {
        name: 'Segoe UI',
        size: 11,
        bold: true,
        color: { argb: 'FFFFFFFF' },
      };
      cell.alignment = {
        vertical: 'middle',
        horizontal: 'center',
        wrapText: false,
      };
      cell.border = {
        top: { style: 'medium', color: { argb: 'FF334155' } },
        bottom: { style: 'medium', color: { argb: 'FF334155' } },
        left: { style: 'thin', color: { argb: 'FF334155' } },
        right: { style: 'thin', color: { argb: 'FF334155' } },
      };
    });

    // Populate Data Rows
    data.forEach((item, index) => {
      const row = sheet.addRow(item);
      row.height = 26;

      const isEven = index % 2 === 0;
      const rowBgColor = isEven ? 'FFFFFFFF' : 'FFF8FAFC'; // Clean subtle zebra striping

      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        cell.font = {
          name: 'Segoe UI',
          size: 10,
          color: { argb: 'FF0F172A' },
        };
        cell.alignment = {
          vertical: 'middle',
          horizontal: colNumber === 1 || colNumber === 2 || colNumber === 4 || colNumber === 7 ? 'center' : 'left',
        };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: rowBgColor },
        };
        cell.border = {
          top: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          bottom: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          left: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          right: { style: 'thin', color: { argb: 'FFE2E8F0' } },
        };

        // Custom Highlight for Lead ID
        if (colNumber === 1) {
          cell.font = {
            name: 'Consolas',
            size: 10,
            bold: true,
            color: { argb: 'FF0284C7' }, // Sky blue accent
          };
        }

        // Custom Highlight for Contact (Email/Phone)
        if (colNumber === 3) {
          cell.font = {
            name: 'Segoe UI',
            size: 10,
            bold: true,
            color: { argb: 'FF0A0A0A' },
          };
        }

        // Custom Highlight for Status
        if (colNumber === 7) {
          cell.font = {
            name: 'Segoe UI',
            size: 9.5,
            bold: true,
            color: { argb: 'FF166534' }, // Green text
          };
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFDCFCE7' }, // Mint/Emerald soft pill fill
          };
        }
      });
    });

    // Enable AutoFilter
    sheet.autoFilter = {
      from: 'A1',
      to: `H${Math.max(data.length + 1, 2)}`,
    };
  };

  // Sheet 1: Engineering Callbacks (Requested in Final CTA)
  const callbacks = leads.filter((l) => l.type.toLowerCase().includes('callback') || l.type.toLowerCase().includes('inquiry'));
  const sheetCallbacks = workbook.addWorksheet('Engineering Callbacks');
  styleWorksheet(sheetCallbacks, callbacks.length > 0 ? callbacks : leads, 'FF0D9488'); // Teal tab

  // Sheet 2: Executive Subscribers (Newsletter & Research)
  const subscribers = leads.filter((l) => l.type.toLowerCase().includes('subscriber') || l.type.toLowerCase().includes('briefing'));
  const sheetSubscribers = workbook.addWorksheet('Executive Subscribers');
  styleWorksheet(sheetSubscribers, subscribers, 'FF2563EB'); // Blue tab

  // Sheet 3: Unified Master Log
  const sheetMaster = workbook.addWorksheet('All Inquiries (Master)');
  styleWorksheet(sheetMaster, leads, 'FF0F172A'); // Dark Navy tab

  return workbook;
}

// Save lead to both JSON and Excel
export async function addLead(params: {
  contact: string;
  type?: string;
  source?: string;
  notes?: string;
}): Promise<LeadRecord> {
  ensureDataDir();

  const leads = getAllLeads();
  const now = new Date();
  const nextNumber = leads.length + 1;
  const id = `CLK-2026-${String(nextNumber).padStart(3, '0')}`;

  const newLead: LeadRecord = {
    id,
    timestampUTC: now.toISOString(),
    timestampIST: getISTDate(now),
    contact: params.contact.trim(),
    medium: detectMedium(params.contact),
    type: params.type || 'Engineering Callback',
    source: params.source || 'Website Fast Callback Form',
    status: 'NEW LEAD',
    notes: params.notes || 'Inquiry registered. Awaiting architect dispatch.',
  };

  leads.unshift(newLead); // Add newest first

  // 1. Save JSON store
  fs.writeFileSync(LEADS_JSON_PATH, JSON.stringify(leads, null, 2), 'utf-8');

  // 2. Generate and write Excel file
  try {
    const workbook = await generateBeautifulExcel(leads);
    await workbook.xlsx.writeFile(EXCEL_OUTPUT_PATH);
    // Also save in public folder for direct client downloads
    await workbook.xlsx.writeFile(PUBLIC_EXCEL_PATH);
    console.log(`[Clockin AI] Beautiful Excel file updated at: ${EXCEL_OUTPUT_PATH}`);
  } catch (err) {
    console.error('[Clockin AI] Error writing Excel file (may be open in Excel):', err);
  }

  return newLead;
}
