import Head from "next/head";
import PostInfo from "../../components/PostInfo";

export const getStaticPaths = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await fetch('https://dummyjson.com/products');
    
    const result = await response.json();
    const data = result.products;

    const paths = data.map(({id}) => ({
        params: {id: id.toString()},
    }))

    return {
        paths,
        fallback: false,
    }
};


export const getStaticProps = async (context) => {
    const {id} = context.params;
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();

    if(!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {post: data}
    }
}



const Post = ({post}) => (
    <>
        <Head>
            <title>{post.title}</title>
        </Head>
        <PostInfo post={post} />
    </>
);

export default Post;