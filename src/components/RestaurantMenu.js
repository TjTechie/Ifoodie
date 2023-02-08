import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants.js";
import useRestaurant from "../utils/useRestaurant.js";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {id} = useParams();
    const restaurantDetails = useRestaurant(id);
    
    return !restaurantDetails ? (
        <Shimmer />
      ) :
     (
    <div className="menu">
        <div>
        <h1>
            Restaurant id: {id}
        </h1>
        <h2>Welcome to the {restaurantDetails?.name}</h2>
        <img src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId}></img>
        <h3>{restaurantDetails?.area}</h3>
        <h3>{restaurantDetails?.city}</h3>
        <h3>{restaurantDetails?.avgRating}</h3>
        <h3>{restaurantDetails?.costForTwoMsg}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>
            { restaurantDetails?.menu?.items && Object.values(restaurantDetails?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
            </ul>        
        </div>
    </div>
    );
}

export default RestaurantMenu;