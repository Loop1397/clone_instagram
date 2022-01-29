import styles from "./css/Post.module.css";

function Post() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.container__header}>ㅎㅇ</div>
                <div className={styles.container__image}>사진</div>
                <div className={styles.container__content}>게시글 내용</div>
                <div className={styles.container__comment}>코멘트</div>
            </div>
        </div>
    );
}

export default Post;
