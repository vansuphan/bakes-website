import ButtonCommon from "components/website/buttons/ButtonCommon";
import asset from "plugins/assets/asset";
import {COLOR, FONTS} from "components/website/constants/Constants";
import {useState, useEffect, useContext} from "react";
import {LanguageContextProvider} from "components/website/contexts/LanguageContext";
export default function ItemProduction ({
    title_en,
    title_vi,
    imgItem=asset("/images/noibat_1.jpg"),
    description_en,
    description_vi,
    reverse = false,
    padding,
    data,
}){

    const {languageCurrent} = useContext(LanguageContextProvider);
    const [_description, _setDescription] = useState();
    const [_title, _setTitle] = useState();

    useEffect(()=>{
        if(languageCurrent){
            if(languageCurrent== "en"){
                _setDescription(description_en);
                _setTitle(title_en);
            }else{
                _setDescription(description_vi);
                _setTitle(title_vi)
            }
        }else{
            _setDescription(description_en);
            _setTitle(title_en);
        }
    },[languageCurrent])

    return <div className={"itemProduction"}>
        <div className="imgItem">
            <img src={imgItem} />
        </div>
        <div className="descriptionItem">
            <h3>{_title}</h3>
            <p className="descriptionItemIn">{_description}</p>
            <p><ButtonCommon text="Shop" width={"30%"} display="block"></ButtonCommon></p>
        </div>
        
        <style jsx>{`
            .itemProduction{
                padding: ${padding ? padding : "30px 0"};
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 20px;
            }
            .imgItem{
                order: ${reverse ? "2" : "1"};
            }
            .descriptionItem{
                order: ${reverse ? "1" : "2"};
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                h3, p{
                    padding: 0 30px;
                    text-align: center;
                }
                .descriptionItemIn{
                    margin: 25px;
                }
            }
            h3{
                font-family: ${FONTS.GaramondPremrPro};
                font-size: 3.8vw;
                text-transform: capitalize;

            }
            @media only screen and (max-width: 768px){
                .itemProduction{
                    grid-template-columns: 1fr 1fr;
                }
                .descriptionItem{
                    h3{
                        padding-top: 30px;
                    }
                }
                h3{
                    font-size: 7vw;
                }
            }
            @media only screen and (max-width: 599px){
                .itemProduction{
                    grid-template-columns: 1fr;
                }
                .descriptionItem{
                    order: 2;
                    h3{
                        padding-top: 30px;
                    }
                }
                h3{
                    font-size: 7vw;
                   
                }
            }
        `}</style>
    </div>
}