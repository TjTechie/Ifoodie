import { Outlet } from "react-router-dom";
import Header from "./Header";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";
import UserContex from "../utils/UserContext";

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
                <UserContex.Consumer>
                    {({user}) => <h4 className="p-2 m-2">Hello {user.name}, This section shows use of context API in class based component</h4>}
                </UserContex.Consumer>
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