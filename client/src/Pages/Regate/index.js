import React, { Component } from 'react';
import axios from 'axios';
class Regate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            regate: []
         }
    }
    componentDidMount(){
        axios.get("/regate")
        .then(res => this.setState({regate: res.data}))
    }
    /*funkcija = () => {
        console.log("state", this.state.regate);
    }*/
    render() { 
        return ( 
        <div>
            {this.state.regate.map((el, i) => 
                <div key = {i}>
                   <h2> {el.Name}</h2>
                </div>)}
           
 

        </div> );
    }
}
 
export default Regate;
