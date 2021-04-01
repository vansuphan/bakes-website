import {useState, useEffect, useContext} from "react";
import {useRouter} from "next/router";
import {FunctionContextProvider} from "components/website/contexts/FunctionContext";
export const CartConstantContextProvider =  React.createContext();

export default function CartConstantContext ({children}) {

    const [nameContext, setNameContext] = useState("CartConstantContext");

    // const valueFunctionContext = useContext(FunctionContextProvider);

    const [dataCart, setDataCart] = useState([]);



    // const

    return <CartConstantContextProvider.Provider

        value = {{
            nameContext,
            dataCart,
            setDataCart,
        }}
    >
        {children}
    </CartConstantContextProvider.Provider>
} 