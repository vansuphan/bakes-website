
import CONFIG from "web.config";
import { useRouter } from "next/router";
// import { assertInputObjectType } from "graphql";
import asset from "plugins/assets/asset";
import useScroll from "components/website/hooks-custom/useScroll";
import MenuAccount from "components/website/elements/MenuAccount";
import Card from "@/components/website/elements/Carts";
import Search from "components/website/elements/Search";
import EnVi from "components/website/elements/EnVi";

import {LanguageContextProvider} from "components/website/contexts/LanguageContext";
import {useContext, useState, useEffect, useRef} from "react";

export default function menuCustomList({
  classActive,
}) {
  const node = useRef();
  const router = useRouter();
  const {dataLanguage, languageCurrent} = useContext(LanguageContextProvider);
  const { scrollX, scrollY, scrollDirection } = useScroll();
  const [fixed, setFixed] = useState(false);
  // const baseUrlShare = CONFIG.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    if (scrollY && scrollY >= 250) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, [scrollY, scrollDirection]);

  useEffect(()=>{
    console.log("==> languageCurrent : ", dataLanguage)
  },[])

  return (<div className={fixed === true ? "menuCustomList fixeds" : "menuCustomList"}>
        <div ref={node}>
          <a onClick={() => router.push("/")} className="logoDesktop">
            <img src={asset("/images/logo.png")} />
          </a>

          {
            dataLanguage && dataLanguage.data
              ? dataLanguage.data.MENU.map((value, index) => {
                return <a key={index}
                  onClick={() => router.push(value.link)}
                  className={`${classActive == value.classActive || classActive === "" ? "active" : ""}`}>
                  <span role="img" aria-label={value.name}></span>
                  {value.name}
                </a>
              })
              : <></>
          }

          <a className="listMenuRight">
            <Search placeholder={ dataLanguage && dataLanguage.data ? dataLanguage.data.SEARCH.placeholder : "Search products..." }></Search>
            <MenuAccount></MenuAccount>
            <Card amount={3}></Card>
            <EnVi value={
              languageCurrent ? languageCurrent : ""
            }></EnVi>
          </a>

        </div>

        <style jsx>{`
        
        .menuCustomList.fixed{
            position: fixed;
            z-index:9;
            width:100%;
            background-color: #fff;
            right: 0;
            top: 0;
            padding: 5px 0;
            transition: 0.4s;
        }
        .menuCustomList{
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            padding: 20px 0;
            color: #000;
            transition: 0.3s;
            background-color: #fff;
            >div{
              display: flex;
            }
            a{
                color: #000;
                padding: 5px 15px;
                padding-bottom: 10px;
                font-size: 1vw;
                margin: 0 10px;
                text-transform: uppercase;
                display: flex;
                align-items: flex-end;
                cursor: pointer;
                transition: 0.3s;
                &:hover{
                  transition: 0.2s;
                  /* color: #ed1c24; */
                }
                img {
                  width: 110px;
                }
                position: relative;
              &::after{
                content: "";
                position: absolute;
                width: 0;
                bottom: 5%;
                height: 0;
                background-color: #ff1600;
                transition: 0.3s;
              }
            }
            a.active{
              transition: 0.3s;
              opacity: 0.5;
            }

            a:first-child::after{
              display: none !important;
              margin-bottom: 0;
            }
            a:first-child{
              margin-left: 0;
              padding-left: 0;
            }
        }
        .logoDesktop{
          img{
            display: block;
            width: 150px;
          }
        }
        
        @media screen and (min-width : 1919px){
          .menuCustomList{
            a{
              font-size: 18px;
            }
          }
          
        }
        @media screen and (min-width : 1023px){
          .menuCustomList{
            display: flex;
            justify-content: flex-start;
            width: 100%;
            div{
              width:100%;
              /* justify-content: space-evenly; */
            }
          }
          .menuCustomList.fixed{
            div{
              width: 80%;
              margin-left: auto;
              margin-right: auto;
            }
          }
        }
      `}</style>
      </div>

  )
}
