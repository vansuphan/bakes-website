// import CONFIG from "web.config";
import MasterPageBasic from "components/website/master/MasterPageBasic";
// import BasicLayout from "components/diginext/layout/BasicLayout";
// import { useRouter } from "next/router";
// import Header from "components/website/elements/Header";
import DashkitButton from "components/dashkit/Buttons";
import { BS } from "components/diginext/elements/Splitters";
import Header from "components/website/elements/Header";
import Footer from "components/website/elements/Footer";
import AboutContent from "components/website/vi/about/AboutContent";
export default function Shop(props) {
  // const router = useRouter();

  return (
    <MasterPageBasic hidePrevButton header="Diginext - Home Page">
      <Header active="ve-bakes"></Header>
      <main id="pAbout" className="pAbout">
        <AboutContent></AboutContent>
      </main>
      <Footer></Footer>
    </MasterPageBasic>
  );
}
