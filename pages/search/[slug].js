// import CONFIG from "web.config";
import MasterPageBasic from "components/website/master/MasterPageBasic";
import DashkitButton from "components/dashkit/Buttons";
import { BS } from "components/diginext/elements/Splitters";
import Header from "components/website/elements/Header";
import Footer from "components/website/elements/Footer";
import {useRouter} from "next/router";

export async function getServerSideProps(context) {

    const params = context.params;
    const query = context.query;
    const slug = context.params.slug;

    return {
        props: {
            params,
            query,
            slug,
        },
    };
}


export default function LoginPage(props) {

  const router = useRouter();

  return (
    <MasterPageBasic hidePrevButton header="Search">
      <Header active="search"></Header>
      <main id="pSearch" className="pSearch">
        <h1>Search</h1>
      </main>
      <Footer></Footer>
    </MasterPageBasic>
  );
}
