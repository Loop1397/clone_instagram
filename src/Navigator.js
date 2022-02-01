import styles from "./css/Navigator.module.css";
import Button from "./Button";

function Navigator() {
    return (
        <div className={styles.nav__container}>
            <div>
                <Button style={styles.nav__button} imgStyle={styles.nav__button__image} onclick={url => onclick(url)} image="/images/home.png" url="/" />
            </div>
            <div>
                <Button style={styles.nav__button} imgStyle={styles.nav__button__image} onclick={url => onclick(url)} image="/images/send.png" url="/direct/inbox/" />
            </div>
            <div>
                <Button style={styles.nav__button} imgStyle={styles.nav__button__image} onclick={url => onclick(url)} image="/images/new.png" url="/create/select/" />
            </div>
            <div>
                <Button style={styles.nav__button} imgStyle={styles.nav__button__image} onclick={url => onclick(url)} image="/images/compass.png" url="/explore/" />
            </div>
            <div>
                <Button style={styles.nav__button} imgStyle={styles.nav__button__image} onclick={url => onclick(url)} image="/images/like.png" url="/" />
            </div>
            <div>
                <Button style={styles.nav__button} imgStyle={styles.nav__button__image} onclick={url => onclick(url)} image="/images/logo.png" url="/" />
            </div>
        </div>
    );
}

export default Navigator;
