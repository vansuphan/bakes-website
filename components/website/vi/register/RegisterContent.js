import TitleCommon from "components/website/title/TitleCommon";
import FormLogin from "components/website/form/FormLogin";
import Container from "components/website/elements/Container";
import FormRegister from "components/website/form/FormRegister";
import {useState, useEffect} from "react";
export default function RegisterContent ({}){


    return <div className="registerContent">

        <TitleCommon padding={"35px 0 20px 0"}>{
            "Đăng ký"
        }</TitleCommon>
        
        <Container className="center">

             <FormRegister></FormRegister>
           
        </Container> 
        
    </div>
}