import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants.js";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {id} = useParams();
    const [ restaurantDetails, setRestaurantDetails ] = useState();
    useEffect( () => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const restaurantData = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=18.5204303&lng=73.8567437&menuId="+id)
        const jsonData = await restaurantData.json();
        setRestaurantDetails(jsonData.data);
    }
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