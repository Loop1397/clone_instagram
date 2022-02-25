import { useState } from "react";
import Button from "./Button";
import styles from "./css/Post.module.css";
import Modal from "./Modal";
import { Slide } from "react-slideshow-image";

function Post() {
    const [isOpen, setIsOpen] = useState(false);
    const [slide, setSlide] = useState(0);

    const slideImages = [{ width: `100%`, height: `100%`, backgroundImage: `url("/public/images/sea1.jpeg")` }, "/public/images/sea2.jpeg", "/public/images/sea3.jpeg"];

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
                    <div style={slideImages[0]}>ㅎㅇ</div>
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
