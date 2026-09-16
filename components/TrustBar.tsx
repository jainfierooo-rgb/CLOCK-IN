export default function TrustBar() {
  const partners = [
    { name: 'Vythiri Mist Resorts', tag: 'Luxury Hospitality' },
    { name: 'CareFirst Healthcare', tag: 'Clinical Network' },
    { name: 'Kisan Agro Systems', tag: 'Precision Agriculture' },
    { name: 'Apex Industrial', tag: 'Assembly & Machinery' },
    { name: 'Valley Organic Co.', tag: 'Farmstead Logistics' },
  ];

  return (
    <section className="border-y border-warmBorder py-8 bg-white transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-sageGreen"></span>
          <span className="text-xs font-semibold text-warmMuted uppercase tracking-wider">
            Trusted by teams across hospitality, healthcare &amp; agriculture
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {partners.map((p, i) => (
            <div key={i} className="flex flex-col items-center md:items-start group">
              <span className="text-sm font-bold text-warmText/75 group-hover:text-sageGreen transition-colors">
                {p.name}
              </span>
              <span className="text-[10px] text-warmMuted/80">
                {p.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
