import Header from "../Header";

// import { Swiper } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// import required modules
import { Navigation } from "swiper";

function Create() {
    return (
        <section>
            <header>
                <Header />
            </header>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>slide 1</SwiperSlide>
                    <SwiperSlide>slide 2</SwiperSlide>
                    <SwiperSlide>slide 3</SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Create;
