import React, { Component } from 'react';
import axios from 'axios';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            news: []
         }
    }
    componentDidMount(){
        axios.get("/news")
        .then(res => this.setState({news: res.data}))
    }
    render() { 
        return ( 
        
        <div>
         {this.state.news.map((el, i) => 
                <div key = {i}>
                   <h2> {el.Title}</h2> 
                </div>
                )}

        </div>
     
        );
    }
}
 
export default Home;

