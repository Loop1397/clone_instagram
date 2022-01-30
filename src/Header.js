import styles from "./css/Header.module.css";
import Button from "./Button";
import Search from "./Search";

function Header() {
    const onclick = url => {
        window.location.href = url;
    };

    return (
        <div className={styles.header__container}>
            <Button style={styles.header__logo__button} imgStyle={styles.header__logo__button__image} onclick={url => onclick(url)} image="/images/logo.png" url="https://naver.com" />
            <Search style={styles.header__search__container} inputStyle={styles.header__search__inputbox} />
        </div>
    );
}

export default Header;
