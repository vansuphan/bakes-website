import "antd/dist/antd.min.css";
import "styles/global.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "quill/dist/quill.snow.css";
import "styles/common.scss";
import "styles/responsive.scss";
import { ConfigLive } from "plugins/utils/ConfigLive";
import { useEffect } from "react";
import Compose from "components/website/contexts/Compose";
import PopupContext from "components/website/contexts/PopupContext";
import ApiContext from "components/website/contexts/ApiContext";
import FunctionContext from"components/website/contexts/FunctionContext";
import CartConstantContext from "components/website/contexts/CartConstantContext";
import LanguageContext from "components/website/contexts/LanguageContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ConfigLive.consoleHandle();
    return () => {};
  }, []);

  
  return <Compose
        components={[LanguageContext, PopupContext, ApiContext, FunctionContext, CartConstantContext]}
        isPublic={true} 
        authUser={{name: "test"}} 
        // use this way to add props to context.provider
        // getFn={getFn}
    >
      <Component {...pageProps} />
    </Compose>
}

export default MyApp;
