import React from "react";
import { useForm } from "react-hook-form";
import { COLOR, FONTS } from "components/website/constants/Constants";

export default function InputSearch({

}) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return <div className="inputSearch">
        <form onSubmit={handleSubmit(onSubmit)} className="formFooter">
            <input name="name" placeholder="Tìm sản phẩm"
                ref={register({
                    required: true, maxLength: 50
                })} />
            <button type="submit" >
                <i>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 1L14 5L10 9" stroke="#F2F1EB" strokeWidth="1.5"></path> <path d="M0 5L14 5" stroke="#F2F1EB" strokeWidth="1.5"></path></svg>
                </i>
            </button>
           
        </form>
        <style jsx>{`
        .formFooter{
            width: 95%;
            display: flex;  
            cursor: pointer;
            border: solid 1px ${COLOR.WHITE};
            padding: 5px 0;
            border-radius: 25px;
            overflow: hidden;
            button{
                background-color: rgba(0,0,0,0);
                border: none;
                outline: none;
                cursor: pointer;
                width: 20%;
            }
            input{
                background-color: rgba(0,0,0,0);
                outline: none;
                border: none;
                cursor: text;
                width: 80%;
                padding: 10px 15px;
            }

        }
      `}</style>
    </div>
}