import {useState, useEffect}  from "react";
import {InputNumber, Tooltip} from "antd";
export default function CountInput ({
    handleChange,
    amount=1,
}){

    const [_amount, _setAmount] = useState(amount);

    const _handleChange = (_value) => {
        
        if(_value){
            if(_value == "" || _value == undefined || _value == null || parseInt(_value) < 1){
                console.log("1")
                _setAmount(1);
                if(handleChange){
                    handleChange(1);
                }
            }
            if( parseInt(_value) <= 999 && parseInt(_value) >= 1){
                console.log("2" ,_value)
                if(handleChange){
                    handleChange(_value);
                }
                _setAmount(_value);
            }
            if( parseInt(_value > 999)){
                console.log("3")
                if(handleChange){
                    handleChange(999);
                }
                _setAmount(999);
            }
            
        }
       
    }
    
    useEffect(()=>{
        _setAmount(amount);

    },[amount]);

    const add = (_value) => {
        if(_value){
           
            if( parseInt(_value) <= 999 && parseInt(_value) >= 1){
                console.log("2" ,_value)
                if(handleChange){
                    handleChange(_value);
                }
                _setAmount(_value);
            }
            if( parseInt(_value > 999)){
                console.log("3")
                if(handleChange){
                    handleChange(999);
                }
                _setAmount(999);
            }
            
        }
    }

    const reduce = (_value)=> {
        if(_value){
            if(_value == "" || _value == undefined || _value == null || parseInt(_value) < 1){
                _setAmount(1);
                if(handleChange){
                    handleChange(1);
                }
            }
            if( parseInt(_value) <= 999 && parseInt(_value) >= 1){
                if(handleChange){
                    handleChange(_value);
                }
                _setAmount(_value);
            }
            
        }
    }
    
   
    return <div className={"countInput"}>
       
        <span className={"reduce"} onClick={()=>add(_amount - 1)}>{"-"}</span>
        <InputNumber min={1} max={999} onChange={(value)=>_handleChange(value)} value={_amount || 1}></InputNumber>
        <span className={"add"} onClick={()=>reduce(_amount + 1)}>{"+"}</span>

        <style jsx>{`
            .countInput{
                span{
                    padding: 8px 13px;
                    border: solid 1px rgba(0,0,0,0.4);
                    font-weight: bold;
                    cursor: pointer;
                }
                .reduce{
                    border-right: none;
                }
                .add{
                    border-left: none;
                }
            }
            
        `}</style>
    </div>
}