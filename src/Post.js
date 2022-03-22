import React, { useRef, useState } from "react";
import Button from "./Button";
import styles from "./css/Post.module.css";
import Modal from "./Modal";

function Post() {
    const [isOpen, setIsOpen] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    const slideImages = [styles.image1, styles.image2, styles.image3, styles.image4];

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
    };

    const closeModal = e => {
        setIsOpen(false);
        e.stopPropagation(); //이벤트 버블링을 막기 위한 메소드
    };

    const imageIndexRendering = () => {
        const result = [];

        for (let i = 0; i < slideImages.length; i++) {
            result.push(<li key={`image${i + 1}`} className={slideImages[i]} style={{ left: `${i * 100}%` }}></li>);
        }

        return result;
    };

    const slideNumberRendering = () => {
        const result = [];

        for (let i = 0; i < slideImages.length; i++) {
            if (i === slideIndex) {
                result.push(<span className={styles.content__current__slide__number}>⦁</span>);
                continue;
            }
            result.push(<span className={styles.content__slide__number}>⦁</span>);
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
                    <ul className={styles.image__box} style={{ width: `${imageBoxWidth}%`, left: `${slideIndex * -100}%` }}>
                        {imageIndexRendering()}
                    </ul>
                </div>
                <div className={styles.container__content}>
                    <div className={styles.content__buttons}>{slideNumberRendering()}</div>
                    좋아요 ~개
                </div>
                <div className={styles.container__comment}>댓글 달기..</div>
            </div>
        </div>
    );
}

export default Post;
