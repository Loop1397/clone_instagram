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
    };

    return (
        <div className={styles.search__container} onClick={onClick} onBlur={onBlur}>
            <div>
                {!clicked ? (
                    <div className={styles.search__box}>
                        <span>+ {value === "" ? "κ²μ" : value}</span>
                        {/* π */}
                    </div>
                ) : (
                    <div>
                        <input type="text" color="#262626" className={styles.search__input__text} value={value} onChange={onChange} placeholder="κ²μ" autoFocus />
                        <div onClick={deleteValue} className={styles.search__delete}></div>
                        {/* Todo: onClick={deleteValue} μλλκ±° ν΄κ²°νκΈ° */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
