import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Jobs.js';

export class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      words: ""
    };
  }

  render() {
    return (
      <div className="jobs">
        <header className="componente principal">Job Search</header>
        <input className="input" type="text" value={this.state.keyword} onChange={e => this.setState({ words: e.target.value })} />
        <Link
          to={`/search/${this.state.words}`}
          className="btn btn-primary"
        >
          Search
        </Link>
      </div>
    );
  }
}

export default Jobs;