import asset from "plugins/assets/asset";
import CountInput from "@/components/website/input/CountInput";
import FONTS from "components/website/constants/Font";
import {InputNumber} from "antd"
import {useState,useEffect, useContext} from "react";
import COLOR from "components/website/constants/Color";
import {FunctionContextProvider} from "components/website/contexts/FunctionContext";
// import Image from "next/image"
export default function ItemProductAddCart({
    name ="San pham 2355 test",
    image =asset("/images/bakes-combo-03.jpg"),
    description ="Thong tin san pham",
    amount=1,
    price=0,
    data,
}){

    const [_amount, _setAmount] = useState(amount);
    const [_status, _setStatus] = useState(false);

    const {
        deleteOneItemInListCartLocalStorage,
        addOneItemInListCartLocalStorage,
    } = useContext(FunctionContextProvider);

    const countAmount = (value) => {
        console.log("countAmount" , value)
        _setAmount(value);
    }

    const updateItem = async (data) => {

        let newData = {
            ...data,
            amount: _amount
        }

        if (data && data.id) {

            addOneItemInListCartLocalStorage(newData, true);
            _setStatus(!_status);

        } else {
            console.log("Khong co data de cap nhat!")
        }
    }

    useEffect(() => {
        _setAmount(amount);
    }, [amount])

    useEffect(() => {
        if(_amount){
            updateItem(data)
        }
    }, [_amount]);
    
    return <div className="itemProductAddCart">

        <img className="imgItemProductAddCart" src={image}/>

        <div className="infoProduct">
            <div className="content">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="amount">
            <CountInput amount={_amount} handleChange={countAmount}></CountInput>
            </div>
        </div>

        <style jsx>{`
            .itemProductAddCart{
                display: grid;
                grid-template-columns: 0.4fr 1fr;
                column-gap: 30px;
            }
            img{
                object-fit: cover;
                height: 220px;
                width: 100%;
            }
            .infoProduct{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            h3{
                font-size: 20px;
                font-family: ${FONTS.AcuminProRegular};
                font-weight: bold;
            }
            .content{
                
            }
        `}</style>
    </div>
}