/**
 * 입력 해야하는 요소
 * 버튼 스타일(style)
 * 이미지(imgStyle) or 텍스트 스타일(textStyle(둘중 하나만 들어감)
 * url(url)
 * +이미지 버튼일 시 이미지 파일 주소(image)
 */

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
