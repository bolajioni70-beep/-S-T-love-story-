import { whyWeWantYou } from "@/lib/data";

export default function WhyWeWantYou() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-wine-dark to-wine" />
      <div className="relative z-10 max-w-2xl text-center fade-in-section">
        <p className="font-script text-3xl md:text-5xl gold-text mb-6">
          {whyWeWantYou.heading}
        </p>
        <div className="w-24 h-px bg-gold mx-auto mb-8" />
        <p className="font-body text-base md:text-lg text-ivory/90 leading-relaxed">
          {whyWeWantYou.message}
        </p>
      </div>
    </section>
  );
}
