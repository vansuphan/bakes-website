import asset from "plugins/assets/asset";
import {FONTS, COLOR} from "components/website/constants/Constants";
import { InputNumber, Tooltip } from "antd";
import {useState, useEffect, useContext} from "react";
import {FunctionContextProvider} from "components/website/contexts/FunctionContext";
import CountInput from "components/website/input/CountInput";

export default function ItemProductAddCart({
    name = "San pham 2355 test",
    image = asset("/images/bakes-combo-03.jpg"),
    description = "Thong tin san pham",
    amount = 1,
    price = 0,
    data,
}) {

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
        if (_amount) {
            updateItem(data)
        }
    }, [_amount]);

    const deleteItems = async (data) => {
        if (data && data.id) {
            await deleteOneItemInListCartLocalStorage(data.id);
            _setStatus(!_status);
        } else {
            console.log("Khong co data de xoa !");
        }
    }

    return <div className="itemProductAddCart">

        <img className="imgItemProductAddCart" src={data.img || image} />

        <div className="infoProduct">
            <div className="content">
                <h3>{name}</h3>
                <p className="description">{description}</p>
                <Tooltip placement="top" title={"Xoá"}>
                    <span className="deleteAll" onClick={() => deleteItems(data)} >Xoá</span>
                </Tooltip>
            </div>
            <p className="price" >{data.price || ""}</p>
            <div className="amount">
                {/* <InputNumber min={1} onChange={countAmount} max={999} value={_amount}></InputNumber> */}
                <CountInput amount={_amount} handleChange={countAmount}></CountInput>
            </div>
        </div>

        <style jsx>{`
            .itemProductAddCart{
                display: grid;
                grid-template-columns: 120px 1fr;
                column-gap: 30px;
                margin-bottom: 40px;
                position: relative;
            }
            img{
                object-fit: cover;
                height: 150px;
                width: 100%;
            }
            .infoProduct{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            .description{
                opacity: 0.5;
            }
            h3{
                font-size: 20px;
                font-family: ${FONTS.AcuminProRegular};
            }
            .deleteAll{
                color: ${COLOR.TEXT_COLOR_STATUS_PRO};
                cursor: pointer;
              
            }
            .price{
                font-size: 20px;
                justify-content: center;
                align-items: center;
                display: flex;
            }
            .amount{
                justify-content: center;
                align-items: center;
                display: flex;
            }

            .imgItemProductAddCart{
                .ant-input-number-input{
                    padding: 0 30px;
                    text-align: center;
                }
            }

            .content{
                width: 50%;
            }


            @media only screen and (max-width : 768px){
                .content{
                    width: 65%;
                }
                .price{
                    order: 3;
                    text-align: left;
                    justify-content: flex-start;
                    align-items: flex-start;
                }
                .amount{
                    width: 30%;
                }
                .infoProduct{
                    grid-template-columns: 100px 1fr;
                    align-items: flex-start;
                    justify-content: space-between;
                    
                }
                .itemProductAddCart{
                    column-gap: 15px;
                }
                .deleteAll{
                    position: absolute;
                    right: 0;
                }
            }
            @media only screen and (max-width: 599px){
                
            }
        `}</style>
    </div>
}