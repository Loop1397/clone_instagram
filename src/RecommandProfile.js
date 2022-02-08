import Button from "./Button";
import styles from "./css/RecommandProfile.module.css";

function RecommandProfile(prop) {
    return (
        <div className={styles.recommand__box}>
            <Button style={styles.profile__icon__button} imgStyle={styles.profile__icon__button__image} image={prop.image} url="/id" />
            <div style={{ width: "180px", marginLeft: "48px" }}>
                <div>
                    <Button style={styles.profile__id__button} text={prop.id} url="/id" />
                </div>
                <div>
                    <span className={styles.profile__name}>{prop.category}</span>
                </div>
            </div>
            <Button style={styles.profile__follow__button} text="팔로우" url="/id" />
        </div>
    );
}

export default RecommandProfile;
