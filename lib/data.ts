export const couple = {
  groomName: "Oluwaseun Oni",
  brideName: "Oluwatosin Faoyemi",
  groomNickname: "Seun",
  brideNickname: "Tosin",
  hashtags: ["#S&T", "#TheSTLoveStory"],
  whatsapp: "2349061693121",
};

export const loveStory = {
  paragraphs: [
    "I still remember it — freshman year, phone battery dead, just needed somewhere to charge it. There was this guy running the charging spot, already a big man on campus (400 level, while I was just a fresher finding my way around). He plugged in my phone, asked my name, introduced himself, and told me if I ever needed anything, I should come find him.",
    "I did. He helped me clean up my hostel room, showed me how to survive school life, and whenever I missed home, he'd invite me over for proper home-cooked meals. At some point I got bold enough to ask if he liked me — the way he looked out for me, it felt like more. He laughed and said I was overthinking it... that I was like a little sister to him. I wanted to disappear.",
    "Life happened after school — we lost touch for a while. Then one day, we ran into each other again... at the gym, of all places. He'd come to get fit. Turns out I was exactly what he needed, because somewhere along the way, his 'little sister' became the woman he couldn't stop thinking about.",
    "And now? That same guy who once called me his little sister... is about to call me his wife.",
  ],
  image: "/images/couple.jpg",
};

export type EventDetail = {
  title: string;
  date: string;
  displayDate: string;
  time: string;
  venue: string;
  address: string;
};

export const events: EventDetail[] = [
  {
    title: "Engagement",
    date: "2026-06-26T10:00:00+01:00",
    displayDate: "Friday, June 26, 2026",
    time: "10:00 AM (WAT)",
    venue: "Blue Vill Event Center",
    address: "Orchid Estate, Lekki, Lagos State, Nigeria",
  },
  {
    title: "Wedding Ceremony",
    date: "2026-06-27T14:00:00-03:00",
    displayDate: "Saturday, June 27, 2026",
    time: "2:00 PM (Brasília Time)",
    venue: "Fountain of Beauty",
    address: "Lakevill Villa, Brazil",
  },
  {
    title: "Reception",
    date: "2026-06-27T16:00:00-03:00",
    displayDate: "Saturday, June 27, 2026",
    time: "4:00 PM (Brasília Time)",
    venue: "De Blue Mansion",
    address: "Lakevill Villa, Brazil",
  },
];

export const countdownTarget = "2026-06-26T10:00:00+01:00";

export const dressCode = {
  colors: ["Maroon", "Gold"],
  note: "We kindly invite our guests to celebrate with us in shades of maroon and gold.",
};

export const gift = {
  bank: "Paycom (Opay)",
  accountNumber: "9061693121",
  accountName: "Bolaji Oni",
  note: "Your presence is the greatest gift, but should you wish to bless us further, cash gifts or contributions toward landed property are warmly appreciated.",
};

export const whyWeWantYou = {
  heading: "Why We Want You There",
  message:
    "Our journey to this day has been shaped by the people who walked it with us — and you are one of them. From late-night conversations to celebrating life's small wins together, your presence has meant the world. As we begin this new chapter, we can't imagine it without you by our side. Come laugh, dance, and celebrate with us — because this isn't just our day, it's ours together with you.",
};
