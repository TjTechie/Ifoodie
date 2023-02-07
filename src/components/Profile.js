import { useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [countByFive, setCountByFive] = useState(0);
    return (
        <div style={{backgroundColor:"pink"}}>
            <h2>Profile Component</h2>
            <h2>{props.PropName}</h2>
            <button onClick={()=> setCount(count+1)}>Increase count</button>
            <button onClick={()=> setCount(count-1)}>Decrease count</button>
            <button onClick={()=> setCount(0)}>Reset count</button>
            <h2>count from functional component {count}</h2>

            <button onClick={()=> setCountByFive(countByFive+5)}>Increase count by 5</button>
            <button onClick={()=> setCountByFive(countByFive-5)}>Decrease count by 5</button>
            <button onClick={()=> setCountByFive(0)}>Reset count 0</button>
            <h2>count by 5 from functional component {countByFive}</h2>
           
        </div>
    )
}

export default Profile;