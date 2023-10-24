"use client";

import { Swiper, SwiperSlide } from "swiper/react";

export default function SwiperClient({ cards }: { cards: JSX.Element[] }) {
  return (
    <Swiper>
      {cards.map((card, index) => (
        <SwiperSlide key={index}>{card}</SwiperSlide>
      ))}
    </Swiper>
  );
}
