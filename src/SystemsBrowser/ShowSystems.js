import React, { Component } from 'react';

class ShowSystems extends Component {
    constructor(){
        super();
        this.state ={
            rawdata: require('../evedata/point1.json')
        }
    }

    loadSystems = () => {
        let systemsMap = this.state.rawdata.point1.filter(systemName => systemName["region"] === this.props.selectedRegion);
        console.log(systemsMap)
    };

    componentDidUpdate(){
        this.loadSystems();
    };

    render(){
        return(
            <div>
                <h3>{this.props.selectedRegion}</h3>
            </div>
        )
    }
}

export default ShowSystems;