import { useEffect, useState } from "react";
import Modal from "./Modal";

function ModalPage() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    //isOpen의 상태가 바뀌었을 시 실행
    useEffect(() => {
        if (isOpen) {
            //3초 뒤에 타이머 실행
            const timer = setTimeout(() => {
                setIsOpen(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div>
            <h1>Modal Test</h1>
            <button onClick={openModal}>Open Modal</button>
            <div>
                {/* 단축 평가 (||,&&) */}
                {isOpen && <Modal message="This is Modal" />}
            </div>
        </div>
    );
}

export default ModalPage;
