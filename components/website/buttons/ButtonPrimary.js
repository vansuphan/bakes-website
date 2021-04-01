// import asset from "plugins/assets/asset";
import {COLOR, LOGO} from "components/website/constants/Constants";
export default function ButtonPrimary ({
    text = "ButtonPrimary",
    handleOutSite,
    iconLink,
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

        {
            children ? children : <></>
        }

        {
            iconLink ? <img className="btnIcon" src={iconLink}/> : <> </>
        }

        <i className="btnEffect"></i>
        <style jsx>{`
            .btnPrimary{
                display: block;
                position: relative;
                background-color: ${color.PRIMARY};
                border-radius: 20px;
                color: ${color.WHITE};
                padding: 10px 25px;
                cursor: pointer;
                overflow: hidden;
                transition: 0.5s;
                .btnEffect{
                    position: absolute;
                    transition: 0.5s;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    transform: rotate(45deg);
                    background-color: rgba(255,255,255,0.2);
                }
            }
            .btnPrimary:hover >.btnEffect{
               
                left: 150%;
                
            }
        `}</style>
    </span>
}