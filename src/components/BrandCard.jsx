import React from "react";
import { brandData } from "../utli/objectData/branddata";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./CSS/Slider.css";


const BrowseCard = () => {
  return (

      <div className="relative">

        <Swiper
          modules={[Pagination]}
          pagination={{clickable:true }}
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          className="px-5"
        >
          {brandData.map((item) => (
            <SwiperSlide key={item.id}>
            <Link to={item.to || "#"}>
              <div className=" m-3 mt-[1rem] mb-[2rem] w-[12rem] h-[6rem]  border border-pink-100  flex  items-center justify-center text-center p-4 shadow cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain transition-transform ease-linear duration-300 hover:scale-110"
                />
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    
  );
};

export default BrowseCard;
