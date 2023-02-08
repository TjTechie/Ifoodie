import { useState } from "react";
import Logo from "../assets/img/ifoodie_logo.png";
import { Link } from "react-router-dom";

const Title = () => {

return (
    <a href="/"><img alt="iFoodie-logo" src={Logo} className="h-28 p-2"></img></a>
);
}

const Header = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(true);
    return (
        <div className="flex justify-between bg-pink-50 shadow-md md:bg-yellow-50 sm:bg-blue-50">
            <Title></Title>
            <div className="nav-items">
                <ul className="flex py10">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/offers">Your offers</Link></li>
                    <li className="px-2">Cart</li>
                </ul>                
            </div>
            {isLoggedIn ? (
                     <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                      ) : (
                      <button onClick={() => setIsLoggedIn(true)}>Login</button>
                      ) }
        </div>
    );
};

export default Header;