import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Turkish from "../assets/Turkish.jpg";
import Germen from "../assets/Germen.jpg";
import Japan from "../assets/Japanese.jpg";
import Fernch from "../assets/French.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-blue-300 p-5 ">
      <div className="mb-10 space-y-5 p-4">
        <h1 className="text-4xl font-SourGummy">
          Unlock the World: Explore Languages at Our Language Club!
        </h1>
        <p className="text-2xl space-y-3">
          Are you curious about different cultures and eager to expand your
          horizons? Join our <br /> vibrant Language Club and embark on a
          journey of linguistic discovery!
          <br />
          We offer a dynamic and engaging environment to learn and practice four
          exciting languages:
        </p>
      </div>
     
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="card border-2 border-white image-full  shadow-xl">
            <figure>
              <img src={Turkish} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-center text-xl text-slate-200">Turkish</h2>
              <p></p>
              <div className="card-actions justify-end">
                <Link to={"start-learning"} className="btn bg-green-300">
                  Start Learning
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card border-2 border-white image-full  shadow-xl">
            <figure>
              <img src={Germen} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-center text-xl text-slate-200">Germen</h2>
              <p></p>
              <div className="card-actions justify-end">
                <Link to={"start-learning"} className="btn bg-green-300">
                  Start Learning
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card border-2 border-white image-full  shadow-xl">
            <figure>
              <img src={Japan} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-center text-xl text-slate-200">Japaanese</h2>
              <p></p>
              <div className="card-actions justify-end">
                <Link to={"start-learning"} className="btn bg-green-300">
                  Start Learning
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card border-2 border-white image-full  shadow-xl">
            <figure>
              <img src={Fernch} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-center text-xl text-slate-200">French</h2>
              <p></p>
              <div className="card-actions justify-end">
                <Link to={"start-learning"} className="btn bg-green-300">
                  Start Learning
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
   
  );
};

export default Banner;
