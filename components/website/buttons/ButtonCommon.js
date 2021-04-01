// import asset from "plugins/assets/asset";
import {COLOR, LOGO} from "components/website/constants/Constants";
export default function ButtonPrimary ({
    text = "ButtonPrimary",
    handleOutSite,
    iconLink,
    children,
    width,
    display="inline-block",
    colorRevert = false,
    borderRadius="25px",
    padding="15px 25px",
    margin="0"
}){

    const color = COLOR;
    const handleClick = ()=>{
        if(handleOutSite){
            handleOutSite();
        }

    }

    return <span className={colorRevert == true ? "btnCommon black" : "btnCommon" } onClick={handleClick}>

        {
            text
        }

        {
            children ? children : <></>
        }

        {
            iconLink ? <img className="btnIcon" src={iconLink}/> : <> </>
        }
        
        <style jsx>{`
            .btnCommon{
                display: ${display};
                position: relative;
                background-color: ${color.WHITE};
                border-radius: ${borderRadius};
                color: ${color.BLACK};
                border: solid 1px ${color.BLACK};
                padding: ${padding};
                cursor: pointer;
                overflow: hidden;
                transition: 0.4s;
                text-align: center;
                width: ${width ? width : "auto"};
                min-width: 150px;
                text-transform: uppercase;
                margin: ${margin};
            }
            .btnCommon:hover{
               background-color: ${color.BLACK};
               color: ${color.WHITE};
            }

            .btnCommon.black{
                background-color: ${color.BLACK};
                color: ${color.WHITE};
            }
            .btnCommon.black:hover{
                background-color: ${color.WHITE};
                color: ${color.BLACK};
            }
            
        `}</style>
    </span>
}