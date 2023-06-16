import Heading from "../components/Heading";
import css from "../styles/404.module.scss";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Head from "next/head";

const Error = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])

    return (
        <div className={css.wrapper}>
            <Head>
                <title>Jack</title>
            </Head>
            <Heading text="Error 404" />
        </div>
    )

}

export default Error;