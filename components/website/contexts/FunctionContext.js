import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

export const FunctionContextProvider = React.createContext();

export default function FunctionContext({ children }) {

    const [nameContext, setNameContext] = useState("FunctionContext");

    const [status, setStatus] = useState(false);


    const addOneItemInListCartLocalStorage = (item, updateAmount=false) => { 

        let dataLocalStorage;

        if (item && localStorage && localStorage.getItem("listCart")) {

            dataLocalStorage = JSON.parse(localStorage.getItem("listCart"));

            if(dataLocalStorage && dataLocalStorage[0]!== null){

                const hasData = findOneItemInListCart(item.id, dataLocalStorage);

                if(hasData == true){

                    let newData = [...dataLocalStorage.map((_value, index)=>{

                        if(_value.id == item.id){

                            return {
                                ..._value,
                                amount: updateAmount == true 
                                ? parseInt(item.amount) 
                                : parseInt(_value.amount) + parseInt(item.amount)
                            }

                        }else{

                            return _value
                        }

                    })];

                    localStorage.setItem("listCart" , JSON.stringify(newData));
                    setStatus(!status);
                }else{

                    let newData = [...dataLocalStorage.map(_value => _value)];
                    newData.push(item);
                    localStorage.setItem("listCart" , JSON.stringify(newData));
                    setStatus(!status);

                }
            }

        } else {

            return null;
        }
    }


    const checkDataLocalStorage = () => { 
        if(localStorage){

            if (!localStorage.getItem("listCart")) {
                let dataSetLS = []
                localStorage.setItem("listCart" , JSON.stringify(dataSetLS));
            }
        }
    }


    const findOneItemInListCart = (id, listItem=[]) => {
        
        if (id && listItem.length > 0) {

            let dataFind = listItem.find(_value => _value.id === id);

            if (dataFind) {

                return true;

            } else {

                return false;

            }
        } else {

            return false
        }
    }


    const deleteOneItemInListCartLocalStorage = (id) => {

        if (id && localStorage && localStorage.getItem("listCart")) {
            let dataLocalStorage = JSON.parse(localStorage.getItem("listCart"));

            let newData = dataLocalStorage.filter((value) => {
                if (value.id !== id) {
                    return value;
                }
            })

            dataLocalStorage = newData;
            localStorage.setItem("listCart", JSON.stringify(dataLocalStorage));
            setStatus(!status);
        } else {
            return null;
        }
    }

    const countAmountCartLocalStorage = () =>{

        if (localStorage && localStorage.getItem("listCart")) {

            let dataLocalStorage = JSON.parse(localStorage.getItem("listCart"));

            if(dataLocalStorage && dataLocalStorage[0] !== null){

                let counter = dataLocalStorage.map((value, index)=>{
                    return value.amount
                }).reduce((_value, currentValue)=>_value + currentValue);
                // console.log("counter ==> ", counter)
                
                return counter;
            }else{
                return 0;
            }
        }else{
            return 0;
        }
        
    }


    const getAllItemInCart = () => {
        if (localStorage && localStorage.getItem("listCart")) {
            let dataLocalStorage = JSON.parse(localStorage.getItem("listCart"));
            return dataLocalStorage;
        }
    }

    const countAllPrice = (list) => {
        if (list && localStorage.getItem("listCart")) {
            let count = list.map((_value)=>{
                return parseInt(_value.price) * parseInt(_value.amount)
            }).reduce((value, initValue) => value + initValue);
            return count;
        }
    }

    const getOneItemInCart = (item) => {

        if (localStorage && localStorage.getItem("listCart")) {
            let dataLocalStorage = JSON.parse(localStorage.getItem("listCart"));
            if (item.id && dataLocalStorage.length > 0) {

                let dataFind = dataLocalStorage.find(_value => _value.id === item.id);
    
                if (dataFind) {
    
                    return dataFind;
    
                } else {
    
                    return item;
    
                }
            } else {
    
                return item
            }
           
        }
    }


    return <FunctionContextProvider.Provider

        value={{
            nameContext,
            status,
            getOneItemInCart,
            getAllItemInCart,
            findOneItemInListCart,
            checkDataLocalStorage,
            addOneItemInListCartLocalStorage,
            deleteOneItemInListCartLocalStorage,
            countAmountCartLocalStorage,
            countAllPrice,
           
        }}
    >
        {children}
    </FunctionContextProvider.Provider>
}