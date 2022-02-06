import Button from "./Button";
import styles from "./css/SideBar.module.css";

function SideBar() {
    return (
        <div>
            <div className={styles.sidebar__profile}>
                <Button style={styles.sidebar__profile__icon__button} imgStyle={styles.sidebar__profile__icon__button__image} image="/images/google.png" url="/id" />
                <Button style={styles.sidebar__profile__id__button} text="Pinbol" url="/id" />
            </div>
            <div></div>
            <div></div>
        </div>
    );
}

export default SideBar;
