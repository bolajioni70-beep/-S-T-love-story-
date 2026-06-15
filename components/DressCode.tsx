import { dressCode } from "@/lib/data";

export default function DressCode() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-wine to-wine-dark" />
      <div className="relative z-10 max-w-xl text-center fade-in-section">
        <p className="font-script text-3xl md:text-5xl gold-text mb-6">Dress Code</p>
        <div className="w-24 h-px bg-gold mx-auto mb-8" />
        <div className="flex justify-center gap-6 mb-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-wine-light border-2 border-gold" />
            <span className="text-sm uppercase tracking-widest text-ivory/80">Maroon</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-gold border-2 border-ivory" />
            <span className="text-sm uppercase tracking-widest text-ivory/80">Gold</span>
          </div>
        </div>
        <p className="font-body text-base md:text-lg text-ivory/90 leading-relaxed">
          {dressCode.note}
        </p>
      </div>
    </section>
  );
}
