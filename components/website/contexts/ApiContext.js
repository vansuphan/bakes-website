import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ApiCall from "modules/ApiCall";
import { message } from 'antd';

export const ApiContextProvider = React.createContext();



export default function ApiContext({ children }) {

    const [nameContext, setNameContext] = useState("ApiContext");

    // form post email footer
    const PostApiSubscribe = async (FunctionCb, data) => {
        let res = await ApiCall({
            path: `/api/v1/subscribes`,
            method: "POST",
            data: data
        });
        if (res) {
            if (res.statusCode == 201 || res.statusCode == 200) {
                FunctionCb();
                return message.success(res.message);
            } else {
                return message.warning(res.message);
            }

        }
    }

    // home page
    const GetApiHome = async (FunctionCb) => {
        let res = await ApiCall({
            path: `/api/v1/home`
        });
        if (res && res.data) {
            await FunctionCb(res.data);
        }
    }

    // about us page
    const GetApiPageAboutUs = async (FunctionCb) => {

        let res = await ApiCall({
            path: `/api/v1/about`
        });
        if (res && res.data) {
            await FunctionCb(res.data);
        }

    }




    return <ApiContextProvider.Provider

        value={{
            nameContext,

            PostApiSubscribe,
            GetApiHome,
            GetApiPageAboutUs,

        }}
    >
        {children}
    </ApiContextProvider.Provider>
}