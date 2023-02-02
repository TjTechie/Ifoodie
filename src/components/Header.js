import { useState } from "react";

const Title = () => {
    const imgsrcTemp = "data:image/png;base64,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"
return (
    <a href="/"><img alt="iFoodie-logo" src={imgsrcTemp} className="logo"></img></a>
);
}

const Header = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(true);
    return (
        <div className="header">
            <Title></Title>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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