import { useGetFoodItemsQuery } from "../../app/features/api";
import ItemSkeleton from "../skeleton/ItemSkeleton";
import FoodItem from "./FoodItem";
import { SwiperSlide, Swiper } from "swiper/react";

export default function PopularItems({ setSwiper }) {
  const { data, isLoading, isError } = useGetFoodItemsQuery();

  if (isLoading) return <ItemSkeleton />;
  if (isError) return <h2 className="text-rose-500">Something Went Wrong!</h2>;
  if (data?.Items?.length <= 0) return <h2>Item Not Found!</h2>;
  return (
    <Swiper
      spaceBetween={50}
      onSwiper={setSwiper}
      breakpoints={{
        400: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      {data.Items.filter((item) => item.IsPopular).map((item) => (
        <SwiperSlide key={item.Id}>
          <FoodItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
