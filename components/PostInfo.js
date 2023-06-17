import Heading from "./Heading";
import Image from "next/image";
import css from "../styles/Post.module.scss";

const PostInfo = ({post}) => {
    const {id, title, thumbnail, brand, price, category, rating, description} = post || {};

    if(!post) {
        return <Heading text="Empty post"/>
    }

    return (
        <>
            <Heading text={title} tag="h2"/>
            <div className="">
                <strong>Title: </strong>
                {title}
            </div>
            <div>
                <Image src={thumbnail} width={150} height={100} className={css.img} />
                <Heading text={title} />
                <div>
                    <span className={css.post_id}>{id}</span>
                    <span className={css.post_id}>{rating}/5</span>
                    <span className={css.post_id}>{brand}</span>
                    <span className={css.post_id}>{price}$</span>
                    <span className={css.post_id}>{category}</span>
                </div>
            </div>
            <div className="">
                <strong>Id/description: </strong>
                {`${id}/${description} `}
            </div>
        </>
    )
}


export default PostInfo;