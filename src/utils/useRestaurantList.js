import { useEffect, useState } from "react";

const useRestaurantList = () => {
 
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(()=> {
        getRestaurants();
    },[]);
    
    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    return [ allRestaurants, filteredRestaurants, setFilteredRestaurants];

}

export default useRestaurantList;