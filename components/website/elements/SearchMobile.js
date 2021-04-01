import { useForm } from "react-hook-form";
import { COLOR, FONTS } from "components/website/constants/Constants";
import { ApiContextProvider } from "components/website/contexts/ApiContext";
import { useState, useEffect, useContext } from "react";

export default function Search({
    placeholder = "Search products..."
}) {

    const { register, handleSubmit, reset } = useForm();
    const { PostApiSubscribe } = useContext(ApiContextProvider);
    const [statusShow, setStatusShow] = useState(false);

    const onSubmit = (data) => {
        console.log("search ===> ", data);
    }


    return <div className="search" >

        <i onClick={()=>{setStatusShow(!statusShow)}}>
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929L18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" fill="#191919"></path>
            </svg>
        </i>
        <form onSubmit={handleSubmit(onSubmit)} className={statusShow == true ? "formSearchMobile" : "formSearchMobile hide"}>
            <input name="search" placeholder={placeholder}
                ref={register({
                    required: true, maxLength: 100
                })} />
            <p className="tools" >
                <span className="searchMobile" onClick={handleSubmit(onSubmit)}>
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929L18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" fill="#191919"></path>
                    </svg>
                </span>
                <span className="closeSearchMobile" onClick={()=>{setStatusShow(!statusShow)}}>
                    <svg viewBox="0 0 512 512">
                        <g fill="#333">

                            <path d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1
											 l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4
											 c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"></path>
                        </g>
                    </svg>
                </span>
            </p>


        </form>
        <style jsx>{`
            .search{
                transform: translate(0, 5px) scale(0.9);
                margin-left: 10px;
                margin-right: 10px;
            }
            .tools{
               display: flex;
               flex: 1;
               justify-content: flex-end;
               align-items: center;
               
                span{
                    width: 40px;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-left: 1px solid #dedede;
                    /* border-right: solid 1px gray; */
                }
                span:nth-child(1){
                    border-left: none;
                    margin-right: 5px;
                    padding: 5px;
                }
            }
            .formSearchMobile{
                position: fixed;
                width: 100vw;
                left: -50px;
                top: 50px;
                display: flex;
                flex-direction: row;
                border-radius: 3px;
                border: 1px solid #dedede;
                background-color: #fff;
               
                input{
                    border-radius: 5px;
                    border: none;
                    padding: 10px 15px;
                    outline: none;
                    width: 80%;
                    font-size: 18px;
                }
            }
            .formSearchMobile.hide{
                display: none;
            }
        `}</style>
    </div>
}