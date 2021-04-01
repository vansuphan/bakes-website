import Container from "components/website/elements/Container";
// import TitleSectionMain from "components/website/title-section/TitleSectionMain";
import asset from "plugins/assets/asset";
import { COLOR, FONTS } from "components/website/constants/Constants";
import ItemAbout from "components/website/item/ItemAbout";
import ItemTextAbout from "components/website/item/ItemTextAbout";
import GroupBtnCommon from "components/website/elements/GroupBtnCommon";
import Line from "components/website/elements/Line";

const listItemsFetch = [
    {
        img: asset("/images/bakes-product-01.jpg"),
        imgHover: asset("/images/bakes-combo-01.jpg"),
        nameItem: "Ăn sáng ngọt",
        price: "50.000",
        oldPrice: "60.000",
        link: "",
    },
    {
        img: asset("/images/bakes-product-02.jpg"),
        imgHover: asset("/images/bakes-combo-02.jpg"),
        nameItem: "Ăn sáng mặn",
        price: "55.000",
        oldPrice: "70.000",
        link: "",
    },
    {
        img: asset("/images/connect_3_image.jpg"),
        imgHover: asset("/images/bakes-combo-03.jpg"),
        nameItem: "Gato chanh sâm",
        price: "66.000",
        oldPrice: "80.000",
        link: "",
    }
]

import {ApiContextProvider} from "components/website/contexts/ApiContext";
import {useState, useEffect, useContext} from "react";


export default function AboutContent({ }) {

    const [dataApiAbout, setDataApiAbout] = useState();
    const {GetApiPageAboutUs} = useContext(ApiContextProvider);

    useEffect(()=>{

        if(GetApiPageAboutUs){
            GetApiPageAboutUs(setDataApiAbout);
        }

    },[]);

    // useEffect(()=>{
    //     if(dataApiAbout){
    //         console.log("dataApiAbout ==> ", dataApiAbout)
    //     }
    // }, [dataApiAbout])

    return <div className="aboutContent">

        <Container>

            {
                dataApiAbout && dataApiAbout.content
                ? dataApiAbout.content.map((value, index)=>{
                    if(value.section == 1){
                        return <div className="itemContentAbout" key={index}>
                            <ItemAbout 

                                title_en = {value.title_en}
                                title_vi = {value.title_vi}

                                subTitle_en = {value.short_description_en}
                                subTitle_vi = {value.short_description_vi}
                                
                                caption_en={value.caption_en}
                                caption_vi={value.caption_vi}

                                image={value.image}
                            >
                            </ItemAbout>
                            <ItemTextAbout
                                leftDescription_en={value.left_en || ""}
                                leftDescription_vi={value.left_vi || ""}
                                sub_en={
                                    <div className="listSubAbout">
                                        <p className="subTextAbout">
                                            {value.description_en}
                                        </p>
                                    </div>
                                }
                                sub_vi={
                                    <div className="listSubAbout">
                                        <p className="subTextAbout">
                                        {value.description_vi}
                                        </p>
                                    </div>
                                }
                            ></ItemTextAbout>
                            <Line paddingRight="50px" paddingLeft="50px" paddingTop="50px"></Line>
                        </div>
                    }
                    if(value.section == 2){
                        return <div className="itemContentAbout" key={index}>
                            <ItemAbout 

                                title_en = {value.title_en}
                                title_vi = {value.title_vi}

                                caption_en={value.caption_en}
                                caption_vi={value.caption_vi}

                                subTitle_en = {value.short_description_en}
                                subTitle_vi = {value.short_description_vi}

                                image={[value.image_1, value.image_2]}

                                paddingBottom="0"
                            >
                            </ItemAbout>
                            {/* <GroupBtnCommon margin="0"></GroupBtnCommon> */}
                            <Line paddingRight="50px" paddingLeft="50px" paddingTop="50px"></Line>
                        </div>
                    }
                    if(value.section == 3){
                        return <div className="itemContentAbout" key={index}>
                            <ItemAbout 

                                title_en = {value.title_en}
                                title_vi = {value.title_vi}

                                caption_en={value.caption_en}
                                caption_vi={value.caption_vi}

                                subTitle_en = {value.short_description_en}
                                subTitle_vi = {value.short_description_vi}
                                
                                leftDescription_en={value.left_en || ""}
                                leftDescription_vi={value.left_vi || ""}

                                image={value.image}
                            >
                            </ItemAbout>
                            <ItemTextAbout

                                sub_en={
                                    <div className="listSubAbout">
                                        <p className="subTextAbout">
                                            {value.description_en}
                                        </p>
                                    </div>
                                }
                                sub_vi={
                                    <div className="listSubAbout">
                                        <p className="subTextAbout">
                                        {value.description_vi}
                                        </p>
                                    </div>
                                }
                                listImage={[value.image_1, value.image_2, value.image_3, value.image_4 ]}
                            ></ItemTextAbout>
                            <Line paddingRight="50px" paddingLeft="50px" paddingTop="50px"></Line>
                        </div>
                    }
                })
                : <></>
            }
            
        </Container>

        <style jsx>{`
        
            .subTextAbout{
                padding: 20px 0;
                padding-top: 0;
                font-weight: 500;
            }
            .itemContentAbout{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            @media only screen and (max-width: 768px){
                .subTextAbout{
                    font-size: 3.5vw;
                }
            }
            @media only screen and (max-width: 599px){
                .subTextAbout{
                    font-size: 4vw;
                }
            }
        `}</style>
    </div>
}