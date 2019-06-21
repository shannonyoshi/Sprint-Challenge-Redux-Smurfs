import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  handleChanges = e => {
      e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };
  addSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
    this.setState({name: '', age: '', height: ''})
  };

  render() {
    return (
      <div className="form-wrapper">
        <h3>Add Smurf</h3>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleChanges}
            placeholder="Name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleChanges}
            placeholder="Age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleChanges}
            placeholder="Height"
            value={this.state.height}
            name="height"
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
