import { useState } from "react";
import Button from "./Button";
import styles from "./css/Post.module.css";
import Modal from "./Modal";
import { Slide } from "react-slideshow-image";

function Post() {
    const [isOpen, setIsOpen] = useState(false);
    const [slide, setSlide] = useState(0);

    const slideImages = [styles.image1, styles.image2, styles.image3];

    const leftSlide = () => {
        if (0 < slide) {
            setSlide(current => current - 1);
        }
    };

    const rightSlide = () => {
        if (slide < slideImages.length - 1) {
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
                    <div className={slideImages[slide]}></div>
                </div>
                {/* <div className={styles.each__slide}>
                </div> */}
                {/* <div className={styles.each__slide}>
                    <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
                </div>
                <div className={styles.each__slide}>
                    <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
                </div> */}
                <div className={styles.container__content}>게시글 내용</div>
                <div className={styles.container__comment}>코멘트</div>
            </div>
        </div>
    );
}

export default Post;
