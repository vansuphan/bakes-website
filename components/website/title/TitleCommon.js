import {FONTS} from "components/website/constants/Constants";
export default  function TitleCommon({children, padding}){
    return <h1 className="titleCommon">
        {
            children
        }
        <style jsx>{`
            .titleCommon{
                font-size: 5vw;
                text-align: center;
                font-family: ${FONTS.GaramondPremrPro};
                padding: ${padding};
            }
            @media only screen and (max-width: 599px){
                .titleCommon{
                    font-size: 12vw;
                }
            }
        `}</style>
    </h1>
}