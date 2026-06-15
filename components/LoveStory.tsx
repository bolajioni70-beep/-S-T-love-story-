import Image from "next/image";
import { loveStory, couple } from "@/lib/data";

export default function LoveStory() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-wine-dark to-wine" />
      <div className="relative z-10 max-w-3xl w-full text-center fade-in-section">
        <p className="font-script text-3xl md:text-5xl gold-text mb-2">Our Story</p>
        <div className="w-24 h-px bg-gold mx-auto mb-8" />
        <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto mb-10 rounded-full overflow-hidden shadow-2xl"
  style={{ border: "3px solid #d4af37", boxShadow: "0 0 0 6px #4A0E1E, 0 0 0 8px #d4af37" }}>
  <Image
    src={loveStory.image}
    alt={`${couple.brideNickname} and ${couple.groomNickname}`}
    fill
    className="object-cover object-top"
    sizes="(max-width: 768px) 224px, 288px"
    priority
  />
</div>
          />
        </div>

        <div className="space-y-5 text-left sm:text-center">
          {loveStory.paragraphs.map((p, i) => (
            <p key={i} className="font-body text-base md:text-lg text-ivory/90 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
