import { useState, useEffect, useContext, useRef } from "react"; 
import { COLOR, FONTS } from "components/website/constants/Constants";

export default function CountNumberInput ({defaultValue, getValue}){

    const [_amount, _setAmount] = useState(defaultValue|| 1);
    const amountRef = useRef();

    const onChangeInput = (value) => {
        let newValue = amountRef.current.value;
        if( newValue == "" || newValue == undefined || newValue == null || parseInt(newValue) < 1){
            _setAmount(1);
            return;
        }
        if (parseInt(newValue) >= 1 && parseInt(newValue) <= 999) {
            _setAmount(parseInt(newValue));
            
        } else {
            if (parseInt(newValue) > 999) {
                _setAmount(999)
            } 
            
        }
    }

    const _getValue = (value) => {
        if(getValue){
            getValue(value);
        }
    }

    useEffect(()=>{
        if(_amount){
            if( _amount == "" || _amount == undefined || _amount == null || parseInt(_amount) < 1){
                _setAmount(1);
                return;
            }
            if( parseInt(_amount <= 999) || parseInt(_amount) >= 1){
                _getValue(_amount)
            }
            
        }
        
    },[_amount]);

   

    const handleCount = (nameCount) => {
        switch (nameCount) {
            case "+":
                _setAmount(parseInt(_amount) + 1);
                break;
            case "-":
                _setAmount(parseInt(_amount) - 1);
                break;
            default:
                break;
        }
    }

    return <div className="countNumberInput">
        <span onClick={(e) => { handleCount("-") }}>-</span>
        <input name="countNumber"
            type="number"
            className={"input"}
            defaultValue={_amount || 1}
            value={_amount}
            onChange={(value) => onChangeInput(value)}
            ref={amountRef}>
        </input>
        <span onClick={(e) => { handleCount("+") }}>+</span>
        <style jsx>{`
            .countNumberInput{
                display: flex;
                align-items: center;
                width: 100%;
                order: 6;
                span{
                    width: 50px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 100%;
                    outline: none;
                    background-color: ${COLOR.BLACK};
                    border: 1px solid ${COLOR.BG_GRAY_LIGHT};
                    background-color: ${COLOR.WHITE};
                    color: ${COLOR.BLACK};
                    font-weight: bold;
                    cursor: pointer;
                    -webkit-touch-callout: none; /* iOS Safari */
                    -webkit-user-select: none; /* Safari */
                    -khtml-user-select: none; /* Konqueror HTML */
                    -moz-user-select: none; /* Old versions of Firefox */
                        -ms-user-select: none; /* Internet Explorer/Edge */
                            user-select: none; 
                }
                input{
                    width: 50px;
                    height: 50px;
                    border-radius: 100%;
                    outline: none;
                    outline: none;
                    position: relative;
                    text-align: center;
                    margin-left: 5px;
                    margin-right: 5px;
                    font-weight: bold;
                    background-color: ${COLOR.BLACK};
                    border: 1px solid ${COLOR.BLACK};
                    color: ${COLOR.WHITE};
                    
                }
            }
        `}</style>
    </div>
}