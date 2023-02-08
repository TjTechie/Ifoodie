import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useIsOnline from "../utils/useIsOnline";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
    const [ searchText, setSearchText ] = useState("KFC");

    const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurantList();

    const isOnline = useIsOnline();
    if(!isOnline) {
        return <h1>🔴 You are offline. Please check your internet connection</h1>
    }

    //Do not render component if no restaurants
    if(!allRestaurants) return null;
     
    return ( allRestaurants.length === 0 ) ? <Shimmer></Shimmer> : (
        <>
        <div className="p-1 bg-pink-50 my-1">
            <input type="text" className="m-1 p-1"placeholder="search" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
            <button className="p-1 m-1 bg-purple-900 text-white rounded-lg hover:bg-gray-500" onClick={()=> {
                const data = filterData( searchText, allRestaurants );
                setFilteredRestaurants(data);
            }}>Search</button>
        </div>
        <div className="flex flex-wrap justify-evenly bg-purple-900">
            {
                filteredRestaurants.map( (restaurant) => {
                    return  <Link to={"restuarant/" + restaurant.data.id} key={restaurant.data.id}><RestaurantCard {...restaurant.data} key={restaurant.data.id}></RestaurantCard></Link>
                })
            }
        </div>
        </>
    );
}

export default Body;