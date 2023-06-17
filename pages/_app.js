import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import youtubeImg from "../public/logo.png";
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
    </Layout>
);



export default MyApp;
