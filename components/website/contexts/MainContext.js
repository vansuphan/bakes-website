import {useState, useContext} from "react";
import {useRouter} from "next/router";
import {PopupAddCartProvider} from "@/components/website/contexts/PopupContext";
import PopupContext from "components/website/contexts/PopupContext";


export const MainContextProvider =  React.createContext();

export default function MainContextContext ({children}) {

    const [nameContext, setNameContext] = useState("MainContextContext");

    return <MainContextProvider.Provider

        value = {{
            nameContext
        }}

    >
        {children}
    </MainContextProvider.Provider>
} 