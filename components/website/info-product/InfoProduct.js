import Slider from "react-slick";
import asset from "plugins/assets/asset";
import { COLOR, FONTS } from "components/website/constants/Constants";
import { useForm, Controller } from "react-hook-form";
import { PopupAddCartProvider } from "components/website/contexts/PopupContext";
import { useState, useEffect, useContext, useRef } from "react"; 
import CountNumberInput from "@/components/website/input/CountNumberInput";
import {FunctionContextProvider} from "components/website/contexts/FunctionContext";

const infoFetch = {
    img: asset("/images/bakes-product-01.jpg"),
    imgHover: asset("/images/bakes-combo-01.jpg"),
    nameItem: "Ăn sáng ngọt",
    price: 50000,
    oldPrice: 60000,
    link: "",
    id: 123241400,
}

const limitSlide = 5;

export default function InfoProduct({
    className,
    statusName,
    colorStatus= COLOR.TEXT_COLOR_STATUS_PRO,
    dataInfo = infoFetch
}) {

    const { 
        showPopup,
        setDataPopup
    } = useContext(PopupAddCartProvider);

    const { 
        getOneItemInCart,
        checkDataLocalStorage,
        addOneItemInListCartLocalStorage
    } = useContext(FunctionContextProvider);

    const [amount, setAmount] = useState(dataInfo.amount || 1);

    const sliderRef1 = useRef();
    const sliderRef2 = useRef();

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const { register, handleSubmit, errors, setError, control, reset, getValues, setValue } = useForm({ mode: "onChange" });

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    const addItemToCart = async () => {
        
        let _dataShow = {
            ...dataInfo,
            amount: amount,
        } 

        await checkDataLocalStorage();
        await addOneItemInListCartLocalStorage(_dataShow);
        
        let dataAddPopup = getOneItemInCart(_dataShow);
        setDataPopup(dataAddPopup);
        showPopup();
    }

    const getValueInput = (value) => {
        setAmount(value);
    }

    const onSubmit = async (data) => {

        console.log("data submit : ", data)

    };

    const TasteInput = (width="50") => {
        return <div className="itemInputSelect">
            <label className={'label'}>Chọn vị</label>
            <select id="taste" name="taste"
                className={errors.taste ? "error input" : "input"}
                ref={register({ required: "This input is required." })} >
                <option value="Ngọt">Ngọt</option>
                <option value="Mặn">Mặn</option>
            </select>
            <style jsx>{`
                .itemInputSelect{
                    width: 100%;
                    label{
                        font-weight: bold;
                    }
                    select{
                        width: 100%;
                        min-width: 100px;
                        border: 1px solid ${COLOR.BG_GRAY_LIGHT};
                        border-radius: 25px;
                        background-color: ${COLOR.WHITE};
                        padding: 15px 20px;
                        outline: none;
                        margin: 15px 0;
                        margin-top: 5px;
                        position: relative;
                        
                        &::after{
                            content: "";
                            position: absolute;
                            width: 0;
                            height: 0;
                            border-left: 50px solid transparent;
                            border-right: 50px solid transparent;
                            border-top: 100px solid red;
                            z-index: 2;
                        }
                    }
                }
            `}</style>
        </div>
    }

    const slickSettings = {
        className: "infoProductCarousel mini",
        vertical: true,
        // infinite: true,
        centerMode: true,
        verticalSwiping: true,
        // centerPadding: "50px",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: nav2,
        ref: (slider) => (sliderRef1.current = slider),
        // onReInit: ()=>{reInitSlide1()},
        responsive: [
        ],
    };

    const slickSettings2 = {
        className: "infoProductCarousel main",
        fade: true,
        speed: 500,
        // infinite: true,
        // centerMode: true,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: nav1,
        ref: (slider) => (sliderRef2.current = slider),
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                }
            },
        ],
    };


    return <div className={className ? className + " infoProduct" : "infoProduct"}>
        <div className="contentImgInfoProduct">

            <div className={"sliderRef1"}>
                <Slider
                    {...slickSettings}
                    ref={sliderRef1}
                >
                    <div className="itemInfoProduct">
                        <img src={asset("/images/connect_5_image.jpg")} />
                    </div>
                    <div className="itemInfoProduct">
                        <img src={asset("/images/connect_6_image.jpg")} />
                    </div>
                    <div className="itemInfoProduct">
                        <img src={asset("/images/connect_4_image.jpg")} />
                    </div>
                </Slider>
            </div>

            <div className={"sliderRef2"}>
                <Slider
                    ref={sliderRef2}
                    {...slickSettings2}
                >
                    <div className="itemInfoProduct">
                        <img src={asset("/images/connect_5_image.jpg")} />
                    </div>
                    <div className="itemInfoProduct">
                        <img src={asset("/images/connect_6_image.jpg")} />
                    </div>
                    <div className="itemInfoProduct">
                        <img src={asset("/images/connect_4_image.jpg")} />
                    </div>
                </Slider>
                {
                    statusName
                    ?  <div className="statusProduct"><span>{statusName}</span></div>
                    : <></>
                }
            </div>

            <div className={`contentInfoProduct`}>
                <h3 className="nameProduct">Product Name</h3>
                <p className="nameMin">Ø18cm    Feed 10-12 people</p>
                <p className="price">500,000 ₫</p>
                <p>{`Vanilla cake layered with mixed berry jam, and ginger & lime whipped cream frosting. Comes with a happy birthday banner, birthday card, and a candle.`}</p>
                <div className="groupInput">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="item">
                            <TasteInput></TasteInput>
                        </div> 
                        <div className="item">
                            <TasteInput></TasteInput>
                        </div>  
                        <div className="item fullWidth">
                            <div className="hardWidth">
                                <CountNumberInput defaultValue={amount} getValue={getValueInput}></CountNumberInput>
                            </div>
                            <div className="addToCardInfo">
                                <button onClick={addItemToCart}>Thêm vào giỏ</button>
                            </div>
                        </div>
                        <div className="listIcon">
                            <div>
                                <img src={asset("/images/fridge_1.png")}/>
                                <p className="name">Store Cold</p>
                            </div>
                            <div>
                                <img src={asset("/images/fridge_1.png")}/>
                                <p className="name">Store Cold</p>
                            </div>
                            <div>
                                <img src={asset("/images/fridge_1.png")}/>
                                <p className="name">Store Cold</p>
                            </div>
                            <div>
                                <img src={asset("/images/fridge_1.png")}/>
                                <p className="name">Store Cold</p>
                            </div>
                            <div>
                                <img src={asset("/images/fridge_1.png")}/>
                                <p className="name">Store Cold</p>
                            </div>
                        </div>
                    </form>
                    
                </div>
                
            </div>
        </div>

        <style jsx>{`

            .groupInput{
                width: 100%;
                form{
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    >div.item{
                        width: 47%;
                        margin-right: 10px;
                    }
                    >div.fullWidth.item{
                        width: 100%;
                        display: flex;
                        margin-right: 0;
                    }
                    .hardWidth{
                        width: 47%;
                        margin-right: 10px;
                    }
                    .addToCardInfo{
                        width: 47%;
                        margin-right: 10px;
                        button{
                            width: 100%;
                            background-color: ${COLOR.BLACK};
                            transition: 0.3s;
                            border-radius: 25px;
                            color: ${COLOR.WHITE};
                            padding: 15px 35px;
                            border: solid 1px ${COLOR.BLACK};
                            outline: none;
                            cursor: pointer;
                            text-transform: uppercase;
                            &:hover{
                                background-color: ${COLOR.WHITE};
                                color: ${COLOR.BLACK};
                            }
                        }
                    }
                }    
            }

            .contentImgInfoProduct{
                display: flex;
                padding: 50px 0;
                height: 650px;
            }

            .sliderRef1{
                width:10%;
                max-height: 600px;
                padding-bottom: 10px;
                overflow: hidden;
            }

            .itemInfoProduct{
                width: 100%;

                img{
                    display: block;
                    width: 100%;
                }
            }

            .contentInfoProduct{
                width: 40%;
                .nameProduct{
                    font-size: 4vw;
                    font-family: ${FONTS.GaramondPremrPro};
                    /* font-weight: bold; */
                }
                p{
                    margin: 5px 0;
                }
                .nameMin{
                    margin-top: -10px;
                }
                .price{
                    padding-top: 30px;
                    padding-bottom: 30px;
                    font-family: ${FONTS.AcuminProRegular};
                    font-weight: bold;
                    font-size: 2vw;
                }
            }

            .sliderRef2{
                padding: 0 30px;
                width: 50%;
                position: relative;
                .statusProduct{
                    position: absolute;
                    left: 50px;
                    top: 25px;
                    span{
                        padding: 8px 15px;
                        background-color: ${COLOR.WHITE};
                        border-radius: 5px;
                    }
                    color: ${colorStatus};
                }
            }

            @media only screen and (max-width: 768px){
                .sliderRef2{
                    width: 100% ;
                    padding: 0 ;
                    .statusProduct{
                        left: 20px ;
                    }
                }
                .groupInput{
                    form{
                        height: auto;
                        .addToCardInfo{
                            button{
                                padding: 15px 0px;
                            }
                        }
                    }
                }
                .contentImgInfoProduct{
                    width: 100%;
                    height: auto ;
                    display: block ;
                    padding-top: 0 ;
                    padding-bottom: 20px;
                }
                .container.containerInfoProduct{

                }
                .contentInfoProduct{
                    padding: 0 20px ;
                    width: 100% ;
                    .nameProduct{
                        font-size: 12vw;
                    }
                    .nameMin{
                        font-size: 4vw;
                        margin-top: 0;
                    }
                    p{
                        margin: 30px 0;
                        margin-top: 0;
                    }
                    .price{
                        font-size: 5vw;
                        padding: 10px 0;
                    }
                }
                .groupInput{
                    height: auto;
                }
                .groupInput form>div.item{
                    width: 100% ;
                }
                .item.fullWidth{
                    margin-top: 10px;
                    margin-bottom: 5px;
                }
                .listIcon{
                    .name{
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                }
            }

        `}</style>
    </div>
}
