import { COLOR, FONTS } from "components/website/constants/Constants";
import {useState, useEffect, useContext} from "react";
import {LanguageContextProvider} from "components/website/contexts/LanguageContext";

export default function ItemAboutUs ({
    title_en,
    title_vi,
    caption_en,
    caption_vi,
    subTitle_en,
    subTitle_vi,
    image,
    paddingBottom="50px",
    // hasBnt= false,
}){

    const {languageCurrent} = useContext(LanguageContextProvider);
    
    const [_title, _setTitle] = useState();
    const [_subTitle, _setSubTitle] = useState();
    const [_caption, _setCaption] = useState();

    useEffect(()=>{
        if(languageCurrent){
            if(languageCurrent== "en"){
                _setCaption(caption_en);
                _setTitle(title_en);
                _setSubTitle(subTitle_en)
            }else{
                _setCaption(caption_vi);
                _setTitle(title_vi)
                _setSubTitle(subTitle_vi)
            }
        }else{
            _setCaption(caption_en);
            _setTitle(title_en);
            _setSubTitle(subTitle_en)
        }
    },[languageCurrent])


    return <div className="itemAboutUs">
        <h3>{_title}</h3>
        <p>{_subTitle}</p>
        <div className={image.length  == 2 ? "imgItemAboutUs grid" : "imgItemAboutUs"}>
            {
                image.length == 2
                ?  <>
                    <img className="1" src={image[0]}/>
                    <img className="2"src={image[1]}/>
                </>
                :   <img src={image}/>
            }
        </div>
        <span>{_caption}</span>
        
        <style jsx>{`
            .itemAboutUs{
                padding: 50px;
                text-align: center;
                padding-bottom: ${paddingBottom};
                h3{
                    font-size: 7vw;
                    font-family: ${FONTS.GaramondPremrPro};
                    text-transform: capitalize;
                    width: 50vw;
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                }
                p{
                    margin: 20px 0;
                    margin-bottom: 60px;
                    font-family: ${FONTS.AcuminProRegular};
                    font-weight: 400;
                    font-size: 1.1vw;
                    width: 53vw;
                    margin-left: auto;
                    margin-right: auto;
                }
                img{
                    display: block;
                    width: 100%;
                }
                span{
                    display: block;
                    width: 100%;
                    text-align: left;
                    padding: 10px 0;
                    text-transform: uppercase;
                }
                .imgItemAboutUs.grid{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    column-gap: 40px;
                }
            }

            @media only screen and (max-width: 768px){
                .itemAboutUs{
                    padding: 30px;
                    padding-top: 40px;
                    padding-left: 0;
                    padding-right: 0;
                    text-align: center;
                    h3{
                        font-size: 10vw;
                        width: 100%;
                    }
                    p{
                        margin-top: 5px;
                        margin-bottom: 50px;
                        font-size: 2.5vw;
                        width: 100%;
                       
                    }
                    span{
                        padding: 10px 0;
                        padding-bottom: 30px;
                    }
                    .imgItemAboutUs.grid{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        column-gap: 15px;
                    }
                }
            }

        `}</style>
    </div>
}