import Container from "components/website/elements/Container";
import TitleSectionMain from "components/website/title-section/TitleSectionMain";
import ItemProductCommon from "components/website/item/ItemProductCommon";
import ItemImgScale from "components/website/item/ItemImgScale";
import asset from "plugins/assets/asset";
import { COLOR, FONTS } from "components/website/constants/Constants";
import Slider from "react-slick";
import NextArrow from "components/website/elements/NextArrow";
import PrevArrow from "components/website/elements/PrevArrow";
import FilterProducts from "components/website/filter-products/FilterProducts";
import FilterProductStatus from "components/website/filter-products/FilterProductStatus";
import { Affix } from 'antd';
import { useState, useEffect } from "react";
import BannerBottom from "components/website/banner/BannerBottom";

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
    },
    {
        img: asset("/images/connect_4_image.jpg"),
        imgHover: asset("/images/bakes-combo-02.jpg"),
        nameItem: "Dừa lang thang",
        price: "100.000",
        oldPrice: "120.000",
        link: "",
    },
    {
        img: asset("/images/connect_3_image.jpg"),
        imgHover: asset("/images/bakes-combo-03.jpg"),
        nameItem: "Gato chanh sâm",
        price: "66.000",
        oldPrice: "80.000",
        link: "",
    },
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
    },
    {
        img: asset("/images/connect_4_image.jpg"),
        imgHover: asset("/images/bakes-combo-02.jpg"),
        nameItem: "Dừa lang thang",
        price: "100.000",
        oldPrice: "120.000",
        link: "",
    },
]

export default function CateringContent({ className }) {

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMod: true,
        nextArrow: <NextArrow className="NextArrowPro" />,
        prevArrow: <PrevArrow className="PrevArrowPro" />
    };

    const [top, setTop] = useState(100);

    return <div className="cateringContent">
        <TitleSectionMain
            title="Bánh Tiệc "
            description="Tuỳ ý chọn các món bánh ngọt, mặn, thức uống, và các trang trí tiệc khác. Khay phục vụ có sẵn trong hộp. Mở là ăn. "
            margin={"0"}
        >
        </TitleSectionMain>
        <Container >
            <div className="contentListProducts">
                {
                    listItemsFetch.map((value, index) => {
                        return <ItemProductCommon
                            key={index}
                            nameItem={value.nameItem}
                            price={value.price}
                            oldPrice={value.oldPrice}
                            imgItem={value.img}
                            imgItemHover={value.imgHover}
                            statusName="Đặt trước"
                            nameButton={"Thêm vào giỏ"}
                            padding={"10px 0px"}
                            margin={"0 10px"}>
                        </ItemProductCommon>
                    })
                }
            </div>
        </Container>

        <TitleSectionMain
            title="Đơn Đặc Biệt "
            description="Bạn cần cái gì đó cụ thể hơn cho bữa tiệc sắp tới? Chỉ cần chút thông tin, chúng tôi sẽ lo hết phần còn lại."
            margin={"0"}
        >
        </TitleSectionMain>

        <BannerBottom 
            img={asset("/images/custom_banner.jpg")}
            description={(<>
                    <p>{`Special day coming up? Plan a party with us? `}</p>
                    <p>{`Bạn đang tổ chức một bữa tiệc? Để chúng tôi giúp bạn chuẩn bị!`}</p>
                </>
            )}>
        </BannerBottom>

        <style jsx>{`
        
        `}</style>
    </div>
}