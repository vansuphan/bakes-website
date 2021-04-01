// import CONFIG from "web.config";
import MasterPageBasic from "components/website/master/MasterPageBasic";
// import { useRouter } from "next/router";
import DashkitButton from "components/dashkit/Buttons";
import Header from "components/website/elements/Header";
import HomeContent from "@/components/website/vi/home/HomeContent";
import Footer from "components/website/elements/Footer";

export default function Home(props) {
  // const router = useRouter();

  return (
    <MasterPageBasic hidePrevButton header="Diginext - Home Page">
      <Header></Header>
      <main id="pHome" className="pHome">
        <HomeContent></HomeContent>
      </main>
      <Footer></Footer>
    </MasterPageBasic>
  );
}
