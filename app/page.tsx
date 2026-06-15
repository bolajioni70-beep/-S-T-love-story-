import EnvelopeGate from "@/components/EnvelopeGate";
import LoveStory from "@/components/LoveStory";
import InviteCards from "@/components/InviteCards";
import Countdown from "@/components/Countdown";
import WhyWeWantYou from "@/components/WhyWeWantYou";
import DressCode from "@/components/DressCode";
import LocationSection from "@/components/LocationSection";
import GiftSection from "@/components/GiftSection";
import RSVPForm from "@/components/RSVPForm";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  return (
    <EnvelopeGate>
      <LoveStory />
      <InviteCards />
      <Countdown />
      <WhyWeWantYou />
      <DressCode />
      <LocationSection />
      <GiftSection />
      <RSVPForm />
      <ClosingSection />
    </EnvelopeGate>
  );
}
