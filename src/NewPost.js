import Button from "./Button";
import styles from "./css/NewPost.module.css";

function NewPost() {
    return (
        <div className={styles.container}>
            <div className={styles.newpost__box}>
                <Button style={styles.newpost__profile__icon__button} imgStyle={styles.newpost__profile__icon__image} image="/images/chrome.png" url="/id" />
                <Button style={styles.newpost__profile__id__button} text="chrome" url="/id" />
            </div>
        </div>
    );
}

export default NewPost;
