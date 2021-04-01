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
import {useState, useEffect} from "react";
import { useNextResponsive } from "plugins/next-reponsive";
import FilterProductsMobile from "components/website/filter-products/FilterProductsMobile";


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

export default function ShopContent({ }) {

    const { device } = useNextResponsive();

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

    return <div className="shopContent">
        <TitleSectionMain
            title="Yêu Thích "
            description="Bánh bán chạy, bánh mới, bánh theo mùa, và các món sở trường của đầu bếp Bakes. "
            margin={"0"}
        >
        </TitleSectionMain>

        <Container className="contentListItemsProduct">
            
            {
                device === "desktop"
                ? <div className="contentSlider">
                    <Slider {...settings}>
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
                                    margin={"0 10px"}>
                                </ItemProductCommon>
                            })
                        }
                    </Slider>
                </div>
                : <div className="contentListItems">
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
                                    margin={"0 10px"}>
                                </ItemProductCommon>
                            })
                        }
                </div>
            }
        </Container>

        <TitleSectionMain
            title="Sản Phẩm"
            description="Bánh làm tay từ phòng bánh của chúng tôi tại Quận 3, TP HCM. Hoàn toàn từ nguyên liệu tự nhiên. "
            margin={"0"}
        >
        </TitleSectionMain>

        <Container className="containerFilter">

            <div className="contentTagFilter">
                
                <Affix offsetTop={top}>
                    <h3 className="titleFilters">{"Bạn cần tìm gì?"}</h3>
                    <FilterProducts> </FilterProducts>
                </Affix>
               
            </div>

            <FilterProductsMobile></FilterProductsMobile>
           
            <div className="">
                <FilterProductStatus></FilterProductStatus>
                <div className="contentListProducts">
                    
                    {
                        listItemsFetch.map((value, index) => {
                            return <ItemProductCommon
                                key = {index}
                                nameItem={value.nameItem}
                                price={value.price}
                                oldPrice={value.oldPrice}
                                imgItem={value.img}
                                imgItemHover={value.imgHover}
                                padding={"10px 0px"}
                                margin={"0 10px"}>
                            </ItemProductCommon>
                        })
                    }
                </div>
            </div>
            
        </Container>
        <style jsx>{`
            .titleFilters{
                padding: 10px 0;
                margin-bottom: 10px;
                font-size: 2.5vw;
                font-family: ${FONTS.GaramondPremrPro};
            }
            .contentTagFilter{
                position: relative;
            }

        `}</style>
    </div>
}