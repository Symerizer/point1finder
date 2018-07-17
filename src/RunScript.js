import React, { Component } from 'react';
import ReactJson from 'react-json-view';

class RunScript extends Component {
    constructor(){
        super();
        this.state = {
            point1raw: null
        }
    }

    runScripts = () => {

        const rawdata = JSON.parse(JSON.stringify(require('./evedata/universe-pretty')));
        let point1systems = rawdata.solarSystems.filter(point1 => point1["security"] < 0.155).filter(point1=>point1["security"] > 0);
        this.setState({point1raw: point1systems});
    }

    render(){
        return(
            <div>
                <button onClick={this.runScripts}>
                    Run the scripts
                </button>
                <ReactJson src={this.state.point1raw}/>
            </div>
        )
    }
}

export default RunScript;