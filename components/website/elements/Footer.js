import Container from "components/website/elements/Container";
import { COLOR, FONTS } from "components/website/constants/Constants";
import FormFooter from "components/website/form/FormFooter";
import { BackTop } from 'antd';
import {LanguageContextProvider} from "components/website/contexts/LanguageContext";
import {useContext, useState, useEffect} from "react";


function Footer() {

  const {dataLanguage, languageCurrent, setLanguage} = useContext(LanguageContextProvider);

  return <footer>
    <Container className="containerFooter">

      {
        dataLanguage && dataLanguage.data
        ? dataLanguage.data.FOOTER.list.map((value, index)=>{
          return <div className="columnFooter" key={index}>
              <h3>{value.title}</h3>
              {
                value.placeholder
                ?  <div className="inputFooter">
                  <FormFooter placeholder = {value.placeholder} ></FormFooter>
                </div>
                : <></>
              }
              {
                value.description 
                ? <p>
                    <span>{ value.description }</span>
                  </p>
                : <></>
              }
              {
                  value.contact && value.contact.length > 0
                  ? <p className="listContact">
                      {
                        value.contact.map((_value, _index)=>{
                         return <span key={_index}>{_value.name}: 
                          <a href={_value.href} target={_value.target} title={_value.title}>{_value.value}</a>
                        </span>
                        })
                      }
                     
                  </p>
                  : <></>
              }
              {
                  value.connect && value.connect.length > 0
                  ? <p className="listConnect">
                      {
                        value.connect.map((_value, _index)=>{
                         return  <a key={_index} href={_value.link} title={_value.title} target="_blank">
                          {_value.image}
                       </a>
                        })
                      }
                  </p>
                  : <></>
              }
          </div>
        })
        : "None data"
      }
      {/* <div className="columnFooter">
        <h3>ĐĂNG KÝ NHẬN THƯ TÌNH</h3>
          <div className="inputFooter">
            <FormFooter></FormFooter>
          </div>
        <p>
          <span> Nhận cập nhật về các sản phẩm, dịch vụ, cửa hàng, sự kiện và ưu đãi đặc biệt của Bakes.</span>
        </p>
      </div>
      <div className="columnFooter">
        <h3>LIÊN HỆ</h3>
        <p className="listContact">
          <span>Hotline: <a href="tel:+31104482222" title="+31104482222">+31 10 448 22 22</a></span>
          <span>Email: <a href="mailto:hello@bakes.saigon.com" title="hello@bakes.saigon.com">hello@bakes.saigon.com</a></span>

          <span>Address:
              <a target="_blank" href="https://www.google.com/maps/place/47+Tr%E1%BA%A7n+Cao+V%C3%A2n,+Ph%C6%B0%E1%BB%9Dng+6,+Qu%E1%BA%ADn+3,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7831152,106.6943211,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f368e50f229:0x4fa4273c1adbf3a0!8m2!3d10.7831099!4d106.6965098">
              47 Trần Cao Vân, Quận 3, Hồ Chí Minh
              </a>
          </span>
        </p>
      </div>
      <div className="columnFooter">
        <h3>KẾT NỐI</h3>
        <p className="listConnect">
          <a href="https://www.facebook.com/bakes.saigon/" title="FACEBOOK" target="_blank">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.66634 0.333374H30.333C32.174 0.333374 33.6663 1.82576 33.6663 3.66671V30.3334C33.6663 32.1743 32.174 33.6667 30.333 33.6667H3.66634C1.82539 33.6667 0.333008 32.1743 0.333008 30.3334V3.66671C0.333008 1.82576 1.82539 0.333374 3.66634 0.333374ZM3.66634 3.66671V30.3334H30.333V3.66671H3.66634ZM15.5548 17.0074H18.6663V27H21.9997V17.0074H25.3037V13.674H21.9997V12C21.9997 11.0796 22.7459 10.3334 23.6663 10.3334H25.333V7.00004H23.6663C20.9049 7.00004 18.6663 9.23862 18.6663 12V13.674H15.5548V17.0074Z" fill="#F2F1EA"></path>
            </svg>
          </a>
          <a  href="https://www.instagram.com/bakes.saigon/" title="INSTAGRAM" target="_blank">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.6663 0.333374H10.333C4.81016 0.333374 0.333008 4.81053 0.333008 10.3334V23.6667C0.333008 29.1896 4.81016 33.6667 10.333 33.6667H23.6663C29.1892 33.6667 33.6663 29.1896 33.6663 23.6667V10.3334C33.6663 4.81053 29.1892 0.333374 23.6663 0.333374ZM3.66634 10.3334C3.66634 6.65148 6.65111 3.66671 10.333 3.66671H23.6663C27.3482 3.66671 30.333 6.65148 30.333 10.3334V23.6667C30.333 27.3486 27.3482 30.3334 23.6663 30.3334H10.333C6.65111 30.3334 3.66634 27.3486 3.66634 23.6667V10.3334ZM16.9997 25.3334C12.3973 25.3334 8.66634 21.6024 8.66634 17C8.66634 12.3977 12.3973 8.66671 16.9997 8.66671C21.602 8.66671 25.333 12.3977 25.333 17C25.333 21.6024 21.602 25.3334 16.9997 25.3334ZM16.9997 22C19.7611 22 21.9997 19.7615 21.9997 17C21.9997 14.2386 19.7611 12 16.9997 12C14.2382 12 11.9997 14.2386 11.9997 17C11.9997 19.7615 14.2382 22 16.9997 22ZM26.9997 8.66671C26.9997 9.58718 26.2535 10.3334 25.333 10.3334C24.4125 10.3334 23.6663 9.58718 23.6663 8.66671C23.6663 7.74623 24.4125 7.00004 25.333 7.00004C26.2535 7.00004 26.9997 7.74623 26.9997 8.66671Z" fill="#F2F1EA"></path>
            </svg>
          </a>
        </p>
      </div> */}
      <div>
        <p>© 2020 Bakes. All rights reserved.</p>
      </div>
    </Container>
    <BackTop  style={{ right:"30px" }}>
      
      <div className="backToTop" title="Back to top">
        {
          dataLanguage && dataLanguage.data
          ? dataLanguage.data.FOOTER.textBackToTop
          :""
        }
        <span className="arrow"></span> </div>
    </BackTop>

    <style jsx>{`

      .backToTop{
        width: 85px;
        transform: rotate(270deg);
        font-size: 12px;
        cursor: pointer;
        color: #6f6f6f;
        position: relative;
        &:hover{
          opacity: 0.5;
        }
        span{
          display: block;
          position: absolute;
          padding: 0;
          width: 20px;
          height: 2px;
          background-color: #6f6f6f;
          right: 0;
          top: 50%;
          transform: translate(15%,-50%);
          &::before, &::after{
            content: "";
            position: absolute;
            width: 5px;
            height: 2px;
            left: 100%;
            top: 50%;
            background-color: #6f6f6f;
            transform: translate(-50%,-105%) rotate(30deg) ;
          }
          &::after{
            transform: translate(-50%,0) rotate(-30deg) ;
          }
        }
      }


      footer{
        background-color: ${COLOR.BLACK};
        padding: 50px 0;
        position: relative;
        z-index: 8;
        p{
          color: ${COLOR.WHITE};
        }
      }
      .columnFooter{
        h3{
          color: ${COLOR.WHITE};
          font-weight: bold;
        }
        
      }
      p,span{
          color: ${COLOR.WHITE};
          padding: 20px 0;
      }
      .inputFooter{
        padding: 20px 0;
        padding-bottom: 10px;
      }
      .listContact{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        span{
          padding: 3px 0;
        }
        a{
          color: ${COLOR.WHITE};
          transition: 0.3s;
          margin-left: 5px;
          &:hover{
            opacity: 0.5;
          }
        }
        
      }
      .listConnect{
        a{
          padding: 3px 0;
          padding-right: 15px;
        }
      }
      @media only screen and (max-width: 599px){
        .listConnect{
          svg{
            width: 25px;
          }
        }
      }
      
   `}</style>
  </footer>;
}

export default Footer;
