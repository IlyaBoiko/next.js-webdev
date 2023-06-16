import Head from "next/head";
import Heading from "../components/Heading";
import css from "../styles/Home.module.scss";
import Socials from "../components/Socials";

export const getStaticProps = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/socials/');
        const data = await response.json();

        if(!data) {
            return {
                notFound: true,
            }
        }
        return {
            props: {socials: data}
        }
    } catch {
        return {
            props: {socials: null}
        }
    }
};



const Home = ({socials}) => (
    <div className={css.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <Heading text="Home" />
        <Socials socials={socials} />
    </div>
);

export default Home;