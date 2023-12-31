import Link from "next/link";
import Image from "next/image";
import css from "../styles/Navbar.module.scss";
import {useRouter} from "next/router";


const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar = () => {
    const {pathname} = useRouter();

    return (
        <nav className={css.nav}>
            <div className={css.logo}>
                <Image src="https://essayswriter.org/wp-content/themes/twentytwenty/img/logo.svg" alt="logo" width={170} height={35}/>
            </div>
            <div className={css.links}>
                {navigation.map(({id, title, path}) => (
                    <Link className={pathname === path ? css.active : null} key={id} href={path} >{title}</Link>
                ))}
            </div>
        </nav>
    )
};

export default Navbar;