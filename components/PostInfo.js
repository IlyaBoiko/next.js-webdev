import Heading from "./Heading";

const PostInfo = ({post}) => {
    const {title, body, id} = post || {};

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
            <div className="">
                <strong>Id/Body: </strong>
                {`${id}/${body} `}
            </div>
        </>
    )
}


export default PostInfo;