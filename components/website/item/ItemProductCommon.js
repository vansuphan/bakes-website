import ButtonCommon from "components/website/buttons/ButtonCommon";
import asset from "plugins/assets/asset";
import {COLOR, FONTS} from "components/website/constants/Constants";

export default function ItemProductCommon ({
    nameItem,
    imgItem=asset("/images/noibat_1.jpg"),
    price,
    oldPrice,
    padding,
    imgItemHover,
    statusName,
    colorStatus=COLOR.TEXT_COLOR_STATUS_PRO,
    margin="0px",
    nameButton,
    data,
}){
    return <div className={"itemProductCommon"}>
        <div className="imgItems">
            <img className="imgMain" src={imgItem}/>
            <img className="imgHover" src={imgItemHover}/>
            {
                statusName
                ?  <div className="statusProduct"><span>{statusName}</span></div>
                : <></>
            }
        </div>
        <div className="descriptionItem">
            <h3>{nameItem}</h3>
            <p className="priceItem">
                <span>{price} ₫</span>
                {
                    oldPrice ? <span>{oldPrice} ₫</span> : <></>
                }
            </p>
            <p><ButtonCommon text= {nameButton ?  nameButton : "Thêm vào giỏ"} width={"35%"} display="block">  </ButtonCommon></p>
        </div>
        
        <style jsx>{`

            .itemProductCommon{
                padding: ${padding ? padding : "30px 0"};
                display: flex;
                flex-direction: column;
                margin: ${margin};
            }
            
            .imgHover{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                
            }
            .imgMain{
                object-fit: cover;
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
            }

            .imgItems{
               position: relative;
               transition: 0.3s;
               overflow: hidden;
               height: 300px;
               
               &:hover{
                .imgHover{
                    transition: 0.3s;
                    opacity: 1;
                }
               }
            }
            .statusProduct{
                position: absolute;
                left: 10px;
                top: 15px;
                span{
                    padding: 8px 15px;
                    background-color: ${COLOR.WHITE};
                    border-radius: 5px;
                }
                color: ${colorStatus};
            }
            .descriptionItem{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }
            .priceItem{
                width: 100%;
                padding: 20px 0;
                span{
                    margin-right: 10px;
                    font-size: 1.2vw;
                }
                span:nth-child(2){
                    opacity: 0.5;
                    text-decoration: line-through;
                }
            }
            p{
                width: 100%;
            }
            h3{
                text-transform: capitalize;
                font-size: 1.2vw;
                font-weight: 600;
                width: 100%;
                padding: 15px 0;
                padding-bottom: 0;
            }
            @media only screen and (max-width: 599px){
                h3{
                    font-size: 4vw;
                }
                .imgItems {
                    height: 200px;
                }
                .priceItem{
                    padding: 20px 0;
                    span{
                        font-size: 3vw;
                    }
                }
            }
            
        `}</style>
    </div>
}