// import CONFIG from "web.config";
import MasterPageBasic from "components/website/master/MasterPageBasic";
// import BasicLayout from "components/diginext/layout/BasicLayout";
// import { useRouter } from "next/router";
// import Header from "components/website/elements/Header";
import DashkitButton from "components/dashkit/Buttons";
import { BS } from "components/diginext/elements/Splitters";
import Header from "components/website/elements/Header";
import Footer from "components/website/elements/Footer";
import ShopContent from "components/website/vi/shop/ShopContent";
export default function Shop(props) {
  // const router = useRouter();

  return (
    <MasterPageBasic hidePrevButton header="Diginext - Home Page">
      <Header active="shop"></Header>
      <main id="pShop" className="pShop">
        <ShopContent></ShopContent>
      </main>
      <Footer></Footer>
    </MasterPageBasic>
  );
}
