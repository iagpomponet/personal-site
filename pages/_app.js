import '../styles/globals.css'
import Layout from '../components/Layout';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    
  )
}

export default MyApp
