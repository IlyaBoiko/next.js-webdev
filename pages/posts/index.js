import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import Image from "next/image";
import css from "../../styles/Post.module.scss";


export const getStaticProps = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await fetch('https://dummyjson.com/products?limit=20');
    
    const result = await response.json();
    const data = result.products;


    if(!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {posts: data}
    }
}



const Posts = ({posts}) => (
    <>
        <Head>
            <title>Posts</title>
        </Head>
        <Heading text="Posts list:" />
        <ul className={css.post_wrapper}>
            {posts && posts.map(({id, title, thumbnail, brand, price, category, rating, description}) => (
                <li className={css.post_li} key={id}>
                    <Image src={thumbnail} width={150} height={100} className={css.img} />
                    <Heading text={title} />
                    <div>
                        <span className={css.post_id}>{id}</span>
                        <span className={css.post_id}>{rating}/5</span>
                        <span className={css.post_id}>{brand}</span>
                        <span className={css.post_id}>{price}$</span>
                        <span className={css.post_id}>{category}</span>
                    </div>
                    <p>{description}</p>
                    <Link href={`/posts/${id}`} className={css.btn}>Buy</Link>
                </li>
            ))}
        </ul>
    </>

);



export default Posts;