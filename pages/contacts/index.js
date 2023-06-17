import {useEffect, useState} from "react";
import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import css from "../../styles/Contacts.module.scss";


export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if(!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {contacts: data}
    }
}

const Contacts = ({contacts}) => {

    return (
        <>
            <Head>
                <title>Jack</title>
            </Head>
            <Heading text="Contacts List"/>
            <ul>
                {contacts && contacts.map(({id, name}) => (
                    <li key={id}>
                        <Link className={css.link} href={`/contacts/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}



export default Contacts;