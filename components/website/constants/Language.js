import MENU from "components/website/constants/languages/menu/Menu";
import HOME_PAGE from "components/website/constants/languages/home/Home";
import ABOUT_PAGE from "components/website/constants/languages/about/About";
import CATERING_PAGE from "components/website/constants/languages/catering/Catering";
import SHOP_PAGE from "components/website/constants/languages/shop/Shop";
import REGISTER_PAGE from "components/website/constants/languages/register/Register";
import LOGIN_PAGE from "components/website/constants/languages/login/Login";
import FOOTER from "components/website/constants/languages/footer/Footer";
import SEARCH from "components/website/constants/languages/search/Search";
import CART from "components/website/constants/languages/cart/Cart";
import MENU_ACCOUNT from "components/website/constants/languages/menu-account/MenuAccount";

const LANGUAGE = {

    EN: {
        MENU : MENU.EN,
        FOOTER : FOOTER.EN,
        HOME_PAGE : HOME_PAGE.EN,
        ABOUT_PAGE: ABOUT_PAGE.EN,
        CATERING_PAGE:CATERING_PAGE.EN,
        SHOP_PAGE : SHOP_PAGE.EN,
        LOGIN_PAGE : LOGIN_PAGE.EN,
        REGISTER_PAGE : REGISTER_PAGE.EN,
        SEARCH: SEARCH.EN,
        CART: CART.EN,
        MENU_ACCOUNT: MENU_ACCOUNT.EN,
    },

    VI: {
        MENU : MENU.VI,
        FOOTER : FOOTER.VI,
        HOME_PAGE : HOME_PAGE.VI,
        ABOUT_PAGE: ABOUT_PAGE.VI,
        CATERING_PAGE:CATERING_PAGE.VI,
        SHOP_PAGE : SHOP_PAGE.VI,
        LOGIN_PAGE : LOGIN_PAGE.VI,
        REGISTER_PAGE : REGISTER_PAGE.VI,
        SEARCH: SEARCH.VI,
        CART: CART.VI,
        MENU_ACCOUNT: MENU_ACCOUNT.VI,
    },

    ALL: [
        MENU,
        FOOTER,
        HOME_PAGE,
        ABOUT_PAGE,
        CATERING_PAGE,
        SHOP_PAGE,
        LOGIN_PAGE,
        REGISTER_PAGE,
        SEARCH,
        CART,
        MENU_ACCOUNT,
    ]
    
}

export default LANGUAGE;
