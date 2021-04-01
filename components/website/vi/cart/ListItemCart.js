import  ItemProductAddCart from "components/website/item/ItemProductAddCart";
import ItemPageCart from "components/website/item/ItemPageCart";
import {useState, useContext, useEffect} from "react";
import { FunctionContextProvider } from "components/website/contexts/FunctionContext";

export default function ListItemCart ({}) {

    const [dataCart, setDataCart] = useState();
    const valueFunctionContextProvider = useContext(FunctionContextProvider);

    const refreshDataCart = () => {
        if(localStorage){
            let dataGetLS = valueFunctionContextProvider.getAllItemInCart();
            setDataCart(dataGetLS)
        }
    }

    useEffect(() => {

        refreshDataCart();
       
    }, []);


    useEffect(()=>{

        refreshDataCart();
      
    },[valueFunctionContextProvider.status]);


    return <div className="listItemAddCart">
        <h3>Danh sách sản phẩm</h3>
        <div className="list">
            {
                 dataCart && dataCart[0] !== null && dataCart.length > 0 
                ?  dataCart.map((value, index) => {
                    return <ItemPageCart
                        key={index}
                        data={value}
                        img={value.img}
                        key={index}
                        name={value.nameItem}
                        price={value.price}
                        amount={value.amount}
                    >
                    </ItemPageCart>
                })
                :<p>Chưa có sản phẩm nào</p>
            }
        </div>
        <style jsx>{`
            .list{
                padding-bottom: 50px;
            }
            .listItemAddCart{
                >h3{
                    font-weight: bold;
                    font-size: 20px;
                    padding-bottom: 20px;
                }
            }
            @media only screen and (max-width: 599px){
                .list{
                    padding-bottom: 0;

                }
            }
        `}</style>
    </div>
} 