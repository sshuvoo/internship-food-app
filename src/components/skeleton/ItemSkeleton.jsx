import { SwiperSlide, Swiper } from "swiper/react";

export default function ItemSkeleton() {
  return (
    <Swiper spaceBetween={50} slidesPerView={5}>
      <SwiperSlide>
        <div className="h-80 w-56 animate-pulse rounded-xl bg-gray-200"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-80 w-56 animate-pulse rounded-xl bg-gray-200"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-80 w-56 animate-pulse rounded-xl bg-gray-200"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-80 w-56 animate-pulse rounded-xl bg-gray-200"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-80 w-56 animate-pulse rounded-xl bg-gray-200"></div>
      </SwiperSlide>
    </Swiper>
  );
}
