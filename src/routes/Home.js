import styles from "../css/Home.module.css";
import Post from "../Post";
import NewPost from "../NewPost";
import Header from "../Header";
import SideBar from "../SideBar";

function Home() {
    return (
        <section>
            <header>
                <Header />
            </header>
            <div className={styles.container}>
                <div className={styles.container__box}>
                    <div className={styles.board__content}>
                        <NewPost />
                        <Post />
                        <Post />
                    </div>
                    <SideBar />
                </div>
            </div>
        </section>
    );
}

export default Home;
