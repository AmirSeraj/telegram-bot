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
        centeredSlides={true}
        navigation={true}
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
        {/* {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`${className} rounded-[2rem] bg-[#1C1C41] border-[0.1rem] border-[#312E81] hover:bg-[#262458] transition duration-500 hover:shadow-md shadow-gray-200 group overflow-hidden`}
          >
            <Link
              href={item?.short_link ?? ""}
              className="w-full h-[250px] relative inline-block"
            >
              {item?.photo === null ? (
                <Image
                  src={"/images/image-not-found.png"}
                  fill
                  alt={item.title ?? ""}
                  objectFit="cover"
                />
              ) : (
                <Image
                  src={path + item?.photo}
                  fill
                  alt={item.title ?? ""}
                  objectFit="cover"
                />
              )}
            </Link>
            <div className="px-6 py-4 h-1/2 relative">
              <p className="text-[#D9F99D] mb-2 font-bold text-xl">{item.title}</p>
              <span className="text-white text-[1rem] font-light overflow-hidden h-[150px] w-full inline-block">
                {item.content}
              </span>
              {add && (
                <Link
                  href={item?.short_link ?? ""}
                  className="w-full text-[#ccc] flex justify-start items-center gap-3 px-3 absolute bottom-3"
                >
                  {t("learn_more")}
                  <div className={clsx(locale === "fa" && "rotate-180")}>
                    <IoIosArrowRoundForward />
                  </div>
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </>
  );
};

export default TrophySlider;
