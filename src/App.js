import React from "react";
import SearchBox from './SearchBox';
import CardList from "./CardList";
import '../src/cssFiles/app.css';

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }


    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render(){
        const filtredRobots = this.state.robots.filter(robot => {
            if(robot.name.toLowerCase().includes(this.state.searchField))
                return robot.name.toLowerCase();
        });

        return(
            <div className="tc">
            <h1 className="roboTitle">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filtredRobots}/>
            </div>
        );
    }
}

export default App;
