const heading1 = React.createElement("h1", {id:"title1",  key:"key1"}, "Heading 1");
const heading2 = React.createElement("h2", {id:"title2", key:"key2"}, "Heading2");
const containerDiv = React.createElement("div", {id:"container"}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(containerDiv);