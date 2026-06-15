import { events } from "@/lib/data";

export default function LocationSection() {
  const lagosVenue = events[0];
  const brazilVenue = events[1];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-wine-dark to-wine" />
      <div className="relative z-10 max-w-2xl w-full text-center fade-in-section">
        <p className="font-script text-3xl md:text-5xl gold-text mb-2">Find Us</p>
        <div className="w-24 h-px bg-gold mx-auto mb-10" />

        <div className="space-y-8">
          <div>
            <h3 className="font-display text-lg font-bold text-gold mb-1">
              {lagosVenue.title} — {lagosVenue.venue}
            </h3>
            <p className="text-ivory/70 text-sm mb-3">{lagosVenue.address}</p>
            <div className="rounded-2xl overflow-hidden border-2 border-gold h-56">
              <iframe
                title="Engagement venue map"
                src="https://www.google.com/maps?q=Blue+Vill+Event+Center+Orchid+Estate+Lekki+Lagos&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-gold mb-1">
              Wedding &amp; Reception — Lakevill Villa
            </h3>
            <p className="text-ivory/70 text-sm mb-3">{brazilVenue.address}</p>
            <div className="rounded-2xl overflow-hidden border-2 border-gold h-56">
              <iframe
                title="Wedding venue map"
                src="https://www.google.com/maps?q=Lakevill+Villa+Brazil&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
