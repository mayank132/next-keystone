import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/Layout";
import {Context} from "../context/context"

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}

export default MyApp;