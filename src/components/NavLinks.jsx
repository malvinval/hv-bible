import { Link } from "react-router-dom";

const NavLinks = () => {
    const element = (
        <>
            <li><Link className="bg-transparent z-50" to={"/"}>Search in bible</Link></li>
            <li><Link className="bg-transparent z-50" to={"/contribute"}>Contribute</Link></li>
        </>
    );

    return element;
}

export default NavLinks;