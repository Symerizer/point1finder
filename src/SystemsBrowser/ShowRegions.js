import React, { Component } from 'react';
import './ShowRegions.css';
import ShowSystems from "./ShowSystems";

class ShowRegions extends Component {
    constructor(){
        super();
        this.state ={
            rawdata: require('../evedata/point1.json'),
            regions: null,
            selectedRegion: null
        }
    }

    onClick = (region, e) => {
        e.preventDefault();
        this.setState({ selectedRegion: region});
    };

    loadRegions = () => {
        let regionsMap = this.state.rawdata.point1.map(regionName => regionName["region"]);
        let uniqueRegions = [...new Set(regionsMap)];
        this.setState({regions: uniqueRegions});
    };

    componentWillMount(){
        this.loadRegions();
    }

    render(){
        return(
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3">
                        <ul>
                            {this.state.regions.map((region, i) =>{
                                return(
                                    <li key={i}><a onClick={(e) => this.onClick(region, e)} href={region}>{region}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <ShowSystems selectedRegion={this.state.selectedRegion}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowRegions;