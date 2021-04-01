// import CONFIG from "web.config";
import MasterPageBasic from "components/website/master/MasterPageBasic";
import Header from "components/website/elements/Header";
import Footer from "components/website/elements/Footer";
import {useRouter} from "next/router";
import Container from "components/website/elements/Container";
import CartContent from "components/website/vi/cart/CartContent";
export default function LoginPage(props) {
  const router = useRouter();

  return (
    <MasterPageBasic hidePrevButton header="Cart">
      <Header active="pCart"></Header>
      <main id="pCart" className="pCart">
        <Container>
            <CartContent></CartContent>
        </Container>
      </main>
      <Footer></Footer>
    </MasterPageBasic>
  );
}
