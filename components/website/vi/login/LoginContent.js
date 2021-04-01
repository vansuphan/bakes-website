import TitleCommon from "components/website/title/TitleCommon";
import FormLogin from "components/website/form/FormLogin";
import Container from "components/website/elements/Container";
import FormForgetPassword from "components/website/form/FormForgetPassword";
import {useState, useEffect} from "react";
export default function LoginContent ({}){

    const [showFormForget, setShowFormForget] = useState(false);


    return <div className="loginContent">

        <TitleCommon padding={"35px 0 20px 0"}>{
            showFormForget == true ? "Đặt lại mật khẩu" : "Đăng nhập"
        }</TitleCommon>
        
        <Container className="center">
            {
                showFormForget === true
                ?  <FormForgetPassword setShowFormForget={setShowFormForget}></FormForgetPassword>
                :  <FormLogin setShowFormForget={setShowFormForget}></FormLogin>
            }
           
        </Container> 
        
    </div>
}