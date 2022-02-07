import Button from "./Button";
import styles from "./css/SideBar.module.css";

function SideBar() {
    return (
        <div className={styles.sidebar__container}>
            <div className={styles.my__profile__box}>
                <Button style={styles.my__profile__icon__button} imgStyle={styles.my__profile__icon__button__image} image="/images/google.png" url="/id" />
                <div style={{ width: "100px" }}>
                    <div>
                        <Button style={styles.my__profile__id__button} text="ncw1397" url="/id" />
                    </div>
                    <div>
                        <span className={styles.my__profile__name}>NNN</span>
                    </div>
                </div>
                <Button style={styles.my__profile__change__button} text="전환" url="/id" />
            </div>
            <div className={styles.recommand__content}>
                <div className={styles.recommand__title}>
                    <div className={styles.recommand__title__text}>
                        <span>회원님을 위한 추천</span>
                    </div>
                    <Button style={styles.recommand__title__list__button} text="모두 보기" url="/explore/people" />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
