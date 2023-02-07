import { Outlet } from "react-router-dom";
import Header from "./Header";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";

// const About = () => {
//     return (
//         <div>
//             <h1>About us Page</h1>
//             <p>
//                 { " "}
//                 This is the routing demo
//             </p>
//             <ProfileFunctionalComponent PropName={" This is Functionalcomp"}></ProfileFunctionalComponent>
//             <Profile PropName={"This is ClassComp"}></Profile>
//             {/* <Profile */}
//         </div>
//     )
// }

class About extends Component {
    render() {
        return (
            <div>
                <h1>About us Page</h1>
                <p>
                    { " "}
                    Class bases aboutUs component with class and funtional child component
                </p>
                <ProfileFunctionalComponent PropName={" This is Functionalcomp"}></ProfileFunctionalComponent>
                <Profile PropName={"This is ClassComp"}></Profile>
            </div>
        )
    }
}

export default About;