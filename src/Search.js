import { useState } from "react";
import styles from "./css/Search.module.css";

function Search() {
    const [clicked, setClicked] = useState(false);
    const [value, setValue] = useState("");
    const onClick = () => setClicked(true);
    const onBlur = () => setClicked(false);
    const onChange = e => setValue(e.target.value);
    const deleteValue = () => {
        setValue("");
        console.log("ㅎㅇ!");
    };

    return (
        <div className={styles.search__container}>
            <div onClick={onClick} onBlur={onBlur}>
                {!clicked ? (
                    <div className={styles.search__box}>
                        <span color="#8e8e8e">+ {value === "" ? "검색" : value}</span>
                        {/* 🔍 */}
                    </div>
                ) : (
                    <div>
                        <input type="text" color="#262626" className={styles.search__input__text} value={value} onChange={onChange} placeholder="검색" autoFocus />
                        <div onClick={deleteValue} className={styles.search__delete}></div>
                        {/* Todo: onClick={deleteValue} 안되는거 해결하기 */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
