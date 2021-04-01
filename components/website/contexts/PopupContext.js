import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import ApiCall from "modules/ApiCall";

export const PopupAddCartProvider =  React.createContext();

export default function PopupContext ({children}) {

    const [nameContext, setNameContext] = useState("PopupContext");
    const [showPopupAddCart, setShowPopupAddCart] = useState(false);
    const [dataPopup, setDataPopup] = useState();

    const hidePopup = (cbFunction) => {
        setShowPopupAddCart(false);
        if(cbFunction){
            cbFunction()
        }
    } 

    const _setDataPopup = (data, cbFunction) => {
        if(data){
            setDataPopup(data)
        }else{
            setDataPopup();
        }
        if(cbFunction){
            cbFunction();
        }
    }

    const showPopup = (cbFunction) => {
        setShowPopupAddCart(true);
        if(cbFunction){
            cbFunction()
        }
    }     


    // useEffect(()=>{
    //     if(dataPopup){
    //         console.log("dataPopup ", dataPopup);
    //     }
    // }, [dataPopup])

    return <PopupAddCartProvider.Provider

        value = {{
            nameContext,
            showPopupAddCart,
            dataPopup,
            hidePopup,
            showPopup,
            setDataPopup: _setDataPopup,
        }}
    >
        {children}
    </PopupAddCartProvider.Provider>
} 