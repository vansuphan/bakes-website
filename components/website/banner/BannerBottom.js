import {COLOR, FONTS} from "components/website/constants/Constants";
export default function BannerBottom ({
    img,
    description,
    handleClick,
    className,
}){
    return <div className="bannerBottom">
        
        <div className="contentBannerBottom">
            <img src={img}/>
            <h4>{description}</h4>
            <p className="groupButton">
                <span>Start</span>
                <span className="pressEnter">Press 
                    <strong>Enter</strong> 
                </span>
            </p>
        </div>
        <style jsx>{`

            .bannerBottom{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 50px 0;
                font-size: 2vw;
                font-family: ${FONTS.GaramondPremrPro};
                text-align: center;

            }      
            .contentBannerBottom{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 800px;
                h4{
                    padding: 20px 40px;
                    font-weight: bold;
                }
            }  
            @media only screen and (max-width: 768px){
                .bannerBottom{
                    font-size: 5vw;

                }  
                .contentBannerBottom{
                    h4{
                        font-weight: 500;
                    }
                }
            }
        `}</style>
    </div>
}