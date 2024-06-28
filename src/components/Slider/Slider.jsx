import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <section className="my-4 md:my-6">
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={32}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-64 md:h-96"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/KmWBYpG/10329.jpg"
            alt="Slide 1"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/1MyKDLw/7837.jpg"
            alt="Slide 2"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/PZ0ptS7/8749.jpg"
            alt="Slide 3"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
