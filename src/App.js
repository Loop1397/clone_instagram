import styles from "./css/App.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Button from "./Button";

function App() {
    const onclick = url => {
        window.location.href = url;
    };

    return (
        <section>
            <header>
                <div className={styles.header__container}>
                    <Button style={styles.logo__button} imgStyle={styles.logo__button__image} onclick={url => onclick(url)} image="/images/logo.png" url="https://naver.com" />
                </div>
            </header>
            <div></div>
            <div className={styles.container}>
                <div className={styles.container__box}>
                    <div className={styles.board__content}>
                        <NewPost />
                        <Post />
                        <Post />
                    </div>
                    <div className={styles.side__menu}>오</div>
                </div>
            </div>
        </section>
    );
}

export default App;
