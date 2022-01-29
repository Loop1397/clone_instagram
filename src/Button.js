function Button(prop) {
    const handleOnClick = () => {
        prop.onclick(prop.url);
    };

    const textBtn = () => {
        return <span className={prop.textStyle}>{prop.text}</span>;
    };
    const imageBtn = () => {
        return <img src={prop.image} className={prop.imgStyle} alt="image" />;
    };
    return (
        <div className={prop.style} onClick={handleOnClick}>
            {prop.text ? textBtn() : imageBtn()}
        </div>
    );
}
export default Button;
