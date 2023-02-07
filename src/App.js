import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error"
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

const AppLayout = () => {
    return (
        <>
        <Header></Header>
        {/* Render outlet accoring to the config. This will be dynamic */}
        <Outlet></Outlet>
        {/* <Body></Body> */}
        <Footer></Footer>
        </>   
    );
}

const appRouter = createBrowserRouter([{
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
        {
            path: "/",
            element: <Body></Body>
        },
        {
            path: "/about",
            element: <About>
            </About>,
            children: [{
                path: "profile",
                element: <Profile></Profile>
            }]
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "restuarant/:id",
            element: <RestaurantMenu></RestaurantMenu>
        },
    ]
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);