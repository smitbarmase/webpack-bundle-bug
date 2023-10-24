import "../../styles/swiper.css";

import SwiperClient from "../../components/SwiperClient";
import QueryLink from "../../components/QueryLink";

export default function Home() {
  const cards = ["Card 1", "Card 2"];
  return (
    <main>
      {/* using query link on home screen */}
      <QueryLink href="/about-us">About Link</QueryLink>
      {/* Minimal swiper code on home screen only */}

      <SwiperClient
        cards={cards.map((card, index) => (
          <p key={index}>{card}</p>
        ))}
      />
    </main>
  );
}
