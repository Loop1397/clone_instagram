import styles from "./css/Navigator.module.css";
import Button from "./Button";
import { useState } from "react";

function Navigator() {
    const [click, setClick] = useState([0, 0, 0, 0, 0, 0]);

    const onClickNav = e => {
        console.log(e.target.value);
    };

    return (
        <div className={styles.nav__container}>
            <div>
                <Button style={styles.nav__button} imgStyle={styles.nav__button__image} onClick={url => onclick(url)} value={1} image="/images/home.png" url="/" />
            </div>
            <div>
                <Button style={styles.nav__button} imgStyle={styles.nav__button__image} onclick={url => onclick(url)} value={2} image="/images/send.png" url="/direct/inbox/" />
            </div>
            <div>
                <Button style={styles.nav__button} imgStyle={styles.nav__button__image} onclick={url => onclick(url)} value={3} image="/images/add.png" url="/create/select/" />
            </div>
            <div>
                <Button style={styles.nav__button} imgStyle={styles.nav__button__image} onclick={url => onclick(url)} value={4} image="/images/compass.png" url="/explore/" />
            </div>
            <div>
                <Button style={styles.nav__button} imgStyle={styles.nav__button__image} onclick={url => onclick(url)} value={5} image="/images/like.png" url="/" />
            </div>
            <div>
                <Button style={styles.nav__button} imgStyle={styles.nav__button__image} onclick={url => onclick(url)} value={6} image="/images/logo.png" url="/id" />
            </div>
        </div>
    );
}

export default Navigator;
