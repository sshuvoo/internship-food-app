import { useState } from "react";
import RecomendedItems from "./RecomendedItems";
import AddNewPopup from "./../add-new/AddNewPopup";

export default function RecomendSection() {
  const [isOpen, setOpen] = useState(false);
  const [swiper, setSwiper] = useState(null);

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-10 lg:pb-64 pb-48">
        <div className="flex justify-between py-4">
          <h3 className="text-3xl font-medium">Recomended</h3>
          <button className="flex items-center gap-x-2 text-lg font-medium text-[#FC5D0C]">
            <span onClick={() => setOpen((pre) => !pre)}>AddMore</span>
            <span className="flex gap-x-1">
              <svg
                onClick={() => swiper && swiper.slidePrev()}
                className="w-3 fill-[#9AA2AC]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
              <svg
                onClick={() => swiper && swiper.slideNext()}
                className="w-3 fill-[#344558]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </span>
          </button>
        </div>
        <RecomendedItems setSwiper={setSwiper} />
      </div>
      {isOpen && <AddNewPopup setOpen={setOpen} />}
    </section>
  );
}
