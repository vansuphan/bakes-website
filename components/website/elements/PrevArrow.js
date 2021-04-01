export default function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick} >
            <p className="arrowPrevCarousel"></p>
            <style jsx>{`
            .arrowPrevCarousel{
                transition: 0.3s;
                position: relative;
                width: 30px;
                height: 30px;
                &::after, &::before {
                    content: "";
                    width: 40%;
                    position: absolute;
                    height: 1px;
                    background-color: #000;
                    opacity: 0.2;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) ;
                    border-radius: 2px;
                }
                &::after{
                    top: 28%;
                    transform: translate(-50%, -50%) rotate(-40deg);
                }
                &::before {
                    transform: translate(-50%, -50%) rotate(40deg);
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