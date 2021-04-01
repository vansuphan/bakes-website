// import CONFIG from "web.config";
import MasterPageBasic from "components/website/master/MasterPageBasic";
import DashkitButton from "components/dashkit/Buttons";
import { BS } from "components/diginext/elements/Splitters";
import Header from "components/website/elements/Header";
import InfoProduct from "components/website/info-product/InfoProduct";
import Footer from "components/website/elements/Footer";
import asset from "plugins/assets/asset";
import Container from "components/website/elements/Container";
import ItemProductCommon from "components/website/item/ItemProductCommon";
import Line from "components/website/elements/Line";
import PopupShowCart from "components/website/popup/PopupShowCart";
import ItemProductAddCart from "components/website/item/ItemProductAddCart";
import { PopupAddCartProvider } from "components/website/contexts/PopupContext";
import { useState, useEffect, useContext } from "react"; 

export default function Home(props) {

    // const router = useRouter();
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
    }
    ]

  return (
    <MasterPageBasic hidePrevButton header="Diginext - Home Page">
      <Header></Header>
        <main id="pProduct" className="pProduct">

        <PopupShowCart title={"Đã thêm vào giỏ hàng"}>
            {/* <ItemProductAddCart></ItemProductAddCart> */}
        </PopupShowCart>

          <Container className="containerInfoProduct">
            <InfoProduct statusName="Đặt trước"></InfoProduct>
          </Container>

          <Container>
              <Line></Line>
              <h3 className="titleListProducts">Gợi Ý Cho Bạn</h3>
          </Container>
          <Container >
            <div className="contentListProducts">
                {
                    listItemsFetch.map((value, index) => {
                        return <ItemProductCommon
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

        <Container >
            <Line paddingTop={"30px"}></Line>
            <h3 className="titleListProducts">Bạn Đã Xem</h3>
          </Container>
          <Container className="endSection">
            <div className="contentListProducts">
                {
                    listItemsFetch.map((value, index) => {
                        return <ItemProductCommon
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

        </main>
        
      <Footer></Footer>
    </MasterPageBasic>
  );
}
