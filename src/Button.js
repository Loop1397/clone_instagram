function Button(prop) {
    /**
     * 버튼 클릭시 url 이동하는 메소드
     */
    const onClick = () => {
        window.location.href = prop.url;
    };

    const textBtn = () => {
        return <span className={prop.textStyle}>{prop.text}</span>;
    };
    const imageBtn = () => {
        return <img src={prop.image} className={prop.imgStyle} alt="image" />;
    };
    return (
        <div className={prop.style} onClick={onClick}>
            {prop.text ? textBtn() : imageBtn()}
        </div>
    );
}
export default Button;
