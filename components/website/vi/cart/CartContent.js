import TitleCommon from "components/website/title/TitleCommon";
import ListItemCart from "components/website/vi/cart/ListItemCart";
import PaymentCart from  "components/website/vi/cart/PaymentCart";
export default function CartContent({ }) {
    return <div className="CartContent">
        <TitleCommon padding={"35px 0 20px 0"}>{"Giỏ hàng"}</TitleCommon>
        <div className="cart">
           <ListItemCart></ListItemCart>
           <PaymentCart></PaymentCart>
        </div>
        <style jsx>{`
            .cart{
                display: grid;
                grid-template-columns: 1fr 375px;
                column-gap: 40px;
            }
            @media only screen and (max-width: 768px){
                .cart {
                    grid-template-columns: 1fr 325px;
                }
            }
            @media only screen and (max-width: 599px){
                .cart {
                    grid-template-columns: 1fr;
                }
            }
        `}</style>
    </div>
}