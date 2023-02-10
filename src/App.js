import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error"
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContex from "./utils/UserContext";
// Lazy load offers section to have differnt bundling
const YourOffers = lazy(()=> import("./components/YourOffers"));
const About = lazy(()=> import("./components/About"));

const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Teju",
        email: "teju@ContextProvider.com"
    })
    return (
        <>
        <UserContex.Provider value={{user:user, setUser:setUser}}>
        <Header></Header>
        {/* Render outlet accoring to the config. This will be dynamic */}
        <Outlet></Outlet>
        {/* <Body></Body> */}
        <Footer></Footer>
        </UserContex.Provider>
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
            element: <Suspense><About></About></Suspense>,
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
        {
            path: "/offers",
            element: <Suspense fallback={<Shimmer></Shimmer>}><YourOffers></YourOffers></Suspense>
        }
    ]
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);