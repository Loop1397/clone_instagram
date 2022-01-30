import styles from "./css/App.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Button from "./Button";
import Header from "./Header";

function App() {
    /**
     * 버튼 클릭시 url 이동하는 메소드
     */
    const onclick = url => {
        window.location.href = url;
    };

    return (
        <section>
            <header>
                <Header />
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
