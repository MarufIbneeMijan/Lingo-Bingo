import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import JapaneseT from "../assets/Japanese-Teacher.jpg";
const Teachers = () => {
  return (
    <div>
      <h1 className="text-4xl mt-6 font-bold">Our Faculty</h1>
      <div className="max-w-full" >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={JapaneseT} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shenji Abee</h2>
                <p>Our Japanese Instructor</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide><div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={JapaneseT} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shenji Abee</h2>
                <p>Our Japanese Instructor</p>
              </div>
            </div></SwiperSlide>
          <SwiperSlide><div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={JapaneseT} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shenji Abee</h2>
                <p>Our Japanese Instructor</p>
              </div>
            </div></SwiperSlide>
          <SwiperSlide><div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={JapaneseT} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shenji Abee</h2>
                <p>Our Japanese Instructor</p>
              </div>
            </div></SwiperSlide>
          <SwiperSlide><div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={JapaneseT} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shenji Abee</h2>
                <p>Our Japanese Instructor</p>
              </div>
            </div></SwiperSlide>
          <SwiperSlide><div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={JapaneseT} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shenji Abee</h2>
                <p>Our Japanese Instructor</p>
              </div>
            </div></SwiperSlide>
      
        </Swiper>
      </div>
    </div>
  );
};

export default Teachers;
