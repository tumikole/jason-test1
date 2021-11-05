import React, { Component } from "react";
import List from "./popUpList";
import '../App.css'

export default class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;

    let newState = {
      name
    };
    if (name) {
      this.setState({
        list: [...this.state.list, newState],
        
      });
      this.setState({
          name: "",
        });
    }
};

render() {
      console.log(this.state.list)
    return (
      <div class="formContainer">
          <h1>Add Items</h1>
        <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />

          <input type="submit" value="Add" />
        </form>
<h2>Added Items</h2>
        <List list={this.state.list} />
      </div>
    );
  }
}
