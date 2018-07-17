import React, { Component } from 'react';

class ShowSystems extends Component {
    constructor(){
        super();
        this.state ={
            isHidden: true,
        }
    }

    render(){
        return(
            <div>{this.props.selectedRegion}</div>
        )
    }
}

export default ShowSystems;