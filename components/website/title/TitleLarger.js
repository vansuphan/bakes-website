import {FONTS} from "components/website/constants/Constants";
export default  function TitleLarger({children, padding}){
    return <h1 className="titleLarger">
        {
            children
        }
        <style jsx>{`
            .titleLarger{
                font-size: 14vw;
                text-align: center;
                font-family: ${FONTS.GaramondPremrPro};
                padding: ${padding};
            }
            @media only screen and (max-width: 599px){
                .titleLarger{
                    font-size: 18vw;
                }
            }
        `}</style>
    </h1>
}