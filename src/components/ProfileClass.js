import React, { Component } from "react";
//This is Temp class based component
class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countByFive: 0
        }
    }

    componentDidMount(params) {
        console.log("ComponenetDidMount")
    }

   render() {
        return (
            <div style={{backgroundColor:"lightblue"}}>
            <h1>Profile Class component</h1>
            <h2>{this.props.PropName}</h2>
            <button onClick={()=> this.setState({...this.state, count: this.state.count+1})}>Increase count</button>
            <button onClick={()=> this.setState({...this.state, count: this.state.count-1})}>Decrease count</button>
            <button onClick={()=> this.setState({...this.state, count:0})}>Reset count</button>
            <h2>count from class component - {this.state.count}</h2>

            <button onClick={()=> this.setState({...this.state, countByFive: this.state.countByFive+5})}>Increase count by 5</button>
            <button onClick={()=> this.setState({...this.state, countByFive: this.state.countByFive-5})}>Decrease count by 5</button>
            <button onClick={()=> this.setState({...this.state, countByFive:0})}>Reset count 0</button>
            <h2>count by 5 from functional component {this.state.countByFive}</h2>
            </div>
        )
   }
}

export default Profile;