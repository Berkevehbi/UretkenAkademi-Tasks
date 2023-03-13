import axios from "axios";
import Database from "./cmp/database.js";
import Loading from "./cmp/loading.js";
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./App.css";
import loading from "./cmp/loading.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  
  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.setState({ data: response.data, loading: false });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading></Loading>;
    }

    return (
      <div>
        {this.state.data.map((item) => (
          <Database key={item.id} username = {item.username} name = {item.name}/>
        ))}
      </div>
    );
  }
}

