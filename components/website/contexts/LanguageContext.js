import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ApiCall from "modules/ApiCall";
import LANGUAGE from "components/website/constants/Language";

export const LanguageContextProvider = React.createContext();


export default function LanguageContext({ children }) {

    const router = useRouter();

    const Language = {

        ListName: [
            "en", "vi"
        ],

        "EN": {
            name: "en",
            data: LANGUAGE.EN
        },

        "VI": {
            name: "vi",
            data: LANGUAGE.VI
        }
    }

    const [listNameLanguage, setListNameLanguage] = useState(Language.ListName);

    const [dataLanguage, setDataLanguage] = useState(Language.VI.data);

    const [languageCurrent, setLanguageDefault] = useState(Language.VI.name);

    const setLanguage = (value) => {

        setLanguageDefault(value);
        localStorage.setItem('LANGUAGE', value);

    }


    useEffect(() => {

        if (localStorage.getItem("LANGUAGE")) {
            setLanguageDefault(localStorage.getItem("LANGUAGE"));
            setDataLanguage(Language[`${localStorage.getItem("LANGUAGE").toUpperCase()}`]);

        } else {
            localStorage.setItem('LANGUAGE', Language.VI.name);
        }

    }, [])

    useEffect(() => {

        const data = Language[`${languageCurrent.toUpperCase()}`];
        setDataLanguage(data);

    }, [languageCurrent]);


    return <LanguageContextProvider.Provider

        value={{
            dataLanguage,
            languageCurrent,
            listNameLanguage,
            setLanguage,
        }}
    >
        {children}
    </LanguageContextProvider.Provider>
}