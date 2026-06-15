import { events, couple } from "@/lib/data";

export default function InviteCards() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-wine to-wine-dark" />
      <div className="relative z-10 max-w-2xl w-full text-center fade-in-section">
        <p className="font-script text-3xl md:text-5xl gold-text mb-2">The Invitation</p>
        <h2 className="font-display text-xl md:text-2xl font-medium text-ivory/90 mb-2">
          {couple.brideName} &amp; {couple.groomName}
        </h2>
        <p className="text-ivory/70 mb-10 italic">
          request the honour of your presence
        </p>

        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="border-2 border-gold rounded-2xl p-6 bg-wine-dark/50 shadow-lg"
            >
              <h3 className="font-display text-xl md:text-2xl font-bold gold-text mb-2">
                {event.title}
              </h3>
              <p className="text-ivory font-medium">{event.displayDate}</p>
              <p className="text-ivory/80">{event.time}</p>
              <div className="w-12 h-px bg-gold/50 mx-auto my-3" />
              <p className="text-ivory font-semibold">{event.venue}</p>
              <p className="text-ivory/70 text-sm">{event.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
