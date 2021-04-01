import ButtonCommon from "components/website/buttons/ButtonCommon";
import { COLOR, FONTS } from "components/website/constants/Constants";
import {useState, useEffect, useContext} from "react";
import {PopupAddCartProvider} from "components/website/contexts/PopupContext";
import { useRouter } from "next/router";
import ItemProductAddCart from "components/website/item/ItemProductAddCart";

export default function PopupShowCart ({
    title,
    children,
    data,
    handleClose = () =>  null,
}){

    const { 
        showPopupAddCart,
        hidePopup,
        showPopup,
        dataPopup,
        setDataPopup } = useContext(PopupAddCartProvider);
    const router = useRouter()

    const _handleClose = () => {
        hidePopup();
        setDataPopup();
        if(handleClose){
            handleClose();
        }
    }

    const goToShop = () => {
        _handleClose();
        router.push("/shop");
    }

    const goToCart = () => {
        _handleClose();
        router.push("/cart");
    }


    useEffect(()=>{
        console.log("valueContextPopup", showPopupAddCart)
    }, [])

    const listBtn = () => {
        return <>
            <ButtonCommon handleOutSite={goToShop} width="47%" colorRevert={true} text="Tiếp tục mua hàng"></ButtonCommon>
            <ButtonCommon handleOutSite={goToCart} width="47%" text="Đến giỏ hàng"></ButtonCommon>
        </>
    }
    
    return <div className={showPopupAddCart == true ? "popupShowCart" : "popupShowCart hide"}>
        <div className="containerClosePopup" onClick={_handleClose}>
            <span aria-hidden="true"></span>
        </div>

        <div className="contentPopup">
            <span className="iconClosePopup" onClick={_handleClose}>×</span>
            <h3 className="titlePopup">{title}</h3>
            <div className="listProductInCart">
             {/* {children} */}
             {
                 dataPopup
                 ?   <ItemProductAddCart amount={dataPopup.amount} image={dataPopup.img} name={dataPopup.nameItem}></ItemProductAddCart>
                 : <></>
             }
               
            </div>
            <div className="listBtn">
                {
                    listBtn()
                }
            </div>
        </div>
        <style jsx>{`
            .popupShowCart{
                position: fixed;
                width: 100vw;
                height: 100vh;
                z-index: 9999;
                background-color: rgba(0,0,0,0.5);
                top: 0;
                left: 0;
                opacity: 1;
                transform:scale(1);
                transition: opacity 0.2s;
            }
            .popupShowCart.hide{    
                opacity: 0;
                transform: scale(0);
                background-color: rgba(0,0,0,0);
                .containerClosePopup{
                    background-color: transparent;
                }
                .contentPopup{
                    top: 0%;
                }
            }
            .containerClosePopup{
                position: absolute;
                width: 100%;
                height: 100%;
            }
            .contentPopup{
                position: fixed;
                width: 80vw;
                max-width: 700px;
                height: auto;
                padding: 30px 50px;
                background-color: ${COLOR.BG_GRAY_POPUP};
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                border-radius: 10px;
                transition-delay: 0.2s;
                transition: top 0.5s ease-in-out;
            }
            h3{
                font-family: ${FONTS.GaramondPremrPro};
                font-size: 3vw;
                text-align: center;
            }
            .listBtn{
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
            .listProductInCart{
                padding: 40px 0;
            }
            .iconClosePopup{
                top: 20px;
                right: 30px;
                position: absolute;
                cursor: pointer;
                transform: scale(1.3);
                &:hover{
                    color: red;
                }
            }
        `}</style>
    </div>
}