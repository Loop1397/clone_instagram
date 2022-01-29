import styles from "./css/App.module.css";

function App() {
    return (
        <div>
            <header>
                <div className={styles.header__container}>헤더내부</div>
            </header>
            <div className={styles.container}>
                <div className={styles.container__box}>
                    <div className={styles.board__content}>왼</div>
                    <div className={styles.side__menu}>오</div>
                </div>
            </div>
        </div>
    );
}

export default App;
