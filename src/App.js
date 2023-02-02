import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AppLayout = () => {
    return (
        <>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
        </>   
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);