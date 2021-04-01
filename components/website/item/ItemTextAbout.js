import { COLOR, FONTS } from "components/website/constants/Constants";
import {useState, useEffect, useContext} from "react";
import {LanguageContextProvider} from "components/website/contexts/LanguageContext";
import { values } from "lodash";


export default function ItemTextAbout ({
    leftDescription_en,
    leftDescription_vi,
    sub_vi, 
    sub_en,
    listImage=[],
}) {
    
    const {languageCurrent} = useContext(LanguageContextProvider);
    const [_sub, _setSub] = useState();
    const [_leftDescription, _setLeftDescription] = useState();

    useEffect(()=>{
        if(languageCurrent){
            if(languageCurrent== "en"){
                _setSub(sub_en);
                _setLeftDescription(leftDescription_en);
            }else{
                _setSub(sub_vi);
                _setLeftDescription(leftDescription_vi)
            }
        }else{
            _setSub(sub_en);
            _setLeftDescription(leftDescription_en);
        }
    },[languageCurrent]);


    return <div className="itemTextAbout">
        <div>

            {
                _leftDescription 
                ? <h3>
                    {_leftDescription}
                </h3>
                :<></>
            }
           
            {
                listImage 
                ?   <div className="listImages">
                        {
                            listImage && listImage.length > 0 
                            ?   listImage.map((values, index)=>{
                                    return <a href="#" key={index}>
                                        <img className="itemImgTextAbout"  src={values}/>
                                    </a>
                                })
                            :   <></>
                        }
                    </div>
                :   <></>
            }
            
            
        </div>
        <div className="subItemAbout">
            {_sub}
        </div>
        <style jsx>{`
            .itemTextAbout{
                padding: 0 50px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column: 40px;
                h3{
                    font-family: ${FONTS.GaramondPremrPro};
                    font-size: 4vw;
                    text-align: left;
                }
            }
            .listImages{
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding-right: 30%;

                .itemImgTextAbout{
                    cursor: pointer;
                    &:hover{
                        opacity: 0.6;
                    }
                }
            }
            @media only screen and (max-width: 768px){
                .itemTextAbout{
                    padding: 0;
                
                    h3{
                        font-size: 8vw;
                        padding-right: 15px;
                    }
                }
                
            }
            @media only screen and (max-width: 599px){
                .itemTextAbout{
                    grid-template-columns: 1fr;
                    h3{
                        font-size: 10vw;
                    }
                }
                .subItemAbout{

                }
                .listImages{
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    padding-right: 0;
                    padding-left: 0;
                    margin-bottom: 20px;
                }
            }
        `}</style>
    </div>
}