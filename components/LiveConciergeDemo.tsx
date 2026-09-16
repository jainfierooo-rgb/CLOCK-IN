'use client';

import { useState } from 'react';
import { Send, Terminal } from 'lucide-react';

export default function LiveConciergeDemo() {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Clockin AI Dispatch Node online. Ready to simulate guest reservations, patient consultation triage, or manufacturing inventory queries.',
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      let response = `Query processed for "${userText}". Jacuzzi Villas currently have 2 suites open this weekend, and pet-friendly ground cabins include dedicated private garden access. Would you like to reserve provisional dates?`;

      const lower = userText.toLowerCase();
      if (lower.includes('pet') || lower.includes('villa')) {
        response = `Yes, our Garden Villas welcome trained pets with dedicated fenced garden runs and complimentary pet amenities. The current tariff is $320 per night including breakfast. Shall I hold provisional dates for your stay?`;
      } else if (lower.includes('doctor') || lower.includes('hospital') || lower.includes('appointment')) {
        response = `Dr. Harrison in Cardiology and Dr. Vance in Internal Medicine have availability tomorrow at 10:30 AM and 2:15 PM. Shall I register your preliminary consultation details in our clinical schedule?`;
      } else if (lower.includes('machine') || lower.includes('inventory') || lower.includes('part')) {
        response = `Machine Line 4B is operating at 99.2% nominal capacity with zero defect alerts recorded over the past 48 hours. Raw material buffer stock remains at 24 days. The automated replenishment PO is prepared for review.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: response,
        },
      ]);
      setLoading(false);
    }, 500);
  };

  return (
    <section id="demo" className="py-24 bg-[#FAF8F5] border-y border-[#E5E0D8] text-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Context & Presets */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E0D8] text-[10px] font-mono tracking-widest uppercase text-[#0D9488] font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>INTERACTIVE TELEMETRY TERMINAL</span>
            </div>

            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] tracking-tight leading-tight">
              Test live concierge execution before rollout.
            </h2>

            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-normal">
              Simulate how naturally Clockin AI interacts with guests, patients, and plant supervisors. Zero robotic friction, sub-second responses, and verifiable facts.
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#888888] font-bold">
                Select an automated test scenario:
              </p>

              <button
                onClick={() => setInput('Do you allow pets in private pool villas?')}
                className="w-full text-left text-xs sm:text-sm p-4 rounded-xl bg-white border border-[#E5E0D8] hover:border-[#0D9488] hover:shadow-sm transition-all flex items-center justify-between group text-[#0A0A0A]"
              >
                <span>&ldquo;Do you allow pets in private pool villas?&rdquo;</span>
                <span className="text-[10px] font-mono text-[#0D9488] font-bold group-hover:translate-x-0.5 transition-transform">
                  [ RUN ]
                </span>
              </button>

              <button
                onClick={() => setInput('Can I book a doctor appointment for tomorrow morning?')}
                className="w-full text-left text-xs sm:text-sm p-4 rounded-xl bg-white border border-[#E5E0D8] hover:border-[#0D9488] hover:shadow-sm transition-all flex items-center justify-between group text-[#0A0A0A]"
              >
                <span>&ldquo;Can I book a doctor appointment for tomorrow?&rdquo;</span>
                <span className="text-[10px] font-mono text-[#0D9488] font-bold group-hover:translate-x-0.5 transition-transform">
                  [ RUN ]
                </span>
              </button>

              <button
                onClick={() => setInput('What is the status of machine line 4B and raw materials?')}
                className="w-full text-left text-xs sm:text-sm p-4 rounded-xl bg-white border border-[#E5E0D8] hover:border-[#0D9488] hover:shadow-sm transition-all flex items-center justify-between group text-[#0A0A0A]"
              >
                <span>&ldquo;What is the status of machine line 4B and raw materials?&rdquo;</span>
                <span className="text-[10px] font-mono text-[#0D9488] font-bold group-hover:translate-x-0.5 transition-transform">
                  [ RUN ]
                </span>
              </button>
            </div>
          </div>

          {/* Right Side: Terminal Box */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E0D8] shadow-sm">
            {/* Terminal Masthead */}
            <div className="flex items-center justify-between pb-5 border-b border-[#E5E0D8] mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-center font-mono font-bold text-xs text-[#0D9488]">
                  C
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0A0A0A] flex items-center gap-2">
                    <span>Clockin AI Telemetry Node</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse"></span>
                  </div>
                  <div className="text-[10px] font-mono text-[#888888]">
                    NODE: ACTIVE &bull; LATENCY: 22MS
                  </div>
                </div>
              </div>

              <span className="text-[10px] font-mono uppercase text-[#0D9488] bg-[#CCFBF1] border border-[#99F6E4] px-3 py-1 rounded-md font-semibold">
                VERIFIED LOGIC
              </span>
            </div>

            {/* Messages Feed */}
            <div className="space-y-4 min-h-[260px] max-h-[300px] overflow-y-auto pr-2">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] text-xs sm:text-sm p-4 rounded-2xl leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-[#0D9488] text-white font-medium rounded-br-none'
                        : 'bg-[#FAF8F5] text-[#0A0A0A] rounded-bl-none border border-[#E5E0D8]'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="text-xs text-[#666666] font-mono italic p-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-ping"></span>
                  <span>Executing deterministic ledger lookup...</span>
                </div>
              )}
            </div>

            {/* Input Console */}
            <form onSubmit={handleSend} className="mt-6 flex items-center gap-2 pt-5 border-t border-[#E5E0D8]">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything or click one of the preset scenarios above..."
                className="flex-1 bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0A0A0A] placeholder-[#888888] focus:outline-none focus:border-[#0D9488] transition-colors font-sans"
              />
              <button
                type="submit"
                className="btn-teal-primary px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm"
                aria-label="Send message"
              >
                <span>Transmit</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
