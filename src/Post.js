import Button from "./Button";
import styles from "./css/Post.module.css";

function Post() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.header__left}>
                        <div className={styles.header__profile__icon}>
                            <Button style={styles.header__profile__icon__button} imgStyle={styles.header__profile__icon__button__image} image="/images/chrome.png" url="/id" />
                        </div>
                        <div className={styles.header__profile__id}>
                            <Button style={styles.header__profile__id__button} text="chrome" url="id" />
                        </div>
                    </div>
                    <div className={styles.header__right}></div>
                </div>
                <div className={styles.container__image}>사진</div>
                <div className={styles.container__content}>게시글 내용</div>
                <div className={styles.container__comment}>코멘트</div>
            </div>
        </div>
    );
}

export default Post;
