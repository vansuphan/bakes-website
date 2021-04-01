import asset from "plugins/assets/asset";
import {COLOR, LOGO} from "components/website/constants/Constants";
export default function ButtonPrimary ({
    text = "ButtonPrimary",
    handleOutSite,
    children,
}){

    const color = COLOR;

    const handleClick = ()=>{
        if(handleOutSite){
            handleOutSite();
        }

    }

    return <span className="btnPrimary" onClick={handleClick}>

        {
            text
        }

        <i className="btnEffect"></i>
        
        <style jsx>{`
            .btnPrimary{
                position: relative;
                background-color: ${color.PRIMARY};
                border-radius: 20px;
                color: ${color.WHITE};
                padding: 10px 25px;
                padding-right: 45px;
                cursor: pointer;
                overflow: hidden;
                transition: 0.5s;
                .btnEffect{
                    position: absolute;
                    background-image: url(${asset("/images/arrow-white-right.png")});
                    background-position: center;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    transition: 0.5s;
                    width: 14px;
                    height: 14px;
                    right: 20px;
                    top: 50%;
                    transform: translate(0,-50%);
                }
            }
            .btnPrimary:hover{
                padding-left: 40px;
            }
            .btnPrimary:hover >.btnEffect{
               
                right: -20px;
                opacity: 0;
                
            }
        `}</style>
    </span>
}