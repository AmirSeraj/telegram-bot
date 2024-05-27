// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const TrophySlider = ({ trophies, loading }) => {
  console.log(trophies);
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      className={'w-[80vw]'}
      grabCursor={true}
      mousewheel={true}
      centeredSlides={true}
      navigation={true}
      slidesPerView={1}
      freeMode={true}
    >
      <SwiperSlide
        // key={index}
        // className={`rounded-[2rem] bg-[#1C1C41] border-[0.1rem] border-[#312E81] hover:bg-[#262458] hover:shadow-md shadow-gray-200`}
      >
        <div className="px-6 py-4 h-1/2">
          <p className="text-[#D9F99D] mb-2 font-bold text-xl">ddddd</p>
          <span className="text-white text-[1rem] font-light overflow-hidden h-[150px] w-full inline-block">
            
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide
        // key={index}
        // className={`w-full rounded-[2rem] bg-[#1C1C41] border-[0.1rem] border-[#312E81] hover:bg-[#262458] hover:shadow-md shadow-gray-200`}
      >
        <div className="px-6 py-4 h-1/2">
          <p className="text-[#D9F99D] mb-2 font-bold text-xl">aaaa</p>
          <span className="text-white text-[1rem] font-light overflow-hidden h-[150px] w-full inline-block">
            
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TrophySlider;
