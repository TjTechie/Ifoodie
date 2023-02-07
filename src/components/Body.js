import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants ) {
    console.log("hello",searchText,restaurants) 
    const filteredData =  restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    console.log("filterd",  filteredData)
     return filteredData;
}

const Body = () => {
    const [ searchText, setSearchText ] = useState("KFC");
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

    //Do not render component if no restaurants
    if(!allRestaurants) return null;
    // if(filteredRestaurants?.length === 0 ) {
    //     return <h1>No restaurants found with your search</h1>
    // }
     
    return ( filteredRestaurants.length === 0 ) ? <Shimmer></Shimmer> : (
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="search" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
            <button className="search-btn" onClick={()=> {
                const data = filterData( searchText, allRestaurants );
                setFilteredRestaurants(data);
            }}>Search</button>
        </div>
        <div className="restaurant-list">
            {
                filteredRestaurants.map( (restaurant) => {
                    return  <Link to={"restuarant/" + restaurant.data.id}><RestaurantCard {...restaurant.data} key={restaurant.data.id}></RestaurantCard></Link>
                })
            }
        </div>
        </>
    );
}

export default Body;