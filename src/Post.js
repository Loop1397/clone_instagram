import React, { useRef, useState } from "react";
import Button from "./Button";
import styles from "./css/Post.module.css";
import Modal from "./Modal";

// import { Swiper } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";

// // import required modules
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function Post() {
    const [isOpen, setIsOpen] = useState(false);
    const [slideIndex, setSlide] = useState(0);

    const slideImages = [styles.image1, styles.image2, styles.image3];
    const slideStyles = [
        {
            position: "absolute",
            right: "612px",
        },
        {
            position: "absolute",
            top: "0px",
            left: "612px",
        },
    ];

    const leftSlide = () => {
        if (0 < slideIndex) {
            setSlide(current => current - 1);
        }
    };

    const rightSlide = () => {
        if (slideIndex < slideImages.length - 1) {
            setSlide(current => current + 1);
        }
        console.log(slideImages.length);
    };

    const openModal = () => {
        setIsOpen(true);
        // console.log("Hi!");
    };

    const closeModal = e => {
        setIsOpen(false);
        // console.log("bye!");
        e.stopPropagation(); //이벤트 버블링을 막기 위한 메소드
    };

    const imageIndexRendering = () => {
        const result = [];
        // for (let i = 0; i < slideImages.length; i++) {
        //     result.push(<span>{i}번째</span>);
        // }

        if (slideIndex !== 0) {
            result.push(<div className={slideImages[slideIndex - 1]} style={slideStyles[0]}></div>);
        }

        result.push(<div className={slideImages[slideIndex]}></div>);

        if (slideIndex !== slideImages.length) {
            result.push(<div className={slideImages[slideIndex + 1]} style={slideStyles[1]}></div>);
        }

        return result;
    };

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.header__container}>
                        <div className={styles.header__profile__icon}>
                            <Button style={styles.header__profile__icon__button} imgStyle={styles.header__profile__icon__button__image} image="/images/chrome.png" url="/id" />
                        </div>
                        <div className={styles.header__profile__id}>
                            <Button style={styles.header__profile__id__button} text="chrome" url="/id" />
                        </div>
                    </div>
                    <div className={styles.header__control__button} onClick={openModal}>
                        <span>···</span>
                        {isOpen ? <Modal isOpen={isOpen} closeModal={closeModal} /> : null}
                    </div>
                </div>
                <div className={styles.container__image}>
                    <div className={styles.slide__button__left} onClick={leftSlide}></div>
                    <div className={styles.slide__button__right} onClick={rightSlide}></div>
                    {imageIndexRendering()}

                    {/* <Swiper
                        className="swiper-container"
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={swiper => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >
                        <SwiperSlide>slide 1</SwiperSlide>
                        <SwiperSlide>slide 2</SwiperSlide>
                        <SwiperSlide>slide 3</SwiperSlide>
                    </Swiper> */}
                </div>
                <div className={styles.container__content}>하위</div>
                <div className={styles.container__comment}>코멘트</div>
            </div>
        </div>
    );
}

export default Post;
