import { COLOR } from "components/website/constants/Constants";
import { Popover, Button } from 'antd';
import { useRouter } from "next/router";
import { LanguageContextProvider } from "components/website/contexts/LanguageContext";
import { useContext, useState, useEffect, useRef } from "react";

export default function MenuAccount({
    // amount,
    handleLogin,
    handLogout,
    handleRegister,
    dataUser
}) {

    const { dataLanguage, languageCurrent } = useContext(LanguageContextProvider);

    const router = useRouter();

    const _handleLogin = () => {
        console.log("Login");
        router.push("/login")
        if (handleLogin) {
            handleLogin();
        }
    }

    const _handLogout = () => {
        console.log("Logout")
        if (handLogout) {
            handLogout();
        }
    }
    const _handRegister = () => {
        console.log("handleRegister");
        router.push("/register")
        if (handleRegister) {
            handleRegister();
        }
    }

    const text = ""

    const content = (
        <div className="Content">

            {
                dataUser && dataUser.name
                    ? <>
                        <span>{dataUser.name}</span>
                        <p onClick={_handLogout}>
                            {
                                dataLanguage && dataLanguage.data
                                    ? dataLanguage.data.MENU_ACCOUNT.logoutText
                                    : "Logout"

                            }
                        </p>
                    </>
                    : <>
                        <p onClick={_handleLogin}>
                            {
                                dataLanguage && dataLanguage.data
                                    ? dataLanguage.data.MENU_ACCOUNT.loginText
                                    : "Login"
                            }
                        </p>
                        <p onClick={_handRegister}>
                            {
                                dataLanguage && dataLanguage.data
                                    ? dataLanguage.data.MENU_ACCOUNT.registerText
                                    : "Login"
                            }
                        </p>
                    </>
            }


            <style jsx>{`
                .Content{
                    width: 150px;
                    p{
                        padding: 5px 10px;
                        cursor: pointer;
                        &:hover{
                            background-color: ${COLOR.BG_GRAY_LIGHTEST};
                        }
                    }
                }
            `}</style>
        </div>

    );

    return <div className="CardProducts">

        <Popover placement="bottomLeft" title={text} content={content} trigger="click hover">
            <p>
                {
                    dataLanguage && dataLanguage.data
                        ? dataLanguage.data.MENU_ACCOUNT.name
                        : "Account"

                }
            </p>
        </Popover>

        <style jsx>{`
            .CardProducts{
                margin-left: 10px;
                margin-right: 20px;
            }
        `}</style>

    </div>
}