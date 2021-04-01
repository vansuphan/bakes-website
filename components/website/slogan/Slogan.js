import {COLOR, FONTS} from "components/website/constants/Constants";
export default function Slogan({
    text,
    children
}){
    return <div className="slogan">
        <h2>
            <i>{text}</i>
            {children}
        </h2>
        <style jsx>{`
            .slogan{
                height: 70vh;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 16vw;
                h2{
                    font-size: 4vw;
                    font-family: ${FONTS.GaramondPremrPro};
                    text-align: center;
                    font-style: italic;
                    font-weight: 300;
                    -webkit-font-smoothing: antialiased;
                }
            }
        `}</style>
    </div>
}