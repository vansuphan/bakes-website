export default function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick} >
            <p className="arrowNextCarousel"></p>
            <style jsx>{`
            .arrowNextCarousel{
                position: relative;
                width: 30px;
                height: 30px;
                &::after, &::before {
                    transition: 0.3s;
                    content: "";
                    width: 40%;
                    position: absolute;
                    height: 1px;
                    background-color: #000;
                    opacity: 0.2;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 2px;
                }
                &::after{
                    top: 28%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(40deg);
                }
                &::before {
                    top: 50%;
                    transform: translate(-50%, -50%) rotate(-40deg);
                }
                &:hover::after{
                    opacity: 1;
                }
                &:hover::before{
                    opacity: 1;
                }
            }
          `}
            </style>
        </div>
    );
}