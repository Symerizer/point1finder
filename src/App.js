import React, { Component } from 'react';
import './App.css';
import ShowRegions from './SystemsBrowser/ShowRegions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <h1>Point 1 System Finder</h1>
              <div className="row">
                <div className="col-md-12">
                  <h2>Regions</h2>
                  <div className="row">
                    <ShowRegions/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
