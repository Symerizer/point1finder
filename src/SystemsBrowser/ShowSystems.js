import React, { Component } from 'react';

class ShowSystems extends Component {
    constructor(){
        super();
        this.state ={
            rawdata: require('../evedata/point1.json'),
            systems: null
        }
    }

    loadSystems = (nextProps) => {
        let systemsMap = this.state.rawdata.point1.filter(systemName => systemName["region"] === nextProps.selectedRegion);
        this.setState({systems: systemsMap});
        console.log(systemsMap)
    };

    componentWillReceiveProps(nextProps){
        this.loadSystems(nextProps);
    };

    render(){
        return(
            <div>
                <h3>{this.props.selectedRegion}</h3>
                <div className="row">
                    <div className="col-md-12">

                    </div>
                </div>
            </div>
        )
    }
}

export default ShowSystems;