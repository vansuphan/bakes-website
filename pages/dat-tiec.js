// import CONFIG from "web.config";
import MasterPageBasic from "components/website/master/MasterPageBasic";
// import BasicLayout from "components/diginext/layout/BasicLayout";
// import { useRouter } from "next/router";
import DashkitButton from "components/dashkit/Buttons";
import { BS } from "components/diginext/elements/Splitters";
import Header from "components/website/elements/Header";
import Footer from "components/website/elements/Footer";
import CateringContent from "components/website/vi/catering/CateringContent";

export default function Order(props) {
  // const router = useRouter();

  return (
    <MasterPageBasic hidePrevButton header="Diginext - Home Page">
      <Header active="dat-tiec"></Header>
      <main className="pCatering">
        <CateringContent></CateringContent>
      </main>
      <Footer></Footer>
    </MasterPageBasic>
  );
}
