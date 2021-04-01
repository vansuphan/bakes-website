import asset from "plugins/assets/asset";
import {InputNumber, Tooltip} from "antd";
import {useState,useEffect, useContext} from "react";
import COLOR from "components/website/constants/Color";
import {FunctionContextProvider} from "components/website/contexts/FunctionContext";
import CountInput from "components/website/input/CountInput";

export default function ItemCart ({
    img="",
    name="San pham khong co trong data",
    price= 100000,
    amount= 1,
    data,
    key,
}){

    const [_amount, _setAmount] = useState(amount);
    const [_status, _setStatus] = useState(false);

    const { 
        deleteOneItemInListCartLocalStorage,
        addOneItemInListCartLocalStorage,
    } = useContext(FunctionContextProvider);
    
    const countAmount = (value) => {
        _setAmount(value);
    }

    const updateItem = async (data) => {

        let newData = {
            ...data,
            amount: _amount
        }

        if(data && data.id){

           addOneItemInListCartLocalStorage(newData, true);
           _setStatus(!_status);

        }else{
            console.log("Khong co data de cap nhat!")
        }
    }

    useEffect(()=>{
        _setAmount(amount);
    },[amount])

    useEffect(() => {
        if(_amount){
            updateItem(data)
        }
    }, [_amount]);


    const deleteItems = async (data) => {
        if(data && data.id){
            await deleteOneItemInListCartLocalStorage(data.id);
            _setStatus(!_status);
        }else{
            console.log("Khong co data de xoa !");
        }
    }


    return <div key={key} className={"itemCart " + _status } >

        <img src={img}/>

        <div className="infoItems">

            <Tooltip placement="top" title={"Xoá"}>
                <span className="deleteAll" onClick={()=>deleteItems(data)} > </span>
            </Tooltip>

            <h4 className="nameItemCart">{name}</h4>

            <p>{parseInt(price)}</p>

            {/* <InputNumber min={1} max={999} onChange={countAmount} value={_amount}></InputNumber> */}
            <CountInput amount={_amount} handleChange={countAmount}></CountInput>
        </div>

        <style jsx>{`
            .itemCart{
                display: grid;
                grid-template-columns: 0.7fr 1fr;
                padding: 10px 0;
                margin: 5px 0;
            }
            .infoItems{
                position: relative;
            }
            .deleteAll{
                position: absolute;
                width: 20px;
                height: 20px;
                right: 5px;
                top: -5px;
                cursor: pointer;
                &::before, &::after{
                    content: "";
                    position: absolute;
                    width: 60%;
                    height: 3px;
                    border-radius: 3px;
                    background-color: ${COLOR.BLACK};
                    transition: 0.3s;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(-45deg);
                }
                &::after{
                    transform: translate(-50%, -50%) rotate(45deg);
                }
                &:hover{
                    &::before, &::after{
                        background-color: red;
                    }
                }

            }
            img{
                height: 130px;
                width: 90%;
                object-fit: cover;
            }
        `}</style>
    </div>
}