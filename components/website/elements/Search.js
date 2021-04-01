import { useForm } from "react-hook-form";
import {COLOR, FONTS} from "components/website/constants/Constants";
import {ApiContextProvider} from  "components/website/contexts/ApiContext";
import {useState, useEffect, useContext} from "react";

export default function Search({ 
    placeholder="Search products..."
}) {

    const { register, handleSubmit, reset } = useForm();
    const {PostApiSubscribe} = useContext(ApiContextProvider);
    
    const onSubmit = (data) => {
        console.log("search ===> ", data );
    }

    return <div className="search">
        <form onSubmit={handleSubmit(onSubmit)} className="formSearch">
            <input name="search" placeholder={placeholder} 
                ref={register({ 
                    required: true, maxLength: 100 
                })} />
        </form>
        <i onClick={handleSubmit(onSubmit)}>
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929L18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" fill="#191919"></path>
            </svg>
        </i>
        
        <style jsx>{`
            .search{
                transform: translate(0, 5px) scale(0.9);
                margin-left: 10px;
                margin-right: 10px;
                position: relative;
            }
            .formSearch{
                position: fixed;
                right: 100%;
                input{
                    border: none;
                    border-bottom: solid 1px gray;
                    outline: none;
                    padding: 0px;
                    width: 0px;
                }
                
            }

            .search{
                &:hover{
                    input{
                        width: 200px;
                        padding: 5px;
                    }
                }
            }
        `}</style>
    </div>
}