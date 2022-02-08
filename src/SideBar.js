import Button from "./Button";
import styles from "./css/SideBar.module.css";
import RecommandProfile from "./RecommandProfile";

function SideBar() {
    return (
        <div className={styles.sidebar__container}>
            <div className={styles.my__profile__box}>
                <Button style={styles.my__profile__icon__button} imgStyle={styles.my__profile__icon__button__image} image="/images/google.png" url="/id" />
                <div style={{ width: "180px" }}>
                    <div>
                        <Button style={styles.my__profile__id__button} text="ncw1397" url="/id" />
                    </div>
                    <div>
                        <span className={styles.my__profile__name}>NNN</span>
                    </div>
                </div>
                <Button style={styles.my__profile__change__button} text="전환" url="/id" />
            </div>
            <div className={styles.recommand__box}>
                <div className={styles.recommand__title}>
                    <div className={styles.recommand__title__text}>
                        <span>회원님을 위한 추천</span>
                    </div>
                    <Button style={styles.recommand__title__list__button} text="모두 보기" url="/explore/people" />
                </div>
                <div className={styles.recommand__content}>
                    <RecommandProfile image="/images/firefox.png" id="firefox" category="회원님을 위한 추천" />
                    <RecommandProfile image="/images/github.png" id="github" category="인기" />
                    <RecommandProfile image="/images/explorer.png" id="explorer" category="회원님을 위한 추천" />
                    <RecommandProfile image="/images/facebook.png" id="facebook" category="회원님을 위한 추천" />
                    <RecommandProfile image="/images/twitter.png" id="twitter" category="인기" />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
