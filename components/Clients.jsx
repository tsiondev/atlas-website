"use client";

import { clients } from "@/constant/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Clients = () => {
  return (
    <section className="max-w-[1100px] px-12 mx-auto md:mb-36 mb-20">
      <div className="flex flex-col mb-5 gap-y-2">
        <h2 className="font-poppins">Our Clients</h2>
        <div className="bg-green w-20 h-1 "></div>
      </div>
      <Swiper
        className="max-w-[1100px] mx-auto my-16"
        slidesPerView={4}
        spaceBetween={50}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
      >
        {clients.map((item, index) => (
          <SwiperSlide key={index}>
            <Image alt="client" src={item} width={250} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Clients;
