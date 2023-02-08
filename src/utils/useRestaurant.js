import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (id) => {
    const [restaurantDetails, setRestaurantDetails] = useState(null); 
    useEffect( () => {
        getRestaurantInfo();
    }, []);

    // get the restaunt details and menu
    async function getRestaurantInfo() {
        const restaurantData = await fetch(FETCH_MENU_URL+id)
        const jsonData = await restaurantData.json();
        setRestaurantDetails(jsonData.data);
    }
    return restaurantDetails;
}

export default useRestaurant;