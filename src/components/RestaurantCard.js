import { useContext } from "react";
import { Link } from "react-router-dom"
import UserContex from "../utils/UserContext";

const RestaurantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {
   const {user} = useContext(UserContex)
    return(
        <div className="w-[200] h-80 shadow-lg bg-pink-100 m-2 p-2">
            <img alt="restaurant-card" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId}></img>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
            <h4>Hello{user.name}</h4>
        </div>
    )
}

export default RestaurantCard;