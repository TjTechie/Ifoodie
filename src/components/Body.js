import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react"

function filterData(searchText, restaurants ) {
    console.log("hello",searchText,restaurants)
    const filteredData =  restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
    console.log("filterd",  filteredData)
     return filteredData;
}

const Body = () => {
    const [ restaurants, setRestaurants ] = useState(restaurantList);
    const [ searchText, setSearchText ] = useState("KFC");
    
    return (
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="search" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
            <button className="search-btn" onClick={()=> {
                const data = filterData( searchText, restaurants );
                setRestaurants(data);
            }}>Search</button>
        </div>
        <div className="restaurant-list">
            {
                restaurants.map( (restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}></RestaurantCard>
                })
            }
        </div>
        </>
    );
}

export default Body;