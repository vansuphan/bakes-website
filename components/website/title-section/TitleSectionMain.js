import Container from "components/website/elements/Container";
import {COLOR, FONTS} from "components/website/constants/Constants";
export default function TitleSectionMain({
    title,
    description,
    className,
    margin,
    padding="80px 0"
}){
    return <div className={`${className ?  "titleSectionMain " + className : "titleSectionMain"}`}>
        <Container>
            <div className="contentTitleSection">
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        </Container>
        <style jsx>{`
            .titleSectionMain{
                background-color: ${COLOR.BG_TITLE_SECTION_MAIN};
                padding: ${padding};
                margin: ${margin ? margin : "unset"};
            }
            .contentTitleSection{
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            h3{
                font-size: 5vw;
                font-family: ${FONTS.GaramondPremrPro};
                padding-right: 60px;
                margin-right: 60px;
                /* border-right: solid 1px ${COLOR.BLACK}; */
                text-transform: capitalize;
                position: relative;
                &::after{
                    content: "";
                    position: absolute;
                    left: 100%;
                    width: 2px;
                    height: 55%;
                    background-color: ${COLOR.BLACK};
                    top: 50%;
                    transform: translate(0 , -50%);
                }
            }
            span{
                max-width: 40%;
            }
            @media only screen and (max-width: 990px){
                .titleSectionMain{
                    padding: 50px 0;
                }
                .contentTitleSection{
                    display: flex;
                    flex-direction: column;
                }
                h3{
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    font-size: 7vw;
                    &::after{
                        display: none;
                    }
                }
                span{
                    width: 100%;
                    max-width: 100%;
                }
            }
            @media only screen and (max-width: 599px){
                h3{
                    font-size: 10vw;
                }
                span{
                 
                }
            }
        `}</style>
    </div>
}