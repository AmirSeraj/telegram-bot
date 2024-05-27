// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const TrophySlider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        // spaceBetween={30}
        className={`w-full h-full`}
        grabCursor={true}
        mousewheel={true}
        centeredSlides={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide
          // key={index}
          className={`rounded-[2rem] bg-[#1C1C41] border-[0.1rem] border-[#312E81] hover:bg-[#262458] hover:shadow-md shadow-gray-200 group overflow-hidden`}
        >
          <div className="px-6 py-4 h-1/2 relative">
            <p className="text-[#D9F99D] mb-2 font-bold text-xl">ddddd</p>
            <span className="text-white text-[1rem] font-light overflow-hidden h-[150px] w-full inline-block">
              {/* {item.content} */}ddddd
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          // key={index}
          className={`rounded-[2rem] bg-[#1C1C41] border-[0.1rem] border-[#312E81] hover:bg-[#262458] hover:shadow-md shadow-gray-200 group overflow-hidden`}
        >
          <div className="px-6 py-4 h-1/2 relative">
            <p className="text-[#D9F99D] mb-2 font-bold text-xl">ddddd</p>
            <span className="text-white text-[1rem] font-light overflow-hidden h-[150px] w-full inline-block">
              {/* {item.content} */}ddddd
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TrophySlider;
