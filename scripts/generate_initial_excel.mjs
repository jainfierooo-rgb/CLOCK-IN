import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const DATA_DIR = path.join(rootDir, 'data');
const PUBLIC_DIR = path.join(rootDir, 'public');
const LEADS_JSON_PATH = path.join(DATA_DIR, 'leads.json');
const EXCEL_OUTPUT_PATH = path.join(DATA_DIR, 'Clockin_AI_Subscribers_and_Leads.xlsx');
const PUBLIC_EXCEL_PATH = path.join(PUBLIC_DIR, 'Clockin_AI_Subscribers_and_Leads.xlsx');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const initialLeads = [
  {
    id: 'CLK-2026-001',
    timestampUTC: new Date().toISOString(),
    timestampIST: new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date()) + ' IST',
    contact: 'director@luxuryresorts.com',
    medium: 'Email',
    type: 'Engineering Callback',
    source: 'Final CTA Callback Form',
    status: 'NEW LEAD',
    notes: 'Requested Clockin AI 21-Day Blueprint Consultation',
  },
  {
    id: 'CLK-2026-002',
    timestampUTC: new Date().toISOString(),
    timestampIST: new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date()) + ' IST',
    contact: '+91 88485 63824',
    medium: 'WhatsApp / Phone',
    type: 'Engineering Callback',
    source: 'Final CTA Callback Form',
    status: 'NEW LEAD',
    notes: 'Inquiry regarding clinical AI concierge setup',
  },
  {
    id: 'CLK-2026-003',
    timestampUTC: new Date().toISOString(),
    timestampIST: new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date()) + ' IST',
    contact: 'cto@enterprisecloud.io',
    medium: 'Email',
    type: 'Newsletter Subscriber',
    source: 'Footer Architecture Briefing',
    status: 'ACTIVE',
    notes: 'Quarterly AI architecture briefings subscriber',
  },
];

fs.writeFileSync(LEADS_JSON_PATH, JSON.stringify(initialLeads, null, 2), 'utf-8');

async function buildExcel() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Clockin AI Platform';
  workbook.lastModifiedBy = 'Clockin AI Dispatch Engine';
  workbook.created = new Date();
  workbook.modified = new Date();

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

  const styleWorksheet = (sheet, data, tabColor) => {
    sheet.columns = columns;
    sheet.properties.tabColor = { argb: tabColor };
    sheet.views = [{ state: 'frozen', ySplit: 1, showGridLines: true }];

    const headerRow = sheet.getRow(1);
    headerRow.height = 32;
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF0F172A' },
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
      };
      cell.border = {
        top: { style: 'medium', color: { argb: 'FF334155' } },
        bottom: { style: 'medium', color: { argb: 'FF334155' } },
        left: { style: 'thin', color: { argb: 'FF334155' } },
        right: { style: 'thin', color: { argb: 'FF334155' } },
      };
    });

    data.forEach((item, index) => {
      const row = sheet.addRow(item);
      row.height = 26;
      const isEven = index % 2 === 0;
      const rowBgColor = isEven ? 'FFFFFFFF' : 'FFF8FAFC';

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

        if (colNumber === 1) {
          cell.font = {
            name: 'Consolas',
            size: 10,
            bold: true,
            color: { argb: 'FF0284C7' },
          };
        }
        if (colNumber === 3) {
          cell.font = {
            name: 'Segoe UI',
            size: 10,
            bold: true,
            color: { argb: 'FF0A0A0A' },
          };
        }
        if (colNumber === 7) {
          cell.font = {
            name: 'Segoe UI',
            size: 9.5,
            bold: true,
            color: { argb: 'FF166534' },
          };
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFDCFCE7' },
          };
        }
      });
    });

    sheet.autoFilter = {
      from: 'A1',
      to: `H${Math.max(data.length + 1, 2)}`,
    };
  };

  const callbacks = initialLeads.filter((l) => l.type.includes('Callback'));
  const sheetCallbacks = workbook.addWorksheet('Engineering Callbacks');
  styleWorksheet(sheetCallbacks, callbacks, 'FF0D9488');

  const subscribers = initialLeads.filter((l) => l.type.includes('Subscriber'));
  const sheetSubscribers = workbook.addWorksheet('Executive Subscribers');
  styleWorksheet(sheetSubscribers, subscribers, 'FF2563EB');

  const sheetMaster = workbook.addWorksheet('All Inquiries (Master)');
  styleWorksheet(sheetMaster, initialLeads, 'FF0F172A');

  await workbook.xlsx.writeFile(EXCEL_OUTPUT_PATH);
  await workbook.xlsx.writeFile(PUBLIC_EXCEL_PATH);
  console.log('Successfully generated beautiful Excel files:');
  console.log('-', EXCEL_OUTPUT_PATH);
  console.log('-', PUBLIC_EXCEL_PATH);
}

buildExcel();
