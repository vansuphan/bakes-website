import { DatePicker, TimePicker, Select, Space } from 'antd';
const { RangePicker } = DatePicker;
import { COLOR, FONTS } from "components/website/constants/Constants";
import moment from 'moment';
import ButtonCommon from "components/website/buttons/ButtonCommon";
import { useForm, Controller } from "react-hook-form";
import {FunctionContextProvider} from "components/website/contexts/FunctionContext";
import {useState, useEffect, useContext} from "react";
export default function PaymentCart({ }) {

    const { getAllItemInCart, countAllPrice, status } = useContext(FunctionContextProvider)

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().startOf('day');
    }
    
    const disabledTime = (current) => {
        console.log("TIME : ", current);
        return current && current < moment().endOf('time');
        
    }

    const [data, setData] = useState();
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        if(getAllItemInCart){
            setData(getAllItemInCart());
            
        }
    }, []);

    useEffect(()=>{
        if(getAllItemInCart){
            setData(getAllItemInCart());
        }
    },[status]);

    useEffect(()=>{
        setTotalPrice(countAllPrice(data))
    },[data]);

    function disabledDateTime() {
        return {
          disabledHours: () => range(0, 24).splice(0, 10),
          disabledMinutes: () => range(30, 60)
        };
    }
    
    function range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
          result.push(i);
        }
        return result;
    }

    const { register, reset, handleSubmit, errors, setValue, control, getValues, trigger } = useForm();

    const onSubmit = (data) =>{
        console.log("data", data);
    } 

    return <div className="paymentCart">
        <h3>Thanh toán</h3>
        <from onSubmit={handleSubmit(onSubmit)}>
            <div className="infoTotal">
                <h3 className="total">
                    <span>Tổng cộng:</span>
                    <span>{totalPrice +" ₫"}</span>
                </h3>
                <hr />
                <h3 className="totalAll">
                    <span>Tổng đơn:</span>
                    <span>{totalPrice +" ₫"}</span>
                </h3>
                <div className="btn">
                    <ButtonCommon 
                    text="Thanh toán"
                    width={"100%"} 
                    borderRadius={"5px"} 
                    colorRevert={true} 
                    handleOutSite={handleSubmit(onSubmit)}>
                    </ButtonCommon>
                </div>
            </div>
            <div className="time">
                <div className={errors && errors.daySelect ? "itemInput error" : "itemInput"}>
                    <Controller
                        control={control}
                        placeholder="Chọn ngày giao bánh"
                        defaultValue=""
                        name="daySelect"
                        rules={
                            { required: "Vui lòng chọn giờ giao bánh." }
                        }
                        render={({ onChange, value }) => {
                            return <DatePicker
                                name="daySelect"
                                format={'DD/MM/YYYY'}
                                disabledDate={disabledDate}
                                placeholder="Chọn ngày giao bánh"
                                onChange={(event) => {
                                    onChange(event);
                                }}
                                dateRender={current => {
                                    const style = {};
                                    // if (current.date() === 1) {
                                    // style.border = '1px solid #1890ff';
                                    // style.borderRadius = '50%';
                                    // }
                                    return (
                                        <div className="ant-picker-cell-inner" style={style}>
                                            {current.date()}
                                        </div>
                                    );
                                }} />
                        }
                        }
                    >
                    </Controller>
                    {errors.daySelect ? <p className="error">{errors.daySelect.message}</p>  : ""}
                </div>
                <div className={errors && errors.daySelect ? "itemInput error" : "itemInput"}>
                    <Controller
                        control={control}
                        placeholder="Chọn giờ giao bánh"
                        name="hourSelect"
                        defaultValue= {[moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')]}
                        rules={
                            { required: "Vui lòng chọn giờ giao bánh." }
                        }
                        render={({ onChange, value }) => {
                            return <DatePicker 
                                // disabledTime={disabledTime} 
                                placeholder="Chọn giờ giao bánh"
                                disabledTime={disabledDateTime}
                                showTime
                                picker={"time"} 
                                format={'HH:mm'}
                                onChange={onChange} 
                                dateRender={current => {
                                    const style = {};
                                    // if (current.date() === 1) {
                                    // style.border = '1px solid #1890ff';
                                    // style.borderRadius = '50%';
                                    // }
                                    return (
                                        <div className="ant-picker-cell-inner" style={style}>
                                            {current.date()}
                                        </div>
                                    );
                                }}
                            />;
                        }
                        }
                    >
                    </Controller>
                    {errors.hourSelect ? <p className="error">{errors.hourSelect.message}</p>  : ""}
                </div>
            </div>
        </from>
        <style jsx>{`
           
            .infoTotal{
                background-color: ${COLOR.GRAY_MAIN};
                padding: 20px;
                h3{
                    padding: 15px 0;
                    display: flex;
                    justify-content: space-between;
                    
                }
            }
            .totalAll{
                span:nth-child(2){
                    font-family: ${FONTS.AcuminProRegular};
                    font-weight: bold;
                    font-size: 24px;
                }
                align-items: center;
            }
            .time{
                padding: 20px 0;
            }
            .itemInput{
                margin: 20px 0;
                margin-top: 0;
            }
            .paymentCart{
                >h3{
                    font-weight: bold;
                    font-size: 20px;
                    padding-bottom: 20px;
                }
            }

            @media only screen and (max-width : 599px){
                .paymentCart{
                    >h3{
                        display: none;
                    }
                }
                .infoTotal{
                    background-color: ${COLOR.WHITE};
                    padding-top: 0;
                    .total{
                        display: none;
                    }
                    hr{
                        display: none;
                    }
                }
            }
        `}</style>
    </div>
}