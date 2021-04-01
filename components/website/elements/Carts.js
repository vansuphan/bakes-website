import { Popover, Button } from 'antd';
import asset from "plugins/assets/asset";
import ItemCart from "components/website/item/ItemCart";
import ButtonCommon from "components/website/buttons/ButtonCommon";

import { FunctionContextProvider } from "components/website/contexts/FunctionContext";
import { LanguageContextProvider } from "components/website/contexts/LanguageContext";
import { useContext, useState, useEffect, useRef } from "react";

export default function Card({
    // amount = 0,
    // dataCart
}) {

    const [dataCart, setDataCart] = useState();

    const valueFunctionContextProvider = useContext(FunctionContextProvider);

    const { dataLanguage, languageCurrent } = useContext(LanguageContextProvider);

    const refreshDataCart = () => {
        if (localStorage) {
            let dataGetLS = valueFunctionContextProvider.getAllItemInCart();
            setDataCart(dataGetLS)
        }
    }

    useEffect(() => {

        refreshDataCart();

    }, []);


    useEffect(() => {

        refreshDataCart();

    }, [valueFunctionContextProvider.status]);


    // const text = <span>Title</span>;

    const content = (
        <div className="containerCart">
            <div className="contentCart">
                {
                    dataCart && dataCart[0] !== null && dataCart.length > 0
                        ? dataCart.map((value, index) => {
                            return <ItemCart
                                key={index}
                                data={value}
                                img={value.img}
                                key={index}
                                name={value.nameItem}
                                price={value.price}
                                amount={value.amount}
                            >
                            </ItemCart>
                        })
                        : <p>Chưa có sản phẩm nào</p>
                }

            </div>
            <div className="footerCart">
                <span>
                    {
                        dataLanguage && dataLanguage.data
                            ? dataLanguage.data.CART.totalText
                            : "Total"
                    }
                </span>
                <span>
                    {
                        dataCart && dataCart[0] !== null && dataCart.length > 0
                            ? dataCart.map(value => {
                                return parseInt(value.price) * parseInt(value.amount)
                            }).reduce((value, currentValue) => value + currentValue) + " ₫"
                            : <></>
                    }

                </span>
                <p className="btnGoToPageCart">
                    <ButtonCommon
                        padding={"6px 10px"}
                        borderRadius="10px"
                        width="100%"
                        text={
                            dataLanguage && dataLanguage.data
                                ? dataLanguage.data.CART.nameButton
                                : "Go to cart"
                        }
                        colorRevert={true}>
                    </ButtonCommon>
                </p>
            </div>
            <style jsx>{`
                .containerCart{
                    width: 300px;
                }
                .contentCart{
                    max-height: 300px;
                    padding-top: 20px;
                    overflow-y: auto;
                    padding-bottom: 0px;
                    
                }
                
                .footerCart{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    font-size: 20px;
                    padding-top: 10px;
                    span{
                        padding-top: 10px;
                        padding-bottom: 10px;
                    }
                }
                .btnGoToPageCart{
                    font-size: 16px;
                    justify-self: center;
                    width: 100%;
                }
            `}</style>
        </div>

    );
    //hover
    return <div className="CardProducts">

        <Popover placement="bottomRight" title={null} content={content} trigger="click ">
            <p>
                {
                    dataLanguage && dataLanguage.data
                        ? dataLanguage.data.CART.name
                        : "Cart"
                }
                <span>({dataCart && dataCart[0] !== null && dataCart.length > 0 ? dataCart.length : ""})</span>
            </p>
        </Popover>
    </div>
}