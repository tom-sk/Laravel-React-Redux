import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class UserList extends Component{
    constructor(){
        super();
        this.state = {
            events: []
        }
        this.updateState = this.updateState.bind(this);
    }
    componentWillMount()
    {
        axios.get('/users')
            .then(response => {
               this.updateState(response.data);
            }); 
    }
    updateState(events) {
        this.setState({events});
    }
    render(){
        console.log(this.events);
        return (
            <div className="home-container">
                <h1>users</h1>
                 {/* {this.events.map(function(user){
                    return <li>{user.name}</li>
                })}  */}
               
            </div>
        )
    }
}
