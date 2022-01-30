import { useState } from "react";

function Search(prop) {
    const [clicked, setClicked] = useState(false);
    const onclick = () => setClicked(true);

    return (
        <div className={prop.style}>
            <div onClick={onclick}>
                {!clicked ? (
                    <div className={prop.inputStyle}>
                        <span color="#8e8e8e"> 검색 하기!</span>
                        {/* 🔍 */}
                    </div>
                ) : (
                    <input type="text" color="#262626" className={prop.inputStyle} placeholder="검색" autoFocus />
                )}
            </div>
        </div>
    );
}

export default Search;
