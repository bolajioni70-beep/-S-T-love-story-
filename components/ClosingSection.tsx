import { couple } from "@/lib/data";

export default function ClosingSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-wine to-wine-dark" />
      <div className="relative z-10 fade-in-section">
        <p className="font-script text-4xl md:text-6xl gold-text mb-6">
          With Love
        </p>
        <p className="font-display text-xl md:text-2xl text-ivory mb-4">
          {couple.brideNickname} &amp; {couple.groomNickname}
        </p>
        <div className="w-16 h-px bg-gold mx-auto mb-6" />
        <p className="text-ivory/70 mb-2">Share your moments with us</p>
        <div className="flex justify-center gap-4">
          {couple.hashtags.map((tag) => (
            <span key={tag} className="text-gold font-display font-semibold tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
