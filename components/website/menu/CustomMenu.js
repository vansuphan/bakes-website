
import { useRouter } from "next/router";
import asset from "plugins/assets/asset";
import CONFIG from "web.config";
import { COLOR } from "components/website/constants/Constants";
import SearchMobile from "components/website/elements/SearchMobile";

import {LanguageContextProvider} from "components/website/contexts/LanguageContext";
import {useContext, useState, useEffect, useRef} from "react";

const Menu = (props) => {
  const router = useRouter();
  const handleClick = () => {
    props.setOpen(!open);
    props.setContext(true);
  }

  const {dataLanguage, languageCurrent, setLanguage} = useContext(LanguageContextProvider);
  const setValueLanguage = (_value) => {
    setLanguage(_value.toLowerCase());
};

  const baseUrlShare = CONFIG.NEXT_PUBLIC_BASE_URL;

  return (
    //open={props.open}
    <div className={"StyledMenu"} >
      {
         dataLanguage && dataLanguage.data
        ? dataLanguage.data.MENU.map((value, index)=>{
          return <a 
            key={index} 
            className={`${props.classActive.classActive == value.classActive || props.classActive.classActive === "" ? "active" : "" }`}
            onClick={() => router.push(value.link)}>
            <span role="img" aria-label={value.name}></span>
              {value.name}
          </a>
        })
        :<></>
      }
      {/* <a onClick={() => router.push("/san-pham")}>
        <span role="img" aria-label="Sản phẩm"></span>
            Đặt tiệc
        </a>
      <a onClick={() => router.push("/dich-vu")}>
        <span role="img" aria-label="Dịch vụ"></span>
            Về Bakes
        </a> */}
      
      <div className="footerMenuCustom">
        <p className="languages">
          {
            languageCurrent 
            ? <>
              <span className={languageCurrent == "en" ? "active" : ""} onClick={()=>setValueLanguage("en")}>EN</span>/
              <span className={languageCurrent == "vi" ? "active" : ""} onClick={()=>setValueLanguage("vi")}>VI</span>
            </>
            : <>
              <span className="active" onClick={()=>setValueLanguage("en")}>EN</span>/
              <span onClick={()=>setValueLanguage("vi")}>VI</span>
            </>
          }
          
        </p>
        <div className="closeMenu" onClick={()=>{ props.setOpen(!props.open);}}> 
            {
              languageCurrent
              ? languageCurrent == "en" ? <p>Close</p> : <p>Đóng</p>  
              :  <p>Close</p>
            }
        </div>
      </div>
      
      <style jsx>{`
        .footerMenuCustom{
              position: fixed;
              bottom: 0;
              left: 50%;
              transform: translate(-50%,0);
              width: 100%;
              text-align: center;
              .closeMenu{
                border-top: solid 1px #DADADA;
                padding: 15px ;
                font-size: 18px;
              }
              .languages{
                padding: 15px;
                font-size: 18px;
                color: #BDBDBD;
              }
              .languages{
                .active{
                  color: black;
                  text-decoration: underline;
                }
              }
          }
            .StyledMenu{
                z-index: 99;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: ${COLOR.BG_GRAY_MENU};
                transform: ${props.open ? 'translateX(0)' : 'translateX(-100%)'};
                height: 100vh;
                width: 100vw;
                text-align: left;
                padding: 2rem;
                position: fixed;
                top: 0;
                left: 0;
                transition: transform 0.3s ease-in-out;

                @media (max-width: 576px) {
                    width: 100%;
                }

                a {
                    font-size: 1rem;
                    text-transform: uppercase;
                    text-align: center;
                    padding: 1rem 0;
                    font-weight: bold;
                    letter-spacing: 0.2rem;
                    color: ${COLOR.TEXT_COLOR_MENU_CUSTOMS};
                    text-decoration: none;
                    transition: color 0.3s linear;
                    cursor: pointer;

                    @media (max-width: 576px) {
                      font-size: 1.5rem;
                      text-align: center;
                    }

                    &:hover {
                      opacity: 0.5;
                    }
                }
                a.active{
                  opacity: 0.5;
                }
              }    
        `}</style>
    </div>
  )
}


const Burger = (props) => {
  return (
    //open={open}
    <div className={"StyledBurger"} onClick={() => props.setOpen(!props.open)}>
      <div />
      <div />
      <div /> 
      <style jsx>{`
        
        .StyledBurger{
            position: absolute;
            transform: scale(0.9);
            top: 24%;
            left: 1.9rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 2rem;
            height: 2rem;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 999;

            &:focus {
                outline: none;
            }

            div {
                width: 2rem;
                height: 0.2rem;
                background: ${props.open ? COLOR.TEXT_COLOR_MENU_CUSTOMS : COLOR.TEXT_COLOR_MENU_CUSTOMS };
                border-radius: 10px;
                transition: all 0.3s linear;
                position: relative;
                transform-origin: 1px;

                :first-child {
                  transform: ${props.open ? 'rotate(45deg)' : 'rotate(0)'};
                }

                :nth-child(2) {
                  opacity: ${props.open ? '0' : '1'};
                  transform: ${props.open ? 'translateX(20px)' : 'translateX(0)'};
                  height: 0.23rem;
                }

                :nth-child(3) {
                  transform: ${props.open ? 'rotate(-45deg)' : 'rotate(0)'};
                }
            }
            }
      `}</style>
    </div>
  )
}


export default function MenuDemo(
  classActive,
) {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const [status, setStatus] = useState(false);
  const router = useRouter();

  const {dataLanguage, languageCurrent} = useContext(LanguageContextProvider);

  // useEffect(() => {
  //   console.log(status);
  // }, [status])

  const handleOutSidePopup = () => setStatus(false);



  return (
    <div className="menuCustom">
      <div ref={node}>
        <div className="fixedMenuCustom">
          <Burger open={open} setOpen={setOpen} />
          <a className="logoMobile" onClick={() => router.push("/")}>
            <span role="img" aria-label="Trang chủ"></span>
            <img className="logo" src={asset("/images/logo.png")}/>
          </a>
          <div className="searchMb">
            <SearchMobile 
              placeholder={
                dataLanguage && dataLanguage.data 
                ? dataLanguage.data.SEARCH.placeholder 
                : "Search products..."}>
            </SearchMobile>
          </div>
          <div className="accountCart">
            <a onClick={()=>{router.push("/account")}} className="account-mb" rel="nofollow" title="Tài khoản">
              <i aria-hidden="true">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.5 20.125C5.18426 20.125 0.875 15.8157 0.875 10.5C0.875 5.18426 5.18426 0.875 10.5 0.875C15.8157 0.875 20.125 5.18426 20.125 10.5C20.125 15.8157 15.8157 20.125 10.5 20.125ZM16.9746 14.984C17.8575 13.7115 18.375 12.1662 18.375 10.5C18.375 6.15077 14.8492 2.62501 10.5 2.62501C6.15073 2.62501 2.62497 6.15077 2.62497 10.5C2.62497 12.1662 3.14244 13.7116 4.02544 14.9841C5.00992 13.6837 7.323 13.1253 10.4974 13.125C8.5394 13.1238 7.00003 11.7476 7.00003 8.75001C7.00003 6.7863 8.38174 5.25001 10.5 5.25001C12.6124 5.25001 14 6.93139 14 8.92501C14 11.7947 12.4409 13.125 10.5 13.125C13.6757 13.125 15.9898 13.6833 16.9746 14.984ZM15.7191 16.3973C15.463 15.4764 13.6232 14.875 10.5 14.875C7.37678 14.875 5.53698 15.4765 5.28092 16.3973C6.6704 17.6279 8.49794 18.375 10.5 18.375C12.502 18.375 14.3296 17.6279 15.7191 16.3973ZM8.75 8.74999C8.75 10.7356 9.46593 11.375 10.5 11.375C11.5305 11.375 12.25 10.7611 12.25 8.92499C12.25 7.8316 11.5637 6.99999 10.5 6.99999C9.39202 6.99999 8.75 7.71383 8.75 8.74999Z" fill="black"></path>
                  <path d="M16.9746 14.984L16.7752 15.135L16.9834 15.4099L17.18 15.1266L16.9746 14.984ZM4.02544 14.9841L3.82004 15.1266L4.01663 15.4099L4.22476 15.135L4.02544 14.9841ZM10.4974 13.125L10.4974 13.375L10.4976 12.875L10.4974 13.125ZM15.7191 16.3973L15.8849 16.5844L16.0018 16.4808L15.96 16.3303L15.7191 16.3973ZM5.28092 16.3973L5.04006 16.3304L4.9982 16.4809L5.11517 16.5845L5.28092 16.3973ZM0.625 10.5C0.625 15.9538 5.04619 20.375 10.5 20.375V19.875C5.32233 19.875 1.125 15.6777 1.125 10.5H0.625ZM10.5 0.625C5.04619 0.625 0.625 5.04619 0.625 10.5H1.125C1.125 5.32233 5.32233 1.125 10.5 1.125V0.625ZM20.375 10.5C20.375 5.04619 15.9538 0.625 10.5 0.625V1.125C15.6777 1.125 19.875 5.32233 19.875 10.5H20.375ZM10.5 20.375C15.9538 20.375 20.375 15.9538 20.375 10.5H19.875C19.875 15.6777 15.6777 19.875 10.5 19.875V20.375ZM18.125 10.5C18.125 12.1136 17.624 13.6095 16.7692 14.8415L17.18 15.1266C18.091 13.8135 18.625 12.2188 18.625 10.5H18.125ZM10.5 2.87501C14.7111 2.87501 18.125 6.28884 18.125 10.5H18.625C18.625 6.0127 14.9873 2.37501 10.5 2.37501V2.87501ZM2.87497 10.5C2.87497 6.28884 6.2888 2.87501 10.5 2.87501V2.37501C6.01266 2.37501 2.37497 6.0127 2.37497 10.5H2.87497ZM4.23084 14.8416C3.37594 13.6096 2.87497 12.1137 2.87497 10.5H2.37497C2.37497 12.2188 2.90894 13.8136 3.82004 15.1266L4.23084 14.8416ZM4.22476 15.135C4.67058 14.5461 5.43551 14.1028 6.50653 13.8081C7.57503 13.514 8.9224 13.3752 10.4974 13.375L10.4974 12.875C8.89799 12.8752 7.50163 13.0156 6.37387 13.326C5.24863 13.6356 4.36478 14.1217 3.82612 14.8332L4.22476 15.135ZM10.4976 12.875C9.57964 12.8744 8.77795 12.5535 8.20254 11.8964C7.62422 11.2361 7.25003 10.208 7.25003 8.75001H6.75003C6.75003 10.2896 7.14552 11.4484 7.82639 12.2259C8.51017 13.0066 9.45716 13.3744 10.4972 13.375L10.4976 12.875ZM7.25003 8.75001C7.25003 6.91697 8.5271 5.50001 10.5 5.50001V5.00001C8.23638 5.00001 6.75003 6.65563 6.75003 8.75001H7.25003ZM10.5 5.50001C12.4533 5.50001 13.75 7.04742 13.75 8.92501H14.25C14.25 6.81537 12.7716 5.00001 10.5 5.00001V5.50001ZM13.75 8.92501C13.75 10.3156 13.3727 11.2991 12.7934 11.9324C12.2156 12.564 11.4118 12.875 10.5 12.875V13.375C11.5291 13.375 12.4753 13.0209 13.1623 12.2699C13.8477 11.5206 14.25 10.4041 14.25 8.92501H13.75ZM10.5 13.375C12.0757 13.375 13.4236 13.5138 14.4926 13.8078C15.564 14.1025 16.3293 14.5459 16.7752 15.135L17.1739 14.8331C16.635 14.1214 15.7509 13.6353 14.6252 13.3257C13.497 13.0154 12.1 12.875 10.5 12.875V13.375ZM15.96 16.3303C15.7943 15.7347 15.1499 15.3201 14.2567 15.0514C13.3419 14.7762 12.0742 14.625 10.5 14.625V15.125C12.049 15.125 13.2628 15.2745 14.1127 15.5302C14.9842 15.7924 15.3878 16.139 15.4783 16.4643L15.96 16.3303ZM10.5 14.625C8.92582 14.625 7.65809 14.7762 6.74325 15.0514C5.85008 15.3202 5.20566 15.7348 5.04006 16.3304L5.52178 16.4643C5.61223 16.139 6.01575 15.7925 6.8873 15.5302C7.73719 15.2745 8.95098 15.125 10.5 15.125V14.625ZM10.5 18.125C8.56133 18.125 6.79219 17.4018 5.44667 16.2102L5.11517 16.5845C6.5486 17.854 8.43455 18.625 10.5 18.625V18.125ZM15.5534 16.2101C14.2078 17.4018 12.4387 18.125 10.5 18.125V18.625C12.5654 18.625 14.4514 17.854 15.8849 16.5844L15.5534 16.2101ZM10.5 11.125C10.0387 11.125 9.68555 10.9858 9.43671 10.6564C9.17659 10.3121 9 9.72103 9 8.74999H8.5C8.5 9.76455 8.68137 10.486 9.03774 10.9578C9.40539 11.4445 9.92722 11.625 10.5 11.625V11.125ZM12 8.92499C12 9.81762 11.8239 10.3627 11.5668 10.6816C11.3187 10.9895 10.9634 11.125 10.5 11.125V11.625C11.0671 11.625 11.5868 11.4536 11.9561 10.9954C12.3164 10.5484 12.5 9.86845 12.5 8.92499H12ZM10.5 7.24999C10.9622 7.24999 11.3308 7.42861 11.5866 7.71803C11.8448 8.01026 12 8.42978 12 8.92499H12.5C12.5 8.32681 12.312 7.78383 11.9612 7.38691C11.6079 6.98717 11.1015 6.74999 10.5 6.74999V7.24999ZM9 8.74999C9 8.2835 9.14374 7.91307 9.38888 7.66057C9.63286 7.40926 10.0013 7.24999 10.5 7.24999V6.74999C9.89074 6.74999 9.38416 6.94764 9.03014 7.31229C8.67727 7.67575 8.5 8.18032 8.5 8.74999H9Z" fill="#F2F1EA"></path>
                </svg>
              </i>
            </a>
            <a onClick={()=>{router.push("/cart")}} title="Giỏ hàng" rel="nofollow" className="cart-mb">
              <i>
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5875" y="6.9" width="14.45" height="11.825" rx="1.35" stroke="black" strokeWidth="1.3"></rect>
                  <path d="M12.75 5.59375C12.75 3.05669 10.9871 1 8.8125 1C6.63788 1 4.875 3.05669 4.875 5.59375" stroke="black" strokeWidth="1.3"></path>
                </svg>
              </i>
              <span className="count_item_pr">3</span>
            </a>
				</div>
        </div>
        <Menu
          open={open}
          setOpen={setOpen}
          status={status}
          setContext={setStatus}
          classActive={classActive}
        />
      </div>

      <style jsx>{`
        .fixedMenuCustom{
          height: 65px;
          background-color: #fff;
          z-index: 999;
          position: fixed;
          top: 0;
          width: 100%;
          left: 0;
          z-index: 999;
        }
        .logoMobile{
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%,0);
          img{
            width: 80px;
          }
        }
        .searchMb{
          position: absolute;
          top: 20%;
          left: 60px;
        }
        .accountCart{
          position: absolute;
          width: 70px;
          top: 30%;
          right: 1.7rem;
          display: flex;
          justify-content: space-around;
        }
        .cart-mb{
          position: relative;
          .count_item_pr{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 8px;
            color: ${COLOR.BLACK};
          }
        }
      `}</style>
    </div>
  )
}



const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
    [ref, handler],
  );
};