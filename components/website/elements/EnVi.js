import {useRouter} from "next/router";
import {LanguageContextProvider} from "components/website/contexts/LanguageContext";
import {useContext, useState, useEffect} from "react";

export default function EnVi({
    value = "en",
}){

    const selectLanguage = (language) => {
        switch (language) {

            case "en":
                
                return "vi";
        
            default:
                return "en";
        }
    }

    const {languageCurrent, setLanguage} = useContext(LanguageContextProvider); 
    const [languageShow, setLanguageShow] = useState(value);

    const router = useRouter();

    const setValues = (_value) => {
        setLanguage(_value.toLowerCase());
    };

    useEffect(()=>{
        setLanguageShow(selectLanguage(value))
    }, [value, languageCurrent]);

    useEffect(()=>{
        setLanguageShow(selectLanguage(value))
    }, []);

    return <div className="EnVi" onClick={()=>setValues(languageShow)}>
        <p>{languageShow}</p>
        <style jsx>{`
            .EnVi{
                margin-left: 20px;
                p{
                    text-transform: uppercase;
                }
            }
        `}</style>
    </div>
}