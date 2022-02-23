import ReactModal from "react-modal";
import styles from "./css/Modal.module.css";
import { CSSTransition } from "react-transition-group";

function Modal(props) {
    const { isOpen, closeModal } = props;

    //취소버튼이나 모달 창 바깥 부분 클릭 시 모달 창 닫기
    return (
        <ReactModal isOpen={isOpen} className={styles.modal__background}>
            <div className={styles.modal__box} onClick={closeModal}>
                <div className={styles.modal__content}>
                    <button style={{ color: `#ed4056`, border: `none`, fontWeight: `700`, borderTopLeftRadius: `10px`, borderTopRightRadius: `10px` }}>신고</button>
                    <button style={{ color: `#ed4056`, borderTop: `1px solid #dbdbdb`, fontWeight: `700` }}>팔로우 취소</button>
                    <button style={{ borderTop: `1px solid #dbdbdb` }}>게시물로 이동</button>
                    <button style={{ borderTop: `1px solid #dbdbdb` }}>공유 대상...</button>
                    <button style={{ borderTop: `1px solid #dbdbdb` }}>링크 복사</button>
                    <button style={{ borderTop: `1px solid #dbdbdb` }}>퍼가기</button>
                    <button style={{ borderTop: `1px solid #dbdbdb`, borderBottomLeftRadius: `10px`, borderBottomRightRadius: `10px` }} onClick={closeModal}>
                        취소
                    </button>
                </div>
            </div>
        </ReactModal>
    );
}

export default Modal;
