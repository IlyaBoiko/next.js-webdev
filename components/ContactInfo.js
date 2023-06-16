
import Heading from "./Heading";
import {contactType} from "../types";



const ContactInfo = ({contact}) => {
    const {name, email, address} = contact || {};
    const {street, suite, city, zipcode} = address || {};

    if(!contact) {
        return <Heading text="Empty contact"/>
    }

    return (
        <>
            <Heading text={name} tag="h2"/>
            <div className="">
                <strong>Email: </strong>
                {email}
            </div>
            <div className="">
                <strong>Address: </strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    )
}


export default ContactInfo;