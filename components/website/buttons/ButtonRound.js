import asset from "plugins/assets/asset";
import {COLOR, LOGO} from "components/website/constants/Constants";

const color = COLOR;

export default function ButtonRound ({
    handleOutSite,
    icon = asset("/images/icon-moon.png"),
    children,
    background = color.WHITE,
    backgroundHover = color.BLACK,

}){

   

    const handleClick = ()=>{
        if(handleOutSite){
            handleOutSite();
        }

    }

    return <span className="btnRound" onClick={handleClick}>

        <i className="btnEffect"></i>
        <style jsx>{`
            .btnRound{
                display: block;
                position: relative;
                background-color: ${background};
                border: solid 1px ${color.BG_GRAY_LIGHT};
                border-radius:100%;
                color: ${color.WHITE};
                height:40px;
                width: 40px;
                cursor: pointer;
                overflow: hidden;
                transition: 0.5s;
                &::after{
                    content: "";
                    position: absolute;
                    background-image: url(${icon});
                    background-position: center;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    transition: 0.5s;
                    width: 14px;
                    height: 14px;
                    border-radius:100%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
                .btnEffect{
                    position: absolute;
                    transition: 0.4s;
                    border-radius:100%;
                    top: 50%;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    transform: translate(-50%,0);
                    background-color:${backgroundHover};
                }
            }
            .btnRound:hover >.btnEffect{
               
               left: 0;
               
            }
        `}</style>
    </span>
}