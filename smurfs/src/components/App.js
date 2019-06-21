import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf } from "../actions";

import "./App.css";
import SmurfForm from "./SmurfForm";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  deleteSmurf=(event,id)=> {
    console.log(id)
    event.preventDefault();
    this.props.deleteSmurf(id)
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => {
          return (
            <div className="smurf" key={smurf.id}>
              <h3>Name: {smurf.name}</h3>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
              <button onClick={e=>this.deleteSmurf(e,smurf.id)} >Delete Smurf</button>
            </div>
          );
        })}
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurf }
)(App);
