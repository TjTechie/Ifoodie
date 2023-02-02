import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => <h1 id="title" key="h2">Title</h1>
const Header = () => {
    return (
        <div>
            <Title></Title>
            <h1>Hello functional component</h1>
            <h2>Heading2</h2>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);