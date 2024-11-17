import React from "react";
import bannerImg from '../../assets/banner5.jpg'
const Banner = () => {
  return (
    <div className="hero bg-base-200 w-[80%] mx-auto mt-10 max-w-[1000px] rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="lg:w-[400px] lg:h-[300px] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
