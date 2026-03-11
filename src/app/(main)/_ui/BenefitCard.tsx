"use client";

import { benefits } from "@/src/data/benefit_card_data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export default function BenefitCard() {
  return (
    <div className="my-20 mx-auto flex flex-col justify-center items-center">
      <h1 className="text-4xl text-bluewood">
        Your <span className="text-bermuda">Benefits</span>
      </h1>

      <div className="mt-12 w-full min-w-0 overflow-hidden">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1.8}
          navigation={true}
          loop={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          className="benefit-swiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {benefits.map((b) => (
            <SwiperSlide key={b.id} className="pb-12 ">
              <div className="bg-gray-100 w-full shadow-lg overflow-hidden h-full">
                <div className="relative h-64 w-full bg-gray-50">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover"
                    priority={true}
                  />
                </div>
                <div className="p-14 flex gap-6">
                  <div className="shrink-0">
                    <Image src={b.icon} alt={b.title} width={40} height={40} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-bluewood mb-2">
                      {b.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed text-justify">
                      {b.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
