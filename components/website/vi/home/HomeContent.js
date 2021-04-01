import Container from "components/website/elements/Container";
import TitleLarger from "components/website/title/TitleLarger";
import Banner from "components/website/banner/Banner";
import TitleSectionMain from "components/website/title-section/TitleSectionMain";
import ItemProduction from "components/website/item/ItemProduction";
import Slogan from "components/website/slogan/Slogan";
import ItemImgScale from "components/website/item/ItemImgScale";
// import asset from "plugins/assets/asset";
// import {COLOR, FONTS} from "components/website/constants/Constants";
import {ApiContextProvider} from "components/website/contexts/ApiContext";

import {useState, useEffect, useContext} from "react";

export default function HomeContent ({}){

    const [dataApiHome, setDataApiHome] = useState();
    const {GetApiHome} = useContext(ApiContextProvider);

    useEffect(()=>{

        if(GetApiHome){
            GetApiHome(setDataApiHome);
        }

    },[]);

    return <div className="homeContent">
        <Container>
            <TitleLarger padding={"55px 0"}>Saigon ơi !</TitleLarger>
            <Banner></Banner>
        </Container>
        <TitleSectionMain 
            title="Bánh Bakes "
            description="Bánh cho ngày thường, ngày đặc biệt, và ngày đặc biệt rảnh rỗi."
            margin={"50px 0"}
        >
        </TitleSectionMain>
        <Container>
            {
                dataApiHome && dataApiHome.highlight
                ? dataApiHome.highlight.map((value, index)=>{
                    return <ItemProduction
                        key={index}
                        reverse={value.section == 1 ? true : false}
                        title_en={value.title_en}
                        title_vi={value.title_vi}
                        description_en={value.description_en}
                        description_vi={value.description_vi}
                    ></ItemProduction>
                })
                :<></>
            }
          
        </Container>
       
        <Container>
            <Slogan>
                {`“Bánh ngọt khơi gợi mọi giác quan,`}
                <br />
                {`như tình yêu vậy.”`}
            </Slogan>
        </Container>

        <TitleSectionMain 
            title="Ăn bằng mắt "
            description="Theo dõi @bakes.saigon để khám phá các món ngon, công thức, sự kiện, ưu đãi và những cuộc giao du của Bakes."
            margin={"50px 0px"}
        >
        </TitleSectionMain>
        <Container className="listItemsImgScale">
            {
                dataApiHome && dataApiHome.feed
                ? dataApiHome.feed.map((value, index)=>{
                    return <ItemImgScale key={index} href={value.link} img={value.image}></ItemImgScale>
                })
                :<>No data</>
            }
        </Container>
        
    </div>
}