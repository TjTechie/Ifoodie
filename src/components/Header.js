import { useState } from "react";
import Logo from "../assets/img/ifoodie_logo.png";
import { Link } from "react-router-dom";

const Title = () => {

return (
    <a href="/"><img alt="iFoodie-logo" src={Logo} className="logo"></img></a>
);
}

const Header = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(true);
    return (
        <div className="header">
            <Title></Title>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/offers">Your offers</Link></li>
                    <li>Cart</li>
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