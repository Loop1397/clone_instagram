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
    const [slideIndex, setSlideIndex] = useState(0);

    const slideImages = [styles.image1, styles.image2, styles.image3, styles.image4];
    // const slideStyles = [
    //     // 왼
    //     {
    //         position: "absolute",
    //         right: "100%",
    //     },
    //     // 오
    //     {
    //         position: "absolute",
    //         top: "0px",
    //         left: "100%",
    //     },
    // ];

    const imageBoxWidth = slideImages.length * 100;

    const leftSlide = () => {
        if (0 < slideIndex) {
            setSlideIndex(current => current - 1);
        }
    };

    const rightSlide = () => {
        if (slideIndex < slideImages.length - 1) {
            setSlideIndex(current => current + 1);
        }
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

        for (let i = 0; i < slideImages.length; i++) {
            result.push(<li key={`image${i + 1}`} className={slideImages[i]} style={{ left: `${i * 100}%` }}></li>);
        }

        // if (slideIndex !== 0) {
        //     result.push(<li className={slideImages[slideIndex - 1]} style={slideStyles[0]}></li>);
        // }

        // result.push(<li className={slideImages[slideIndex]}></li>);

        // if (slideIndex !== slideImages.length) {
        //     result.push(<li className={slideImages[slideIndex + 1]} style={slideStyles[1]}></li>);
        // }

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
                    <ul className={styles.image__box} style={{ width: `${imageBoxWidth}%`, left: `${slideIndex * -100}%` }}>
                        {imageIndexRendering()}
                    </ul>
                </div>
                <div className={styles.container__content}>게시판</div>
                <div className={styles.container__comment}>코멘트</div>
            </div>
        </div>
    );
}

export default Post;
